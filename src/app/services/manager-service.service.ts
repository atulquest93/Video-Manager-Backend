import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {

  server = "http://"+window.document.location.hostname+":3001";
  
  endpoints = {
    uploadKey: '/uploadServiceKeys',
    saveStorage: '/addGoogleAccounts',
    getConnectedStorage: '/getGoogleAccounts',
    uploadFilesGeneric: '/uploadFilesGeneric',
    getUploadedFiles: '/getFiles',
    addWordpress: '/addNewWordpress',
    getWordpress: '/getConnectedWpAccounts',
    updateWordpress : '/updateWordpress',
    deleteWp: '/deleteWPAccount',
    getCrawlers : '/getCrawlers',
    addtoCrawlerQueue : '/addtoCrawlerQueue',
    refreshStorageFiles : '/refreshStorageFiles',
    getCrawlerQueue : '/getCrawlerQueue',
    getStorageFiles : '/getStorageFiles',
    getAutoPosts : '/getAutoPosts',
    checkProxy : '/checkProxy',
    saveProxy : "/saveProxy"
  };

  constructor(private http: HttpClient) {

  }

  getEndpoint(key): any {
    return this.server + this.endpoints[key];
  }

  postFile(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append("files", fileToUpload, fileToUpload.name);
    return this.http.post(this.getEndpoint('uploadKey'), formData, { headers: {} })
      .pipe(map(() => { return true; }))
      .pipe(catchError((error: any) => {
        return Observable.throw(error.statusText);
      }));
  }

  uploadFiles(fileToUpload: File, type: any, fileName: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append("files", fileToUpload, fileToUpload.name);
    formData.append("type", type);
    formData.append("fileName", fileName);
    return this.http.post(this.getEndpoint('uploadFilesGeneric'), formData, { headers: {} });
  }

  saveStorage(data: Object): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    return this.http.post(this.getEndpoint('saveStorage'), data, options);
  }

  getConnectedStorage(): Observable<any> {
    return this.http.get(this.getEndpoint('getConnectedStorage'));
  }

  getUploadedFiles(type: String): Observable<any> {
    return this.http.get(this.getEndpoint('getUploadedFiles') + "?type=" + type);
  }

  saveWordpress(data: Object): Observable<any> {
    return this.http.post(this.getEndpoint('addWordpress'), data,
      { headers: { 'content-type': 'application/json' } })
  }

  deleteWordpress(data: Object): Observable<any> {
    return this.http.post(this.getEndpoint('deleteWp'), data,
      { headers: { 'content-type': 'application/json' } });
  }

  getWordpress(): Observable<any> {
    return this.http.get(this.getEndpoint('getWordpress'));
  }

  getCrawlers() : Observable<any>{
    return this.http.get(this.getEndpoint('getCrawlers'));
  }

  addtoCrawlerQueue(data) : Observable<any> {
    return this.http.post(this.getEndpoint('addtoCrawlerQueue'), data , {
      headers : {'content-type' : 'application/json'}
    });
  }

  refreshStorageFiles(storageId) : Observable<any>{
    return this.http.get(
        this.getEndpoint('refreshStorageFiles')+'?id='+storageId);
  }

  updateWordpress(wp) : Observable<any>{
    return this.http.post(this.getEndpoint('updateWordpress'), wp, {
      headers : {'content-type' : 'application/json'}
    });
  }

  checkPorxy(proxy) : Observable<any>{
    return this.http.post(this.getEndpoint('checkProxy'), proxy, {
      headers : {'content-type' : 'application/json'}
    });
  }

  saveProxy(proxy) : Observable<any>{
    return this.http.post(this.getEndpoint('saveProxy'), proxy, {
      headers : {'content-type' : 'application/json'}
    });
  }

}

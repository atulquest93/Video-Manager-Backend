import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {

  server = "http://localhost:3000";
  endpoints = {
    uploadKey : '/uploadServiceKeys',
    saveStorage : '/addGoogleAccounts',
    getConnectedStorage : '/getGoogleAccounts'
  };

  constructor(private http : HttpClient) {

  }

  getEndpoint(key) : any{
    return this.server+this.endpoints[key];
  }

  postFile(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append( "files", fileToUpload, fileToUpload.name);
    return this.http.post(this.getEndpoint('uploadKey'), formData, { headers: {} })
      .pipe(map(() => { return true; }))
      .pipe(catchError((error: any) => {
        return Observable.throw(error.statusText);
       }));
  }

  saveStorage(data : Object) : Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    console.log(data);
    return this.http.post(this.getEndpoint('saveStorage'), data, options);
  }

  getConnectedStorage() : Observable<any> {

    return this.http.get(this.getEndpoint('getConnectedStorage'));
  }

}

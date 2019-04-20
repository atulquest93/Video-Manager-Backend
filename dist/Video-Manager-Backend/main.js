(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _application_storage_add_storage_add_storage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../application/storage/add-storage/add-storage.component */ "./src/app/application/storage/add-storage/add-storage.component.ts");
/* harmony import */ var _application_wordpress_add_wordpress_add_wordpress_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../application/wordpress/add-wordpress/add-wordpress.component */ "./src/app/application/wordpress/add-wordpress/add-wordpress.component.ts");
/* harmony import */ var _application_wordpress_view_wordpress_view_wordpress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../application/wordpress/view-wordpress/view-wordpress.component */ "./src/app/application/wordpress/view-wordpress/view-wordpress.component.ts");
/* harmony import */ var _application_storage_view_storage_view_storage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../application/storage/view-storage/view-storage.component */ "./src/app/application/storage/view-storage/view-storage.component.ts");
/* harmony import */ var _application_wordpress_upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../application/wordpress/upload-files/upload-files.component */ "./src/app/application/wordpress/upload-files/upload-files.component.ts");
/* harmony import */ var _application_files_view_files_view_files_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../application/files/view-files/view-files.component */ "./src/app/application/files/view-files/view-files.component.ts");
/* harmony import */ var _application_crawler_crawler_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../application/crawler/crawler.component */ "./src/app/application/crawler/crawler.component.ts");
/* harmony import */ var _application_crawler_view_queue_view_queue_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../application/crawler/view-queue/view-queue.component */ "./src/app/application/crawler/view-queue/view-queue.component.ts");
/* harmony import */ var _application_crawler_view_posts_view_posts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../application/crawler/view-posts/view-posts.component */ "./src/app/application/crawler/view-posts/view-posts.component.ts");
/* harmony import */ var _application_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../application/settings/settings.component */ "./src/app/application/settings/settings.component.ts");














var routes = [
    {
        path: '', component: _application_storage_add_storage_add_storage_component__WEBPACK_IMPORTED_MODULE_4__["AddStorageComponent"]
    }, {
        path: 'wordpress/addWordpress', component: _application_wordpress_add_wordpress_add_wordpress_component__WEBPACK_IMPORTED_MODULE_5__["AddWordpressComponent"]
    }, {
        path: 'wordpress/viewWordpress', component: _application_wordpress_view_wordpress_view_wordpress_component__WEBPACK_IMPORTED_MODULE_6__["ViewWordpressComponent"]
    }, {
        path: 'storage/addStorage', component: _application_storage_add_storage_add_storage_component__WEBPACK_IMPORTED_MODULE_4__["AddStorageComponent"]
    }, {
        path: 'storage/viewStorage', component: _application_storage_view_storage_view_storage_component__WEBPACK_IMPORTED_MODULE_7__["ViewStorageComponent"]
    }, {
        path: 'wordpress/uploadFiles', component: _application_wordpress_upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_8__["UploadFilesComponent"]
    }, {
        path: 'storage/files', component: _application_files_view_files_view_files_component__WEBPACK_IMPORTED_MODULE_9__["ViewFilesComponent"]
    }, {
        path: 'crawler', component: _application_crawler_crawler_component__WEBPACK_IMPORTED_MODULE_10__["CrawlerComponent"]
    }, {
        path: 'crawler/viewCrawlerQueue', component: _application_crawler_view_queue_view_queue_component__WEBPACK_IMPORTED_MODULE_11__["ViewQueueComponent"]
    }, {
        path: 'crawler/viewPosts', component: _application_crawler_view_posts_view_posts_component__WEBPACK_IMPORTED_MODULE_12__["ViewPostsComponent"]
    }, {
        path: 'settings', component: _application_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"gray\">\n\n  <!-- Wrapper -->\n  <div id=\"wrapper\">\n  \n  <!-- Header Container\n  ================================================== -->\n  <header id=\"header-container\" class=\"fullwidth dashboard-header not-sticky\">\n  \n    <!-- Header -->\n    <div id=\"header\">\n      <div class=\"container\">\n        \n        <!-- Left Side Content -->\n        <div class=\"left-side\">\n          \n          <!-- Logo -->\n          <div id=\"logo\">\n            <a href=\"index.html\"><img src=\"assets/images/logo.png\" alt=\"\"></a>\n          </div>\n  \n          <!-- Main Navigation -->\n          <!-- <nav id=\"navigation\">\n            <ul id=\"responsive\">\n  \n              <li><a href=\"#\">Home</a>\n                <ul class=\"dropdown-nav\">\n                  <li><a href=\"index.html\">Home 1</a></li>\n                  <li><a href=\"index-2.html\">Home 2</a></li>\n                  <li><a href=\"index-3.html\">Home 3</a></li>\n                </ul>\n              </li>\n  \n              <li><a href=\"#\">Find Work</a>\n                <ul class=\"dropdown-nav\">\n                  <li><a href=\"#\">Browse Jobs</a>\n                    <ul class=\"dropdown-nav\">\n                      <li><a href=\"jobs-list-layout-full-page-map.html\">Full Page List + Map</a></li>\n                      <li><a href=\"jobs-grid-layout-full-page-map.html\">Full Page Grid + Map</a></li>\n                      <li><a href=\"jobs-grid-layout-full-page.html\">Full Page Grid</a></li>\n                      <li><a href=\"jobs-list-layout-1.html\">List Layout 1</a></li>\n                      <li><a href=\"jobs-list-layout-2.html\">List Layout 2</a></li>\n                      <li><a href=\"jobs-grid-layout.html\">Grid Layout</a></li>\n                    </ul>\n                  </li>\n                  <li><a href=\"#\">Browse Tasks</a>\n                    <ul class=\"dropdown-nav\">\n                      <li><a href=\"tasks-list-layout-1.html\">List Layout 1</a></li>\n                      <li><a href=\"tasks-list-layout-2.html\">List Layout 2</a></li>\n                      <li><a href=\"tasks-grid-layout.html\">Grid Layout</a></li>\n                      <li><a href=\"tasks-grid-layout-full-page.html\">Full Page Grid</a></li>\n                    </ul>\n                  </li>\n                  <li><a href=\"browse-companies.html\">Browse Companies</a></li>\n                  <li><a href=\"single-job-page.html\">Job Page</a></li>\n                  <li><a href=\"single-task-page.html\">Task Page</a></li>\n                  <li><a href=\"single-company-profile.html\">Company Profile</a></li>\n                </ul>\n              </li>\n  \n              <li><a href=\"#\">For Employers</a>\n                <ul class=\"dropdown-nav\">\n                  <li><a href=\"#\">Find a Freelancer</a>\n                    <ul class=\"dropdown-nav\">\n                      <li><a href=\"freelancers-grid-layout-full-page.html\">Full Page Grid</a></li>\n                      <li><a href=\"freelancers-grid-layout.html\">Grid Layout</a></li>\n                      <li><a href=\"freelancers-list-layout-1.html\">List Layout 1</a></li>\n                      <li><a href=\"freelancers-list-layout-2.html\">List Layout 2</a></li>\n                    </ul>\n                  </li>\n                  <li><a href=\"single-freelancer-profile.html\">Freelancer Profile</a></li>\n                  <li><a href=\"dashboard-post-a-job.html\">Post a Job</a></li>\n                  <li><a href=\"dashboard-post-a-task.html\">Post a Task</a></li>\n                </ul>\n              </li>\n  \n              <li><a href=\"#\" class=\"current\">Dashboard</a>\n                <ul class=\"dropdown-nav\">\n                  <li><a href=\"dashboard.html\">Dashboard</a></li>\n                  <li><a href=\"dashboard-messages.html\">Messages</a></li>\n                  <li><a href=\"dashboard-bookmarks.html\">Bookmarks</a></li>\n                  <li><a href=\"dashboard-reviews.html\">Reviews</a></li>\n                  <li><a href=\"dashboard-manage-jobs.html\">Jobs</a>\n                    <ul class=\"dropdown-nav\">\n                      <li><a href=\"dashboard-manage-jobs.html\">Manage Jobs</a></li>\n                      <li><a href=\"dashboard-manage-candidates.html\">Manage Candidates</a></li>\n                      <li><a href=\"dashboard-post-a-job.html\">Post a Job</a></li>\n                    </ul>\n                  </li>\n                  <li><a href=\"dashboard-manage-tasks.html\">Tasks</a>\n                    <ul class=\"dropdown-nav\">\n                      <li><a href=\"dashboard-manage-tasks.html\">Manage Tasks</a></li>\n                      <li><a href=\"dashboard-manage-bidders.html\">Manage Bidders</a></li>\n                      <li><a href=\"dashboard-my-active-bids.html\">My Active Bids</a></li>\n                      <li><a href=\"dashboard-post-a-task.html\">Post a Task</a></li>\n                    </ul>\n                  </li>\n                  <li><a href=\"dashboard-settings.html\">Settings</a></li>\n                </ul>\n              </li>\n  \n              <li><a href=\"#\">Pages</a>\n                <ul class=\"dropdown-nav\">\n                  <li><a href=\"pages-blog.html\">Blog</a></li>\n                  <li><a href=\"pages-pricing-plans.html\">Pricing Plans</a></li>\n                  <li><a href=\"pages-checkout-page.html\">Checkout Page</a></li>\n                  <li><a href=\"pages-invoice-template.html\">Invoice Template</a></li>\n                  <li><a href=\"pages-user-interface-elements.html\">User Interface Elements</a></li>\n                  <li><a href=\"pages-icons-cheatsheet.html\">Icons Cheatsheet</a></li>\n                  <li><a href=\"pages-login.html\">Login & Register</a></li>\n                  <li><a href=\"pages-404.html\">404 Page</a></li>\n                  <li><a href=\"pages-contact.html\">Contact</a></li>\n                </ul>\n              </li>\n  \n            </ul>\n          </nav> -->\n          <div class=\"clearfix\"></div>\n          <!-- Main Navigation / End -->\n          \n        </div>\n        <!-- Left Side Content / End -->\n  \n  \n        <!-- Right Side Content / End -->\n        <div class=\"right-side\">\n  \n          <!--  User Notifications -->\n          <div class=\"header-widget hide-on-mobile\">\n            \n            <!-- Notifications -->\n            <div class=\"header-notifications\">\n  \n              <!-- Trigger -->\n              <div class=\"header-notifications-trigger\">\n                <a href=\"#\"><i class=\"icon-feather-bell\"></i><span>4</span></a>\n              </div>\n  \n              <!-- Dropdown -->\n              <div class=\"header-notifications-dropdown\">\n  \n                <div class=\"header-notifications-headline\">\n                  <h4>Notifications</h4>\n                  <button class=\"mark-as-read ripple-effect-dark\" title=\"Mark all as read\" data-tippy-placement=\"left\">\n                    <i class=\"icon-feather-check-square\"></i>\n                  </button>\n                </div>\n  \n                <div class=\"header-notifications-content\">\n                  <div class=\"header-notifications-scroll\" data-simplebar>\n                    <ul>\n                      <!-- Notification -->\n                      <li class=\"notifications-not-read\">\n                        <a href=\"dashboard-manage-candidates.html\">\n                          <span class=\"notification-icon\"><i class=\"icon-material-outline-group\"></i></span>\n                          <span class=\"notification-text\">\n                            <strong>Michael Shannah</strong> applied for a job <span class=\"color\">Full Stack Software Engineer</span>\n                          </span>\n                        </a>\n                      </li>\n  \n                      <!-- Notification -->\n                      <li>\n                        <a href=\"dashboard-manage-bidders.html\">\n                          <span class=\"notification-icon\"><i class=\" icon-material-outline-gavel\"></i></span>\n                          <span class=\"notification-text\">\n                            <strong>Gilbert Allanis</strong> placed a bid on your <span class=\"color\">iOS App Development</span> project\n                          </span>\n                        </a>\n                      </li>\n  \n                      <!-- Notification -->\n                      <li>\n                        <a href=\"dashboard-manage-jobs.html\">\n                          <span class=\"notification-icon\"><i class=\"icon-material-outline-autorenew\"></i></span>\n                          <span class=\"notification-text\">\n                            Your job listing <span class=\"color\">Full Stack PHP Developer</span> is expiring.\n                          </span>\n                        </a>\n                      </li>\n  \n                      <!-- Notification -->\n                      <li>\n                        <a href=\"dashboard-manage-candidates.html\">\n                          <span class=\"notification-icon\"><i class=\"icon-material-outline-group\"></i></span>\n                          <span class=\"notification-text\">\n                            <strong>Sindy Forrest</strong> applied for a job <span class=\"color\">Full Stack Software Engineer</span>\n                          </span>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n  \n              </div>\n  \n            </div>\n            \n            <!-- Messages -->\n            <div class=\"header-notifications\">\n              <div class=\"header-notifications-trigger\">\n                <a href=\"#\"><i class=\"icon-feather-mail\"></i><span>3</span></a>\n              </div>\n  \n              <!-- Dropdown -->\n              <div class=\"header-notifications-dropdown\">\n  \n                <div class=\"header-notifications-headline\">\n                  <h4>Messages</h4>\n                  <button class=\"mark-as-read ripple-effect-dark\" title=\"Mark all as read\" data-tippy-placement=\"left\">\n                    <i class=\"icon-feather-check-square\"></i>\n                  </button>\n                </div>\n  \n                <div class=\"header-notifications-content\">\n                  <div class=\"header-notifications-scroll\" data-simplebar>\n                    <ul>\n                      <!-- Notification -->\n                      <li class=\"notifications-not-read\">\n                        <a href=\"dashboard-messages.html\">\n                          <span class=\"notification-avatar status-online\"><img src=\"assets/images/user-avatar-small-03.jpg\" alt=\"\"></span>\n                          <div class=\"notification-text\">\n                            <strong>David Peterson</strong>\n                            <p class=\"notification-msg-text\">Thanks for reaching out. I'm quite busy right now on many...</p>\n                            <span class=\"color\">4 hours ago</span>\n                          </div>\n                        </a>\n                      </li>\n  \n                      <!-- Notification -->\n                      <li class=\"notifications-not-read\">\n                        <a href=\"dashboard-messages.html\">\n                          <span class=\"notification-avatar status-offline\"><img src=\"assets/images/user-avatar-small-02.jpg\" alt=\"\"></span>\n                          <div class=\"notification-text\">\n                            <strong>Sindy Forest</strong>\n                            <p class=\"notification-msg-text\">Hi Tom! Hate to break it to you, but I'm actually on vacation until...</p>\n                            <span class=\"color\">Yesterday</span>\n                          </div>\n                        </a>\n                      </li>\n  \n                      <!-- Notification -->\n                      <li class=\"notifications-not-read\">\n                        <a href=\"dashboard-messages.html\">\n                          <span class=\"notification-avatar status-online\"><img src=\"assets/images/user-avatar-placeholder.png\" alt=\"\"></span>\n                          <div class=\"notification-text\">\n                            <strong>Marcin Kowalski</strong>\n                            <p class=\"notification-msg-text\">I received payment. Thanks for cooperation!</p>\n                            <span class=\"color\">Yesterday</span>\n                          </div>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n  \n                <a href=\"dashboard-messages.html\" class=\"header-notifications-button ripple-effect button-sliding-icon\">View All Messages<i class=\"icon-material-outline-arrow-right-alt\"></i></a>\n              </div>\n            </div>\n  \n          </div>\n          <!--  User Notifications / End -->\n  \n          <!-- User Menu -->\n          <div class=\"header-widget\">\n  \n            <!-- Messages -->\n            <div class=\"header-notifications user-menu\">\n              <div class=\"header-notifications-trigger\">\n                <a href=\"#\"><div class=\"user-avatar status-online\"><img src=\"assets/images/user-avatar-small-01.jpg\" alt=\"\"></div></a>\n              </div>\n  \n              <!-- Dropdown -->\n              <div class=\"header-notifications-dropdown\">\n  \n                <!-- User Status -->\n                <div class=\"user-status\">\n  \n                  <!-- User Name / Avatar -->\n                  <div class=\"user-details\">\n                    <div class=\"user-avatar status-online\"><img src=\"assets/images/user-avatar-small-01.jpg\" alt=\"\"></div>\n                    <div class=\"user-name\">\n                      Tom Smith <span>Freelancer</span>\n                    </div>\n                  </div>\n                  \n                  <!-- User Status Switcher -->\n                  <div class=\"status-switch\" id=\"snackbar-user-status\">\n                    <label class=\"user-online current-status\">Online</label>\n                    <label class=\"user-invisible\">Invisible</label>\n                    <!-- Status Indicator -->\n                    <span class=\"status-indicator\" aria-hidden=\"true\"></span>\n                  </div>\t\n              </div>\n              \n              <ul class=\"user-menu-small-nav\">\n                <li><a href=\"dashboard.html\"><i class=\"icon-material-outline-dashboard\"></i> Dashboard</a></li>\n                <li><a href=\"dashboard-settings.html\"><i class=\"icon-material-outline-settings\"></i> Settings</a></li>\n                <li><a href=\"index-logged-out.html\"><i class=\"icon-material-outline-power-settings-new\"></i> Logout</a></li>\n              </ul>\n  \n              </div>\n            </div>\n  \n          </div>\n          <!-- User Menu / End -->\n  \n          <!-- Mobile Navigation Button -->\n          <span class=\"mmenu-trigger\">\n            <button class=\"hamburger hamburger--collapse\" type=\"button\">\n              <span class=\"hamburger-box\">\n                <span class=\"hamburger-inner\"></span>\n              </span>\n            </button>\n          </span>\n  \n        </div>\n        <!-- Right Side Content / End -->\n  \n      </div>\n    </div>\n    <!-- Header / End -->\n  \n  </header>\n  <div class=\"clearfix\"></div>\n  <!-- Header Container / End -->\n  \n  \n  <!-- Dashboard Container -->\n  <div class=\"dashboard-container\">\n  \n    <!-- Dashboard Sidebar\n    ================================================== -->\n    <div class=\"dashboard-sidebar\">\n      <div class=\"dashboard-sidebar-inner\" data-simplebar>\n        <div class=\"dashboard-nav-container\">\n  \n          <!-- Responsive Navigation Trigger -->\n          <a href=\"#\" class=\"dashboard-responsive-nav-trigger\">\n            <span class=\"hamburger hamburger--collapse\" >\n              <span class=\"hamburger-box\">\n                <span class=\"hamburger-inner\"></span>\n              </span>\n            </span>\n            <span class=\"trigger-title\">Dashboard Navigation</span>\n          </a>\n          \n          <!-- Navigation -->\n          <div class=\"dashboard-nav\">\n            <div class=\"dashboard-nav-inner\">\n  \n              <ul data-submenu-title=\"Start\">\n                <li class=\"active\"><a routerLink=\"/\"><i class=\"icon-material-outline-dashboard\"></i> Dashboard</a></li>\n                <li><a routerLink=\"crawler\"><i class=\"icon-material-outline-star-border\"></i> Crawler</a></li>\n                <li><a routerLink=\"storage/files\"><i class=\"icon-material-outline-rate-review\"></i> View Files</a></li>\n              </ul>\n              \n              <ul data-submenu-title=\"Manage Data\">\n                <li><a href=\"#\"><i class=\"icon-material-outline-business-center\"></i> Manage Storage</a>\n                  <ul>\n                    <li><a routerLink=\"storage/addStorage\">Add Storage</a></li>\n                    <li><a routerLink=\"storage/viewStorage\">View Storage</a></li>\n                  </ul>\t\n                </li>\n\n                <li><a href=\"#\"><i class=\"icon-material-outline-business-center\"></i> Manage Wordpress</a>\n                  <ul>\n                    <li><a routerLink=\"wordpress/addWordpress\">Add Wordpress</a></li>\n                    <li><a routerLink=\"wordpress/viewWordpress\">View Wordpress</a></li>\n                    <li><a routerLink=\"wordpress/uploadFiles\">Upload Files</a></li>\n                  </ul>\t\n                </li>\n\n                <li><a href=\"#\"><i class=\"icon-material-outline-business-center\"></i> Manage Crawlers</a>\n                  <ul>\n                    <li><a routerLink=\"crawler/viewCrawlerQueue\">View Crawler Queue</a></li>\n                    <li><a routerLink=\"crawler/viewPosts\">View Posts</a></li>\n                  </ul>\t\n                </li>\n              </ul>\n\n              <ul data-submenu-title=\"Auto Posters\">\n                <li><a href=\"#\"><i class=\"icon-material-outline-business-center\"></i> Schedulers</a>\n                  <ul>\n                    <li><a routerLink=\"/category/main-category\">View Scheduler</a></li>\n                    <li><a routerLink=\"/category/exams\">Scheduler Settings</a></li>\n                  </ul>\t\n                </li>\n              </ul>\n  \n              <ul data-submenu-title=\"Account\">\n                <li><a routerLink=\"/settings\"><i class=\"icon-material-outline-settings\"></i> Settings</a></li>\n                <li><a href=\"index-logged-out.html\"><i class=\"icon-material-outline-power-settings-new\"></i> Logout</a></li>\n              </ul>\n              \n            </div>\n          </div>\n          <!-- Navigation / End -->\n  \n        </div>\n      </div>\n    </div>\n    <!-- Dashboard Sidebar / End -->\n  \n  \n    <!-- Dashboard Content\n    ================================================== -->\n    <div class=\"dashboard-content-container\" data-simplebar>\n        <div class=\"dashboard-content-inner\" >\n     \n          <router-outlet></router-outlet>\n\n        </div>\n\n      </div>\n      <!-- Dashboard Content / End -->\n    \n    </div>\n    <!-- Dashboard Container / End -->\n    \n    </div>\n    <!-- Wrapper / End -->\n    \n    \n    <!-- Apply for a job popup\n    ================================================== -->\n    <div id=\"small-dialog\" class=\"zoom-anim-dialog mfp-hide dialog-with-tabs\">\n    \n      <!--Tabs -->\n      <div class=\"sign-in-form\">\n    \n        <ul class=\"popup-tabs-nav\">\n          <li><a href=\"#tab\">Add Note</a></li>\n        </ul>\n    \n        <div class=\"popup-tabs-container\">\n    \n          <!-- Tab -->\n          <div class=\"popup-tab-content\" id=\"tab\">\n            \n            <!-- Welcome Text -->\n            <div class=\"welcome-text\">\n              <h3>Do Not Forget ðŸ˜Ž</h3>\n            </div>\n              \n            <!-- Form -->\n            <form method=\"post\" id=\"add-note\">\n    \n              <select class=\"selectpicker with-border default margin-bottom-20\" data-size=\"7\" title=\"Priority\">\n                <option>Low Priority</option>\n                <option>Medium Priority</option>\n                <option>High Priority</option>\n              </select>\n    \n              <textarea name=\"textarea\" cols=\"10\" placeholder=\"Note\" class=\"with-border\"></textarea>\n    \n            </form>\n            \n            <!-- Button -->\n            <button class=\"button full-width button-sliding-icon ripple-effect\" type=\"submit\" form=\"add-note\">Add Note <i class=\"icon-material-outline-arrow-right-alt\"></i></button>\n    \n          </div>\n    \n        </div>\n      </div>\n    </div>\n  </body>\n  "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Video-Manager-Backend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _application_storage_add_storage_add_storage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application/storage/add-storage/add-storage.component */ "./src/app/application/storage/add-storage/add-storage.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _application_wordpress_add_wordpress_add_wordpress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./application/wordpress/add-wordpress/add-wordpress.component */ "./src/app/application/wordpress/add-wordpress/add-wordpress.component.ts");
/* harmony import */ var _application_wordpress_view_wordpress_view_wordpress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./application/wordpress/view-wordpress/view-wordpress.component */ "./src/app/application/wordpress/view-wordpress/view-wordpress.component.ts");
/* harmony import */ var _application_storage_view_storage_view_storage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./application/storage/view-storage/view-storage.component */ "./src/app/application/storage/view-storage/view-storage.component.ts");
/* harmony import */ var _application_files_view_files_view_files_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./application/files/view-files/view-files.component */ "./src/app/application/files/view-files/view-files.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _application_wordpress_upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./application/wordpress/upload-files/upload-files.component */ "./src/app/application/wordpress/upload-files/upload-files.component.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _application_crawler_crawler_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./application/crawler/crawler.component */ "./src/app/application/crawler/crawler.component.ts");
/* harmony import */ var _application_crawler_view_queue_view_queue_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./application/crawler/view-queue/view-queue.component */ "./src/app/application/crawler/view-queue/view-queue.component.ts");
/* harmony import */ var _application_crawler_view_posts_view_posts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./application/crawler/view-posts/view-posts.component */ "./src/app/application/crawler/view-posts/view-posts.component.ts");
/* harmony import */ var _application_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./application/settings/settings.component */ "./src/app/application/settings/settings.component.ts");
/* harmony import */ var _application_settings_proxy_settings_proxy_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./application/settings/proxy-settings/proxy-settings.component */ "./src/app/application/settings/proxy-settings/proxy-settings.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _application_storage_add_storage_add_storage_component__WEBPACK_IMPORTED_MODULE_4__["AddStorageComponent"],
                _application_wordpress_add_wordpress_add_wordpress_component__WEBPACK_IMPORTED_MODULE_6__["AddWordpressComponent"],
                _application_wordpress_view_wordpress_view_wordpress_component__WEBPACK_IMPORTED_MODULE_7__["ViewWordpressComponent"],
                _application_storage_view_storage_view_storage_component__WEBPACK_IMPORTED_MODULE_8__["ViewStorageComponent"],
                _application_files_view_files_view_files_component__WEBPACK_IMPORTED_MODULE_9__["ViewFilesComponent"],
                _application_wordpress_upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_12__["UploadFilesComponent"],
                _application_crawler_crawler_component__WEBPACK_IMPORTED_MODULE_14__["CrawlerComponent"],
                _application_crawler_view_queue_view_queue_component__WEBPACK_IMPORTED_MODULE_15__["ViewQueueComponent"],
                _application_crawler_view_posts_view_posts_component__WEBPACK_IMPORTED_MODULE_16__["ViewPostsComponent"],
                _application_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"],
                _application_settings_proxy_settings_proxy_settings_component__WEBPACK_IMPORTED_MODULE_18__["ProxySettingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_13__["Ng2SmartTableModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/application/crawler/crawler.component.css":
/*!***********************************************************!*\
  !*** ./src/app/application/crawler/crawler.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL2NyYXdsZXIvY3Jhd2xlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/application/crawler/crawler.component.html":
/*!************************************************************!*\
  !*** ./src/app/application/crawler/crawler.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" style=\"margin-bottom:50px;\">\n  <!-- Dashboard Box -->\n  <div class=\"col-xl-12\">\n\n    <div class=\"dashboard-box margin-top-0\">\n\n      <!-- Headline -->\n      <div class=\"headline\">\n        <h3><i class=\"icon-feather-folder-plus\"></i> Add file to crawler</h3>\n      </div>\n\n      <div *ngIf=\"state.isProcessComplete\" class=\"row\">\n        <div class=\"col-xl-12\">\n            <div  class=\"notification success closeable\">\n                <p>File Crawl iniated successfully. !</p>\n                <a (click)=\"state.isProcessComplete = false\" class=\"close\"></a>\n              </div>\n        </div>\n      </div>\n      <div class=\"content with-padding padding-bottom-10\">\n\n        <form (ngSubmit)=\"addtoQueue(f)\" #f=\"ngForm\">\n\n          <div class=\"row\">\n\n            <div class=\"col-xl-12\">\n              <div class=\"submit-field\">\n                <h5>URL</h5>\n                <input name=\"videoUrl\" ngModel type=\"text\" class=\"with-border\" placeholder=\"Video URL\" required>\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Select Crawler</h5>\n                <select [(ngModel)]=\"crawler\" name=\"crawler\" title=\"Select Cralwer\">\n                  <option *ngFor=\"let crawler of state.crawlerList\" [value]=\"crawler.name\" selected>{{crawler.name}}</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Select Wordpress to Post</h5>\n                <select [(ngModel)]=\"wordpress\" name=\"wordpress\" title=\"Select Wordpress\">\n                  <option *ngFor=\"let wp of state.connectedWpList\" [ngValue]=\"wp.name\" selected>{{wp.name}}</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Select Storage</h5>\n                <select [(ngModel)]=\"storage\" name=\"storage\" title=\"Select Storage\">\n                  <option *ngFor=\"let storage of state.googleAccounts\" [ngValue]=\"storage.name\" selected>{{storage.name}}</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-xl-12\">\n              <div class=\"submit-field\">\n                <div class=\"uploadButton margin-top-30\">\n                  <input class=\"uploadButton-input\" type=\"submit\" id=\"upload\" multiple />\n                  <label class=\"uploadButton-button ripple-effect\" for=\"upload\">Add to Crawler Queue</label>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </form>\n\n\n\n      </div>\n    </div>\n\n\n\n  </div>\n  <!-- End Dashboard box -->\n</div>\n<!-- End row -->"

/***/ }),

/***/ "./src/app/application/crawler/crawler.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/application/crawler/crawler.component.ts ***!
  \**********************************************************/
/*! exports provided: CrawlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrawlerComponent", function() { return CrawlerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manager-service.service */ "./src/app/services/manager-service.service.ts");



var CrawlerComponent = /** @class */ (function () {
    function CrawlerComponent(service) {
        this.service = service;
        this.state = {
            crawlerList: null,
            connectedWpList: null,
            googleAccounts: null,
            isProcessComplete: false
        };
    }
    CrawlerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCrawlers().subscribe(function (data) {
            _this.state.crawlerList = data;
        }, function (error) {
            alert("Unable to fetch Crawlers.");
        });
        this.service.getWordpress().subscribe(function (data) {
            _this.state.connectedWpList = data;
        }, function (error) {
            alert("Unable to fetch Connected Wordpress.");
        });
        this.service.getConnectedStorage().subscribe(function (data) {
            _this.state.googleAccounts = data;
            setTimeout(function () {
                $('select').selectpicker();
            }, 3000);
        }, function (error) {
            alert("Unable to load google storages.");
        });
    };
    CrawlerComponent.prototype.addtoQueue = function (formData) {
        var _this = this;
        if (formData.form.valid) {
            this.service.addtoCrawlerQueue(formData.form.value).subscribe(function (data) {
                _this.state.isProcessComplete = true;
                formData.form.reset();
            }, function (err) {
                alert("Unable to add to Queue");
            });
        }
    };
    CrawlerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crawler',
            template: __webpack_require__(/*! ./crawler.component.html */ "./src/app/application/crawler/crawler.component.html"),
            styles: [__webpack_require__(/*! ./crawler.component.css */ "./src/app/application/crawler/crawler.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__["ManagerServiceService"]])
    ], CrawlerComponent);
    return CrawlerComponent;
}());



/***/ }),

/***/ "./src/app/application/crawler/view-posts/view-posts.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/application/crawler/view-posts/view-posts.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL2NyYXdsZXIvdmlldy1wb3N0cy92aWV3LXBvc3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/application/crawler/view-posts/view-posts.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/application/crawler/view-posts/view-posts.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-bottom:50px;\">\n\n  <!-- Dashboard Box -->\n  <div class=\"col-xl-12\">\n    <div class=\"dashboard-box margin-top-0\">\n\n      <!-- Headline -->\n      <div class=\"headline\">\n        <h3><i class=\"icon-material-outline-business-center\"></i> View Posts</h3>\n      </div>\n\n\n      <div class=\"content\">\n        \n        <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/application/crawler/view-posts/view-posts.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/application/crawler/view-posts/view-posts.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPostsComponent", function() { return ViewPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/manager-service.service */ "./src/app/services/manager-service.service.ts");





var ViewPostsComponent = /** @class */ (function () {
    function ViewPostsComponent(http, service) {
        this.service = service;
        this.settings = {};
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["ServerDataSource"](http, { endPoint: this.service.getEndpoint('getAutoPosts') });
    }
    ViewPostsComponent.prototype.ngOnInit = function () {
        this.settings = {
            actions: {
                edit: false,
                add: false,
                delete: false,
                position: false,
            },
            pager: {
                display: true,
                perPage: 20
            },
            columns: {
                id: {
                    title: 'ID',
                    filter: false
                },
                postedTo: {
                    title: "Wordpress",
                    filter: true
                },
                crawler: {
                    title: 'Crawler',
                    filter: true
                },
                storage: {
                    title: 'Storage',
                    filter: true
                },
                originalUrl: {
                    title: 'Original URL',
                    filter: true
                }
            },
        };
    };
    ViewPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-posts',
            template: __webpack_require__(/*! ./view-posts.component.html */ "./src/app/application/crawler/view-posts/view-posts.component.html"),
            styles: [__webpack_require__(/*! ./view-posts.component.css */ "./src/app/application/crawler/view-posts/view-posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_4__["ManagerServiceService"]])
    ], ViewPostsComponent);
    return ViewPostsComponent;
}());



/***/ }),

/***/ "./src/app/application/crawler/view-queue/view-queue.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/application/crawler/view-queue/view-queue.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL2NyYXdsZXIvdmlldy1xdWV1ZS92aWV3LXF1ZXVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/application/crawler/view-queue/view-queue.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/application/crawler/view-queue/view-queue.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-bottom:50px;\">\n\n  <!-- Dashboard Box -->\n  <div class=\"col-xl-12\">\n    <div class=\"dashboard-box margin-top-0\">\n\n      <!-- Headline -->\n      <div class=\"headline\">\n        <h3><i class=\"icon-material-outline-business-center\"></i> View Crawler Schedule Files</h3>\n      </div>\n\n\n      <div class=\"content\">\n        \n        <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/application/crawler/view-queue/view-queue.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/application/crawler/view-queue/view-queue.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewQueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewQueueComponent", function() { return ViewQueueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/manager-service.service */ "./src/app/services/manager-service.service.ts");





var ViewQueueComponent = /** @class */ (function () {
    function ViewQueueComponent(http, service) {
        this.service = service;
        this.settings = {};
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["ServerDataSource"](http, { endPoint: this.service.getEndpoint('getCrawlerQueue') });
    }
    ViewQueueComponent.prototype.ngOnInit = function () {
        this.settings = {
            actions: {
                edit: false,
                add: false,
                delete: false,
                position: false,
            },
            pager: {
                display: true,
                perPage: 20
            },
            columns: {
                id: {
                    title: 'ID',
                    filter: false
                },
                url: {
                    title: "Post Url",
                    filter: false
                },
                crawler: {
                    title: 'Crawler',
                },
                isProcessed: {
                    title: 'Is Completed',
                    filter: false
                },
                status: {
                    title: 'Status',
                    filter: true
                },
                addedTime: {
                    title: "Added Time",
                    filter: false
                },
                completedTime: {
                    title: "Completion Time",
                    filter: false
                }
            },
        };
    };
    ViewQueueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-queue',
            template: __webpack_require__(/*! ./view-queue.component.html */ "./src/app/application/crawler/view-queue/view-queue.component.html"),
            styles: [__webpack_require__(/*! ./view-queue.component.css */ "./src/app/application/crawler/view-queue/view-queue.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_4__["ManagerServiceService"]])
    ], ViewQueueComponent);
    return ViewQueueComponent;
}());



/***/ }),

/***/ "./src/app/application/files/view-files/view-files.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/application/files/view-files/view-files.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* :host>>>table tr th {\r\n    text-align: center;\r\n}\r\n\r\n:host>>>table tr td {\r\n    text-align: center;\r\n}\r\n */\r\n\r\n:host /deep/ ng2-smart-table-pager  { \r\n    padding: 20px;\r\n    font-size: 22px;\r\n}\r\n\r\n:host /deep/ ng2-smart-table-pager > nav > ul > li {\r\n    margin : 10px;\r\n}\r\n\r\n:host /deep/ table-cell-view-mode {\r\n    text-align: center;\r\n}\r\n\r\n:host /deep/ ng2-smart-table > table > tbody > tr {\r\n    height: 60px;\r\n}\r\n\r\n.storage{\r\n    background: white;\r\n    padding: 14px;\r\n    border-radius: 4px;\r\n    position: relative;\r\n    top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vZmlsZXMvdmlldy1maWxlcy92aWV3LWZpbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7RUFPRTs7QUFFRjtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vZmlsZXMvdmlldy1maWxlcy92aWV3LWZpbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA6aG9zdD4+PnRhYmxlIHRyIHRoIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3Q+Pj50YWJsZSB0ciB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuICovXHJcblxyXG46aG9zdCAvZGVlcC8gbmcyLXNtYXJ0LXRhYmxlLXBhZ2VyICB7IFxyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufSBcclxuXHJcbjpob3N0IC9kZWVwLyBuZzItc21hcnQtdGFibGUtcGFnZXIgPiBuYXYgPiB1bCA+IGxpIHtcclxuICAgIG1hcmdpbiA6IDEwcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyB0YWJsZS1jZWxsLXZpZXctbW9kZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyBuZzItc21hcnQtdGFibGUgPiB0YWJsZSA+IHRib2R5ID4gdHIge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG5cclxuLnN0b3JhZ2V7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/application/files/view-files/view-files.component.html":
/*!************************************************************************!*\
  !*** ./src/app/application/files/view-files/view-files.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-bottom:50px;\">\n\n  <!-- Dashboard Box -->\n  <div class=\"col-xl-12\">\n    <div class=\"dashboard-box margin-top-0\">\n\n      <!-- Headline -->\n      <div class=\"headline\">\n        <h3><i class=\"icon-material-outline-business-center\"></i> Storage Files</h3>\n      </div>\n      \n      <div class=\"boxed-list-headline\">\n\n        <div class=\"row\">\n        <div class=\"col-xl-4\">\n          <div class=\"submit-field\">\n            <h5>Select Google Account</h5>\n            <select [(ngModel)]=\"selected\"  (change)=\"selectStorage($event.target.value)\" title=\"Select Stroage\">\n              <option *ngFor=\"let stroage of state.connectedStorage\" [ngValue]=\"stroage.bucketName\" selected>{{stroage.name}}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-xl-6\">\n          <div class=\"submit-field\">\n            <h5>Selectd Stroage Bucket</h5>\n            <span class=\"storage\">{{state.selectedBucket}}</span>\n          </div>\n        </div>\n\n      </div>\n      </div>\n\n   \n        \n   \n    \n\n      <div class=\"content\">\n\n        <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/application/files/view-files/view-files.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/application/files/view-files/view-files.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFilesComponent", function() { return ViewFilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/manager-service.service */ "./src/app/services/manager-service.service.ts");





var ViewFilesComponent = /** @class */ (function () {
    function ViewFilesComponent(http, service) {
        this.service = service;
        this.state = {
            connectedStorage: null,
            selectedBucket: "Select Storage"
        };
        this.settings = {};
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["ServerDataSource"](http, { endPoint: this.service.getEndpoint('getStorageFiles') });
    }
    ViewFilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getConnectedStorage().subscribe(function (data) {
            _this.state.connectedStorage = data;
            setTimeout(function () {
                $('select').selectpicker();
            }, 2000);
        }, function (error) {
            alert("Unable to load connected Storage Accounts.");
        });
        this.settings = {
            actions: {
                edit: false,
                add: false,
                delete: false,
                position: false,
            },
            pager: {
                display: true,
                perPage: 20
            },
            columns: {
                id: {
                    title: 'ID',
                    filter: false
                },
                bucketName: {
                    title: "Cloud Bucket"
                },
                filename: {
                    title: 'File Name',
                },
                contentType: {
                    title: 'Content Type',
                    filter: true
                },
                size: {
                    title: 'File Size',
                    filter: true
                },
            },
        };
    };
    ViewFilesComponent.prototype.selectStorage = function (data) {
        this.state.selectedBucket = data.split(" ")[1];
    };
    ViewFilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-files',
            template: __webpack_require__(/*! ./view-files.component.html */ "./src/app/application/files/view-files/view-files.component.html"),
            styles: [__webpack_require__(/*! ./view-files.component.css */ "./src/app/application/files/view-files/view-files.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_4__["ManagerServiceService"]])
    ], ViewFilesComponent);
    return ViewFilesComponent;
}());



/***/ }),

/***/ "./src/app/application/settings/proxy-settings/proxy-settings.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/application/settings/proxy-settings/proxy-settings.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3NldHRpbmdzL3Byb3h5LXNldHRpbmdzL3Byb3h5LXNldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/application/settings/proxy-settings/proxy-settings.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/application/settings/proxy-settings/proxy-settings.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" style=\"margin-bottom:50px;\">\n  <!-- Dashboard Box -->\n  <div class=\"col-xl-12\">\n\n    <div class=\"dashboard-box margin-top-0\">\n\n      <!-- Headline -->\n      <div class=\"headline\">\n        <h3><i class=\"icon-feather-folder-plus\"></i> Script Settings</h3>\n      </div>\n\n      <div class=\"content with-padding padding-bottom-10\">\n\n        <form (ngSubmit)=\"checkProxy(f)\" #f=\"ngForm\">\n\n          <div class=\"row\">\n\n            <div class=\"col-xl-6\">\n              <div class=\"submit-field\">\n                <h5>Proxy</h5>\n                <input name=\"proxyDetails\" ngModel type=\"text\" class=\"with-border\" placeholder=\"Proxy : Port\" required>\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Proxy Type</h5>\n                <select name=\"proxyType\" ngModel title=\"Select Type\">\n                  <option value=\"HTTP\" selected>HTTP</option>\n                  <option value=\"HTTPS\" selected>HTTPS</option>\n                  <option value=\"SOCKS\" selected>SOCKS</option>\n                </select>\n              </div>\n            </div>\n\n            <div *ngIf=\"state.isAvailable && !state.isHide\" class=\"notify-box margin-top-15\">\n              {{state.proxyResult.protocols | json}}\n            </div>\n\n            <div *ngIf=\"!state.isAvailable && !state.isHide\" class=\"notify-box margin-top-15\">\n               {{this.state.message}}\n            </div>\n\n            <div class=\"col-xl-3\">\n              <div class=\"submit-field\">\n                <div class=\"uploadButton margin-top-30\" style=\"display: inline-block;\">\n                  <input class=\"uploadButton-input\" type=\"submit\" id=\"upload\" multiple />\n                  <label class=\"uploadButton-button ripple-effect\" for=\"upload\">Check Proxy</label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n                <div class=\"submit-field\">\n                    <div class=\"uploadButton margin-top-30\">\n                        <input (click) = \"saveProxy()\" class=\"uploadButton-input\" type=\"button\" id=\"save\" multiple />\n                        <label class=\"uploadButton-button ripple-effect\" for=\"save\">Save Proxy</label>\n                      </div>\n                </div>\n              </div>\n\n          </div>\n        </form>\n\n\n\n      </div>\n    </div>\n\n\n\n  </div>\n  <!-- End Dashboard box -->\n</div>\n<!-- End row -->"

/***/ }),

/***/ "./src/app/application/settings/proxy-settings/proxy-settings.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/application/settings/proxy-settings/proxy-settings.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProxySettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxySettingsComponent", function() { return ProxySettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manager-service.service */ "./src/app/services/manager-service.service.ts");



var ProxySettingsComponent = /** @class */ (function () {
    function ProxySettingsComponent(service) {
        this.service = service;
        this.state = {
            proxyResult: {},
            isAvailable: false,
            isHide: true,
            isChecked: false,
            proxyData: null,
            message: "Checking .. "
        };
    }
    ProxySettingsComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            $('select').selectpicker();
        }, 1000);
    };
    ProxySettingsComponent.prototype.checkProxy = function (formData) {
        var _this = this;
        this.state.isAvailable = false;
        this.state.isHide = false;
        this.state.message = "Checking ...";
        if (formData.form.valid) {
            this.state.proxyData = formData.form.value;
            this.service.checkPorxy(formData.form.value).subscribe(function (data) {
                _this.state.proxyResult = data;
                _this.state.isAvailable = true;
                _this.state.isChecked = true;
            }, function (err) {
                alert("Unable to veirfy proxy !");
            });
        }
    };
    ProxySettingsComponent.prototype.saveProxy = function () {
        var _this = this;
        this.state.isAvailable = false;
        this.state.isHide = false;
        if (this.state.isChecked) {
            this.service.saveProxy(this.state.proxyData).subscribe(function (data) {
                _this.state.message = "Proxy details updated.";
            }, function (err) {
                _this.state.message = "Unable to save proxy !";
            });
        }
        else {
            this.state.message = "Kindly verify proxy first !";
        }
    };
    ProxySettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proxy-settings',
            template: __webpack_require__(/*! ./proxy-settings.component.html */ "./src/app/application/settings/proxy-settings/proxy-settings.component.html"),
            styles: [__webpack_require__(/*! ./proxy-settings.component.css */ "./src/app/application/settings/proxy-settings/proxy-settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__["ManagerServiceService"]])
    ], ProxySettingsComponent);
    return ProxySettingsComponent;
}());



/***/ }),

/***/ "./src/app/application/settings/settings.component.css":
/*!*************************************************************!*\
  !*** ./src/app/application/settings/settings.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/application/settings/settings.component.html":
/*!**************************************************************!*\
  !*** ./src/app/application/settings/settings.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-proxy-settings></app-proxy-settings>"

/***/ }),

/***/ "./src/app/application/settings/settings.component.ts":
/*!************************************************************!*\
  !*** ./src/app/application/settings/settings.component.ts ***!
  \************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/application/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/application/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/application/storage/add-storage/add-storage.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/application/storage/add-storage/add-storage.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3N0b3JhZ2UvYWRkLXN0b3JhZ2UvYWRkLXN0b3JhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/application/storage/add-storage/add-storage.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/application/storage/add-storage/add-storage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" style=\"margin-bottom:50px;\">\n  <!-- Dashboard Box -->\n  <div class=\"col-xl-12\">\n\n    <div class=\"dashboard-box margin-top-0\">\n\n      <!-- Headline -->\n      <div class=\"headline\">\n        <h3><i class=\"icon-feather-folder-plus\"></i> Add New Storage</h3>\n      </div>\n\n      <div *ngIf=\"isProcessComplete\" class=\"row\">\n        <div class=\"col-xl-12\">\n            <div  class=\"notification success closeable\">\n                <p>Storage Connected Successfully !</p>\n                <a (click)=\"isProcessComplete = false\" class=\"close\"></a>\n              </div>\n        </div>\n      </div>\n      <div class=\"content with-padding padding-bottom-10\">\n\n        <form (ngSubmit)=\"addStorage(f)\" #f=\"ngForm\">\n\n          <div class=\"row\">\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Name</h5>\n                <input name=\"storageName\" ngModel type=\"text\" class=\"with-border\" placeholder=\"Storage name\" required>\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Bucket Name</h5>\n                <input name=\"bucketName\" ngModel type=\"text\" class=\"with-border\" placeholder=\"Connected Bucket Name\" required>\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Select Storage Type</h5>\n                <select name=\"storageType\" ngModel title=\"Select Type\">\n                  <option value=\"Google\" selected>Google Buckets</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-xl-12\">\n              <div class=\"submit-field\">\n                <h5>Upload Service Account File</h5>\n                <div class=\"uploadButton margin-top-30\">\n                  <input class=\"uploadButton-input\" name=\"file\" type=\"file\" id=\"file\"\n                    (change)=\"handleFileInput($event.target.files)\">\n                  <label *ngIf=\"uploadedFileName.length == 0\" class=\"uploadButton-button ripple-effect\"\n                    for=\"file\">Upload Files</label>\n                  <div style=\"margin-top:10px\" *ngIf=\"uploadedFileName.length != 0\" class=\"verified-badge\"></div>\n                  <span class=\"uploadButton-file-name\">File must be in .json format.</span>\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"col-xl-12\">\n              <div class=\"submit-field\">\n                <div class=\"uploadButton margin-top-30\">\n                  <input class=\"uploadButton-input\" type=\"submit\" id=\"upload\" multiple />\n                  <label class=\"uploadButton-button ripple-effect\" for=\"upload\">Save Storage</label>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </form>\n\n\n\n      </div>\n    </div>\n\n\n\n  </div>\n  <!-- End Dashboard box -->\n</div>\n<!-- End row -->"

/***/ }),

/***/ "./src/app/application/storage/add-storage/add-storage.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/application/storage/add-storage/add-storage.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStorageComponent", function() { return AddStorageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manager-service.service */ "./src/app/services/manager-service.service.ts");



var AddStorageComponent = /** @class */ (function () {
    function AddStorageComponent(managerService) {
        this.managerService = managerService;
        this.fileToUpload = null;
        this.uploadedFileName = "";
        this.isUploadComplete = false;
        this.isProcessComplete = false;
    }
    AddStorageComponent.prototype.ngOnInit = function () {
    };
    AddStorageComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        this.uploadedFileName = this.fileToUpload.name;
        console.log(this.uploadedFileName);
        this.uploadFileToActivity();
    };
    AddStorageComponent.prototype.uploadFileToActivity = function () {
        var _this = this;
        this.managerService.postFile(this.fileToUpload).subscribe(function (data) {
            _this.isUploadComplete = true;
        }, function (error) {
            console.log(error);
        });
    };
    AddStorageComponent.prototype.addStorage = function (formObject) {
        var _this = this;
        if (formObject.form.valid == true && this.isUploadComplete == true) {
            formObject.form.value['uploadedFileName'] = this.uploadedFileName;
            this.managerService.saveStorage(formObject.form.value).subscribe(function (data) {
                _this.isProcessComplete = true;
                formObject.form.reset();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            alert("Kindly enter values for Fields.");
        }
    };
    AddStorageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-storage',
            template: __webpack_require__(/*! ./add-storage.component.html */ "./src/app/application/storage/add-storage/add-storage.component.html"),
            styles: [__webpack_require__(/*! ./add-storage.component.css */ "./src/app/application/storage/add-storage/add-storage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__["ManagerServiceService"]])
    ], AddStorageComponent);
    return AddStorageComponent;
}());



/***/ }),

/***/ "./src/app/application/storage/view-storage/view-storage.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/application/storage/view-storage/view-storage.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white {\r\n    color:white !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vc3RvcmFnZS92aWV3LXN0b3JhZ2Uvdmlldy1zdG9yYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9zdG9yYWdlL3ZpZXctc3RvcmFnZS92aWV3LXN0b3JhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aGl0ZSB7XHJcbiAgICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/application/storage/view-storage/view-storage.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/application/storage/view-storage/view-storage.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-bottom:50px;\">\n\n  <!-- Dashboard Box -->\n  <div class=\"col-xl-12\">\n    <div class=\"dashboard-box margin-top-0\">\n\n      <!-- Headline -->\n      <div class=\"headline\">\n        <h3><i class=\"icon-material-outline-business-center\"></i> Connected Storage Accounts</h3>\n      </div>\n\n      <div *ngIf=\"state.triggered\" class=\"row\">\n          <div class=\"col-xl-12\">\n              <div  class=\"notification success closeable\">\n                  <p>Refresh Triggerd ! It may take upto 2-3 minutes.</p>\n                  <a (click)=\"state.triggered = false\" class=\"close\"></a>\n                </div>\n          </div>\n        </div>\n\n      <div class=\"content\">\n        <ul class=\"dashboard-box-list\">\n          <li *ngFor=\"let storage of state.connectedStorages\">\n            <!-- Job Listing -->\n            <div class=\"job-listing\">\n\n              <!-- Job Listing Details -->\n              <div class=\"job-listing-details\">\n\n                <!-- Logo -->\n                <!-- \t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"job-listing-company-logo\">\n                    <img src=\"images/company-logo-05.png\" alt=\"\">\n                  </a> -->\n\n                <!-- Details -->\n                <div class=\"job-listing-description\">\n                  <h3 class=\"job-listing-title\"><i class=\"icon-feather-archive\n                    \"></i>    {{storage.name}}</h3>\n\n                  <!-- Job Listing Footer -->\n                  <div class=\"job-listing-footer\">\n                    <ul>\n                        <li><i class=\"icon-material-outline-folder-shared\"></i>  {{storage.type}}</li>\n                      <li><i class=\"icon-material-outline-archive\"></i> {{storage.bucketName}}</li>\n                      <li><i class=\"icon-material-outline-account-balance-wallet\"></i>  {{storage.fileName}}</li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Buttons -->\n            <div class=\"buttons-to-right always-visible\">\n              <a (click)=\"triggerRefresh(storage.id)\" class=\" white button ripple-effect\"><i\n                  class=\"icon-material-outline-history\"></i> Refresh Files</a>\n              <a style=\"margin-left:10px;\" href=\"#\" class=\"button gray ripple-effect ico\" data-tippy-placement=\"top\" data-tippy=\"\"\n                data-original-title=\"Remove\"><i class=\"icon-feather-trash-2\"></i></a>\n            </div>\n          </li>\n\n        </ul>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/application/storage/view-storage/view-storage.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/application/storage/view-storage/view-storage.component.ts ***!
  \****************************************************************************/
/*! exports provided: ViewStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewStorageComponent", function() { return ViewStorageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manager-service.service */ "./src/app/services/manager-service.service.ts");



var ViewStorageComponent = /** @class */ (function () {
    function ViewStorageComponent(service) {
        this.service = service;
        this.state = {
            connectedStorages: [],
            triggered: false
        };
    }
    ViewStorageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getConnectedStorage().subscribe(function (data) {
            _this.state.connectedStorages = data;
        });
    };
    ViewStorageComponent.prototype.triggerRefresh = function (id) {
        this.state.triggered = true;
        this.service.refreshStorageFiles(id).subscribe(function (data) {
            console.log(data);
        }, function (error) {
        });
    };
    ViewStorageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-storage',
            template: __webpack_require__(/*! ./view-storage.component.html */ "./src/app/application/storage/view-storage/view-storage.component.html"),
            styles: [__webpack_require__(/*! ./view-storage.component.css */ "./src/app/application/storage/view-storage/view-storage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__["ManagerServiceService"]])
    ], ViewStorageComponent);
    return ViewStorageComponent;
}());



/***/ }),

/***/ "./src/app/application/wordpress/add-wordpress/add-wordpress.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/application/wordpress/add-wordpress/add-wordpress.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3dvcmRwcmVzcy9hZGQtd29yZHByZXNzL2FkZC13b3JkcHJlc3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/application/wordpress/add-wordpress/add-wordpress.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/application/wordpress/add-wordpress/add-wordpress.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" style=\"margin-bottom:50px;\">\n  <!-- Dashboard Box -->\n  <div class=\"col-xl-12\">\n\n    <div class=\"dashboard-box margin-top-0\">\n\n      <!-- Headline -->\n      <div class=\"headline\">\n        <h3><i class=\"icon-feather-folder-plus\"></i> Add New Wordpress</h3>\n      </div>\n\n      <div *ngIf=\"state.isCompleted\" class=\"row\">\n        <div class=\"col-xl-12\">\n            <div  class=\"notification success closeable\">\n                <p>Wordpress added successfully !</p>\n                <a (click)=\"state.isCompleted = false\" class=\"close\"></a>\n              </div>\n        </div>\n      </div>\n\n      <div class=\"content with-padding padding-bottom-10\">\n        <form (ngSubmit)=\"addWordpress(f)\" #f=\"ngForm\" >\n\n          <div class=\"row\">\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Wordpress Name</h5>\n                <input ngModel name=\"wpName\" type=\"text\" class=\"with-border\" placeholder=\"Wordpress name\" required>\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>API Url</h5>\n                <input ngModel name=\"apiURL\" type=\"text\" class=\"with-border\" placeholder=\"API Url\" required>\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Authorization Key</h5>\n                <input ngModel name=\"authKey\" type=\"text\" class=\"with-border\" placeholder=\"Authorization Key\" required>\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Video Meta</h5>\n                <input ngModel name=\"videoMeta\" type=\"text\" class=\"with-border\" placeholder=\"Video Meta Name\" required>\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Tag List</h5>\n                <input ngModel name=\"tagList\" type=\"text\" class=\"with-border\" placeholder=\"Tag List\">\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Category List</h5>\n                <input ngModel name=\"catList\" type=\"text\" class=\"with-border\" placeholder=\"Category List\">\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\" style=\"vertical-align: middle;  line-height: 120px;\">\n              <div class=\"checkbox\">\n                <input ngModel name=\"languageIsRequired\" type=\"checkbox\" id=\"two-step\" checked=\"\">\n                <label for=\"two-step\"><span class=\"checkbox-icon\"></span> Language Conversion</label>\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Source Language</h5>\n                <select ngModel name=\"sourceLang\" class=\"selectpicker with-border\" data-size=\"7\"\n                  title=\"Select Language\">\n                  <option>en-US</option>\n                  <option>en-RU</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Source Language</h5>\n                <select ngModel name=\"destLang\" title=\"Select Language\">\n                  <option>en-US</option>\n                  <option>en-RU</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\" style=\"vertical-align: middle;  line-height: 120px;\">\n              <div class=\"checkbox\">\n                <input ngModel name=\"suffixReq\" type=\"checkbox\" id=\"suffix\" checked=\"\">\n                <label for=\"suffix\"><span class=\"checkbox-icon\"></span> Append Suffix</label>\n              </div>\n            </div>\n\n            <div class=\"col-xl-8\">\n              <div class=\"submit-field\">\n                <h5>Suffix List</h5>\n                <input ngModel name=\"suffixList\" type=\"text\" class=\"with-border\" placeholder=\"Suffix List\">\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Title File</h5>\n                <select [(ngModel)]=\"titleFile\" name=\"titleFile\" class=\"selectpicker with-border\" data-size=\"7\"\n                  title=\"Select Title File\">\n                  <option *ngFor=\"let title of state.title\" [ngValue]=\"title.fileName\">{{title.fileName | uppercase}}</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Description File</h5>\n                <select [(ngModel)]=\"descFile\" name=\"descFile\"  class=\"selectpicker with-border\" data-size=\"7\"\n                  title=\"Select Description File\">\n                  <option *ngFor=\"let desc of state.descriptions\"\n                     [ngValue]=\"desc.fileName\">{{desc.fileName | uppercase }}</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-xl-12\">\n              <div class=\"submit-field\">\n                <div class=\"uploadButton margin-top-30\">\n                  <input class=\"uploadButton-input\" type=\"submit\" id=\"upload\" multiple />\n                  <label class=\"uploadButton-button ripple-effect\" for=\"upload\">Save Wordpress</label>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n        </form>\n\n\n      </div>\n    </div>\n\n\n\n  </div>\n  <!-- End Dashboard box -->\n</div>\n<!-- End row -->"

/***/ }),

/***/ "./src/app/application/wordpress/add-wordpress/add-wordpress.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/application/wordpress/add-wordpress/add-wordpress.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddWordpressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWordpressComponent", function() { return AddWordpressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manager-service.service */ "./src/app/services/manager-service.service.ts");



var AddWordpressComponent = /** @class */ (function () {
    function AddWordpressComponent(service) {
        this.service = service;
        this.state = {
            title: null,
            descriptions: null,
            isCompleted: false,
        };
    }
    AddWordpressComponent.prototype.ngOnInit = function () {
        var _this = this;
        /// $('select').selectpicker();
        this.service.getUploadedFiles('title').subscribe(function (data) {
            _this.state.title = data;
        });
        this.service.getUploadedFiles('description').subscribe(function (data) {
            _this.state.descriptions = data;
            setTimeout(function () {
                $('select').selectpicker();
            }, 5000);
        });
    };
    AddWordpressComponent.prototype.addWordpress = function (formObject) {
        var _this = this;
        if (formObject.form.valid) {
            this.service.saveWordpress(formObject.form.value).subscribe(function (data) {
                _this.state.isCompleted = true;
                formObject.form.reset();
            }, function (error) {
                alert("Error while adding wordpress.");
            });
        }
        else {
            alert("Kindly select all required data.");
        }
        console.log(formObject.form.value);
    };
    AddWordpressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-wordpress',
            template: __webpack_require__(/*! ./add-wordpress.component.html */ "./src/app/application/wordpress/add-wordpress/add-wordpress.component.html"),
            styles: [__webpack_require__(/*! ./add-wordpress.component.css */ "./src/app/application/wordpress/add-wordpress/add-wordpress.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__["ManagerServiceService"]])
    ], AddWordpressComponent);
    return AddWordpressComponent;
}());



/***/ }),

/***/ "./src/app/application/wordpress/upload-files/upload-files.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/application/wordpress/upload-files/upload-files.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL3dvcmRwcmVzcy91cGxvYWQtZmlsZXMvdXBsb2FkLWZpbGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/application/wordpress/upload-files/upload-files.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/application/wordpress/upload-files/upload-files.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-bottom:50px;\">\n\n  <!-- Dashboard Box -->\n  <div class=\"col-xl-12\">\n    <div class=\"dashboard-box margin-top-0\">\n\n      <!-- Headline -->\n      <div class=\"headline\">\n        <h3><i class=\"icon-material-outline-business-center\"></i> Upload Files</h3>\n      </div>\n\n      <div *ngIf=\"state.isUploadComplete\" class=\"row\">\n          <div class=\"col-xl-12\">\n              <div  class=\"notification success closeable\">\n                  <p>File uploaded Successfully ! You can use file now.</p>\n                  <a (click)=\"state.isUploadComplete = false\" class=\"close\"></a>\n                </div>\n          </div>\n        </div>\n\n      <div class=\"content with-padding padding-bottom-10\">\n        <div class=\"row\">\n\n            <div class=\"col-xl-6\">\n                <div class=\"submit-field\">\n                    <h5>Select File Type</h5>\n                    <select [(ngModel)]=\"selected\" (change)=\"selectFileType($event.target.value)\" title=\"Select File Type\">\n                      <option value=\"\" selected>Select File Type</option>\n                      <option value=\"title\">Title File</option>\n                      <option value=\"description\">Description File</option>\n                    </select>\n                  </div>\n            </div>\n\n            <div class=\"col-xl-12\">\n                <div class=\"submit-field\">\n                  <h5>Upload Title / Deescription Files</h5>\n                  <div class=\"uploadButton margin-top-30\">\n                    <input class=\"uploadButton-input\" name=\"file\" type=\"file\" id=\"file\"\n                      (change)=\"handleFileInput($event.target.files)\">\n                    <label *ngIf=\"!state.isUploadComplete\" class=\"uploadButton-button ripple-effect\"\n                      for=\"file\">Upload Files</label>\n                    <div *ngIf=\"state.isUploadComplete\" style=\"margin-top:10px\" class=\"verified-badge\"></div>\n                    <span class=\"uploadButton-file-name\">File must be in .txt format.</span>\n                  </div>\n                </div>\n              </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/application/wordpress/upload-files/upload-files.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/application/wordpress/upload-files/upload-files.component.ts ***!
  \******************************************************************************/
/*! exports provided: UploadFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFilesComponent", function() { return UploadFilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manager-service.service */ "./src/app/services/manager-service.service.ts");



var UploadFilesComponent = /** @class */ (function () {
    function UploadFilesComponent(service) {
        this.service = service;
        this.state = {
            fileToUpload: null,
            isUploadComplete: false,
            type: '',
            fileName: ''
        };
    }
    UploadFilesComponent.prototype.ngOnInit = function () {
        $('select').selectpicker();
    };
    UploadFilesComponent.prototype.selectFileType = function (type) {
        this.state.type = type;
    };
    UploadFilesComponent.prototype.handleFileInput = function (files) {
        this.state.isUploadComplete = false;
        this.state.fileToUpload = files.item(0);
        this.state.fileName = this.state.fileToUpload.name;
        if (this.state.type.length < 2) {
            alert("Kindly select File Type first.");
        }
        else {
            this.uploadFileToActivity();
        }
    };
    UploadFilesComponent.prototype.uploadFileToActivity = function () {
        var _this = this;
        this.service.uploadFiles(this.state.fileToUpload, this.state.type, this.state.fileName)
            .subscribe(function (data) {
            _this.state.isUploadComplete = true;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    UploadFilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-files',
            template: __webpack_require__(/*! ./upload-files.component.html */ "./src/app/application/wordpress/upload-files/upload-files.component.html"),
            styles: [__webpack_require__(/*! ./upload-files.component.css */ "./src/app/application/wordpress/upload-files/upload-files.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__["ManagerServiceService"]])
    ], UploadFilesComponent);
    return UploadFilesComponent;
}());



/***/ }),

/***/ "./src/app/application/wordpress/view-wordpress/view-wordpress.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/application/wordpress/view-wordpress/view-wordpress.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white {\r\n    color: white !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vd29yZHByZXNzL3ZpZXctd29yZHByZXNzL3ZpZXctd29yZHByZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi93b3JkcHJlc3Mvdmlldy13b3JkcHJlc3Mvdmlldy13b3JkcHJlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aGl0ZSB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/application/wordpress/view-wordpress/view-wordpress.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/application/wordpress/view-wordpress/view-wordpress.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-bottom:50px;\">\n\n  <!-- Dashboard Box -->\n  <div class=\"col-xl-12\">\n    <div class=\"dashboard-box margin-top-0\">\n\n      <!-- Headline -->\n      <div class=\"headline\">\n        <h3><i class=\"icon-material-outline-business-center\"></i> Connected Wordpress Sites</h3>\n      </div>\n\n      <div *ngIf=\"state.deleteSuccess\" class=\"row\">\n        <div class=\"col-xl-12\">\n          <div class=\"notification success closeable\">\n            <p>Wordpress deleted successfully !</p>\n            <a (click)=\"state.deleteSuccess = false\" class=\"close\"></a>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"state.showUpdateeSuccess\" class=\"row\">\n          <div class=\"col-xl-12\">\n            <div class=\"notification success closeable\">\n              <p>Scheduler Limit Updatd !</p>\n              <a (click)=\"state.showUpdateeSuccess = false\" class=\"close\"></a>\n            </div>\n          </div>\n        </div>\n\n      <div class=\"content\">\n        <ul class=\"dashboard-box-list\">\n          <li *ngFor=\"let wp of state.connectedWp\">\n            <!-- Job Listing -->\n            <div class=\"job-listing\">\n\n              <!-- Job Listing Details -->\n              <div class=\"job-listing-details\">\n\n                <!-- Logo -->\n                <!-- \t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"job-listing-company-logo\">\n                    <img src=\"images/company-logo-05.png\" alt=\"\">\n                  </a> -->\n\n                <!-- Details -->\n                <div class=\"job-listing-description\">\n                  <h3 class=\"job-listing-title\"><i class=\"icon-feather-archive\n                    \"></i> {{wp.name}}</h3>\n\n                  <!-- Job Listing Footer -->\n                  <div class=\"job-listing-footer\">\n                    <ul>\n                      <li><i class=\"icon-material-outline-folder-shared\"></i> {{wp.api}}</li>\n                      <li><i class=\"icon-material-outline-archive\"></i> {{wp.meta}}</li>\n                      <li><i class=\"icon-material-outline-account-balance-wallet\"></i> {{wp.titleFile}}</li>\n                      <li><i class=\"icon-material-outline-account-balance-wallet\"></i> {{wp.descFile}}</li>\n                      <li>{{wp.maxPostLimit}} Posts Per Day</li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Buttons -->\n            <div class=\"buttons-to-right always-visible\">\n\n              <a *ngIf=\"!wp.isSetLimit\" (click)=\"wp.isSetLimit = true;\" class=\"white button ripple-effect\"><i class=\"icon-material-outline-history\"></i> Update Hourly\n                Limit</a>\n\n              <div *ngIf=\"wp.isSetLimit\" class=\"keyword-input-container\" style=\"display:inline-block; margin : 0px 10px;position:relative;top:-12px;\">\n                <input [(ngModel)]=\"wp.limit\" [value]=\"wp.limit\" style=\"margin:0px;\" type=\"text\" class=\"keyword-input\" placeholder=\"Limit Ex: 10\">\n                <button (click) = \"updateLimit(wp)\" class=\"keyword-input-button ripple-effect\"><i class=\"icon-material-outline-check\"></i></button>\n              </div>\n\n              <a (click)=\"deleteWordpress(wp.id)\" style=\"margin-left:10px;\" class=\"button gray ripple-effect ico\"\n                data-tippy-placement=\"top\" data-tippy=\"\" data-original-title=\"Remove\"><i\n                  class=\"icon-feather-trash-2\"></i></a>\n            </div>\n          </li>\n\n        </ul>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/application/wordpress/view-wordpress/view-wordpress.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/application/wordpress/view-wordpress/view-wordpress.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewWordpressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewWordpressComponent", function() { return ViewWordpressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manager-service.service */ "./src/app/services/manager-service.service.ts");



var ViewWordpressComponent = /** @class */ (function () {
    function ViewWordpressComponent(service) {
        this.service = service;
        this.state = {
            connectedWp: null,
            deleteSuccess: false,
            showUpdateeSuccess: false,
        };
    }
    ViewWordpressComponent.prototype.ngOnInit = function () {
        this.loadWordpress();
    };
    ViewWordpressComponent.prototype.loadWordpress = function () {
        var _this = this;
        this.service.getWordpress().subscribe(function (data) {
            _this.state.connectedWp = data;
        }, function (error) {
            alert("Backend API Issue. Unable to connect");
        });
    };
    ViewWordpressComponent.prototype.reloadWordpressAccounts = function () {
        var _this = this;
        this.service.getWordpress().subscribe(function (data) {
            data.forEach(function (elem) {
                elem.isSetLimit = false;
                elem.limit = 0;
            });
            _this.state.connectedWp = data;
        }, function (error) {
            alert("Backend API Issue. Unable to connect");
        });
    };
    ViewWordpressComponent.prototype.deleteWordpress = function (id) {
        var _this = this;
        this.service.deleteWordpress({ id: id }).subscribe(function (data) {
            _this.state.deleteSuccess = true;
            _this.reloadWordpressAccounts();
        }, function (error) {
            alert("Unable to delete selected Wordpress account !");
        });
    };
    ViewWordpressComponent.prototype.updateLimit = function (wp) {
        var _this = this;
        this.service.updateWordpress(wp).subscribe(function (data) {
            wp.isSetLimit = false;
            _this.state.showUpdateeSuccess = true;
            _this.loadWordpress();
        }, function (error) {
            alert("Error while updating limit");
        });
    };
    ViewWordpressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-wordpress',
            template: __webpack_require__(/*! ./view-wordpress.component.html */ "./src/app/application/wordpress/view-wordpress/view-wordpress.component.html"),
            styles: [__webpack_require__(/*! ./view-wordpress.component.css */ "./src/app/application/wordpress/view-wordpress/view-wordpress.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_manager_service_service__WEBPACK_IMPORTED_MODULE_2__["ManagerServiceService"]])
    ], ViewWordpressComponent);
    return ViewWordpressComponent;
}());



/***/ }),

/***/ "./src/app/services/manager-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/manager-service.service.ts ***!
  \*****************************************************/
/*! exports provided: ManagerServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerServiceService", function() { return ManagerServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ManagerServiceService = /** @class */ (function () {
    function ManagerServiceService(http) {
        this.http = http;
        this.server = "http://" + window.document.location.hostname + ":3001";
        this.endpoints = {
            uploadKey: '/uploadServiceKeys',
            saveStorage: '/addGoogleAccounts',
            getConnectedStorage: '/getGoogleAccounts',
            uploadFilesGeneric: '/uploadFilesGeneric',
            getUploadedFiles: '/getFiles',
            addWordpress: '/addNewWordpress',
            getWordpress: '/getConnectedWpAccounts',
            updateWordpress: '/updateWordpress',
            deleteWp: '/deleteWPAccount',
            getCrawlers: '/getCrawlers',
            addtoCrawlerQueue: '/addtoCrawlerQueue',
            refreshStorageFiles: '/refreshStorageFiles',
            getCrawlerQueue: '/getCrawlerQueue',
            getStorageFiles: '/getStorageFiles',
            getAutoPosts: '/getAutoPosts',
            checkProxy: '/checkProxy',
            saveProxy: "/saveProxy"
        };
    }
    ManagerServiceService.prototype.getEndpoint = function (key) {
        return this.server + this.endpoints[key];
    };
    ManagerServiceService.prototype.postFile = function (fileToUpload) {
        var formData = new FormData();
        formData.append("files", fileToUpload, fileToUpload.name);
        return this.http.post(this.getEndpoint('uploadKey'), formData, { headers: {} })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return true; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.statusText);
        }));
    };
    ManagerServiceService.prototype.uploadFiles = function (fileToUpload, type, fileName) {
        var formData = new FormData();
        formData.append("files", fileToUpload, fileToUpload.name);
        formData.append("type", type);
        formData.append("fileName", fileName);
        return this.http.post(this.getEndpoint('uploadFilesGeneric'), formData, { headers: {} });
    };
    ManagerServiceService.prototype.saveStorage = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        return this.http.post(this.getEndpoint('saveStorage'), data, options);
    };
    ManagerServiceService.prototype.getConnectedStorage = function () {
        return this.http.get(this.getEndpoint('getConnectedStorage'));
    };
    ManagerServiceService.prototype.getUploadedFiles = function (type) {
        return this.http.get(this.getEndpoint('getUploadedFiles') + "?type=" + type);
    };
    ManagerServiceService.prototype.saveWordpress = function (data) {
        return this.http.post(this.getEndpoint('addWordpress'), data, { headers: { 'content-type': 'application/json' } });
    };
    ManagerServiceService.prototype.deleteWordpress = function (data) {
        return this.http.post(this.getEndpoint('deleteWp'), data, { headers: { 'content-type': 'application/json' } });
    };
    ManagerServiceService.prototype.getWordpress = function () {
        return this.http.get(this.getEndpoint('getWordpress'));
    };
    ManagerServiceService.prototype.getCrawlers = function () {
        return this.http.get(this.getEndpoint('getCrawlers'));
    };
    ManagerServiceService.prototype.addtoCrawlerQueue = function (data) {
        return this.http.post(this.getEndpoint('addtoCrawlerQueue'), data, {
            headers: { 'content-type': 'application/json' }
        });
    };
    ManagerServiceService.prototype.refreshStorageFiles = function (storageId) {
        return this.http.get(this.getEndpoint('refreshStorageFiles') + '?id=' + storageId);
    };
    ManagerServiceService.prototype.updateWordpress = function (wp) {
        return this.http.post(this.getEndpoint('updateWordpress'), wp, {
            headers: { 'content-type': 'application/json' }
        });
    };
    ManagerServiceService.prototype.checkPorxy = function (proxy) {
        return this.http.post(this.getEndpoint('checkProxy'), proxy, {
            headers: { 'content-type': 'application/json' }
        });
    };
    ManagerServiceService.prototype.saveProxy = function (proxy) {
        return this.http.post(this.getEndpoint('saveProxy'), proxy, {
            headers: { 'content-type': 'application/json' }
        });
    };
    ManagerServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ManagerServiceService);
    return ManagerServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\QuizGate\Video-Manager-Backend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
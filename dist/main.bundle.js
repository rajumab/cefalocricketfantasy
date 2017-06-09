webpackJsonp([1,4],{

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonSettingService; });
/* unused harmony export PLAYER_NATIONALITY */
/* unused harmony export PLAYER_ROLE */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonSettingService = (function () {
    function CommonSettingService() {
    }
    CommonSettingService.prototype.getplayertype = function (player) {
        var retVal = 'foreign';
        switch (player.nationality) {
            case 'Indian':
                retVal = '';
                break;
        }
        if (player.uncapped) {
            retVal += ' uncapped';
        }
        return retVal;
    };
    CommonSettingService.prototype.getplayerrole = function (role) {
        var retVal = '';
        switch (role) {
            case PLAYER_ROLE.BATSMAN:
                retVal = 'batsman';
                break;
            case PLAYER_ROLE.KEEPER:
                retVal = 'keeper batsman';
                break;
            case PLAYER_ROLE.BOWLER:
                retVal = 'bowler';
                break;
            case PLAYER_ROLE.ALL_ROUNDER:
                retVal = 'allrounder';
                break;
        }
        return retVal;
    };
    CommonSettingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], CommonSettingService);
    return CommonSettingService;
}());
var PLAYER_NATIONALITY = (function () {
    function PLAYER_NATIONALITY() {
    }
    PLAYER_NATIONALITY.INDIAN = "Indian";
    return PLAYER_NATIONALITY;
}());
var PLAYER_ROLE = (function () {
    function PLAYER_ROLE() {
    }
    PLAYER_ROLE.BATSMAN = 'Batsman';
    PLAYER_ROLE.KEEPER = 'Keeper';
    PLAYER_ROLE.BOWLER = 'Bowler';
    PLAYER_ROLE.ALL_ROUNDER = 'All rounder';
    return PLAYER_ROLE;
}());
//# sourceMappingURL=Z:/Ajay/mydocs/Cefalo School/CefaloCricketFantasy/src/CommonSettingService.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestService = (function () {
    function RestService(http) {
        this.http = http;
    }
    RestService.prototype.create = function (entity) {
        var _this = this;
        return this.http.post("/api/" + entity + "/" + entity + "s", entity)
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    RestService.prototype.createcustom = function (uri, entity) {
        var _this = this;
        return this.http.post(uri, entity)
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    RestService.prototype.get = function (entity) {
        var _this = this;
        return this.http.get("/api/" + entity + "/" + entity + "s")
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    RestService.prototype.getcustom = function (uri) {
        var _this = this;
        return this.http.get(uri)
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    RestService.prototype.delete = function (entity, id) {
        var _this = this;
        return this.http.delete("/api/" + entity + "/" + id)
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    RestService.prototype.deletecustom = function (uri) {
        var _this = this;
        return this.http.delete(uri)
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    RestService.prototype.edit = function (entity, id) {
        var _this = this;
        return this.http.put("/api/" + entity + "/" + id, entity)
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    RestService.prototype.editcustom = function (entity, uri) {
        var _this = this;
        return this.http.put(uri, entity)
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    RestService.prototype.archive = function (entity, id) {
        var _this = this;
        return this.http.put("/api/" + entity + "/" + id, entity)
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    RestService.prototype.restore = function (entity, id) {
        var _this = this;
        return this.http.put("/api/" + entity + "/" + id, entity)
            .toPromise()
            .then(function (response) { return _this.extractArray(response); })
            .catch(this.handleErrorPromise);
    };
    RestService.prototype.extractArray = function (res, showprogress) {
        if (showprogress === void 0) { showprogress = true; }
        var data = res.json();
        return data || [];
    };
    RestService.prototype.handleErrorPromise = function (error) {
        try {
            error = JSON.parse(error._body);
        }
        catch (e) {
        }
        var errMsg = error.errorMessage
            ? error.errorMessage
            : error.message
                ? error.message
                : error._body
                    ? error._body
                    : error.status
                        ? error.status + " - " + error.statusText
                        : 'unknown server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    RestService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], RestService);
    return RestService;
    var _a;
}());
//# sourceMappingURL=Z:/Ajay/mydocs/Cefalo School/CefaloCricketFantasy/src/RestService.js.map

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 393;


/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(512);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=Z:/Ajay/mydocs/Cefalo School/CefaloCricketFantasy/src/main.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayerFilterPipe = (function () {
    function PlayerFilterPipe() {
    }
    PlayerFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    PlayerFilterPipe.prototype.applyFilter = function (Player, filter) {
        if (Player.fullName.toLowerCase().indexOf(filter['fullName'].toLowerCase()) === -1) {
            return false;
        }
        else if (filter['teamAbbreviation'].toLowerCase() != 'allteams') {
            if (Player.teamAbbreviation.toLowerCase().indexOf(filter['teamAbbreviation'].toLowerCase()) === -1) {
                return false;
            }
        }
        else if (filter.role.toString().toLowerCase() != 'allroles') {
            if (Player.role[0].toString().toLowerCase().indexOf(filter.role.toString().toLowerCase()) === -1) {
                return false;
            }
        }
        else if (filter['nationality'].toLowerCase() != 'alltypes') {
            if (filter['nationality'].toLowerCase() == 'indian') {
                if (Player.nationality.toLowerCase() != filter['nationality'].toLowerCase()) {
                    return false;
                }
            }
            else if (filter['nationality'].toLowerCase() == 'foreign') {
                if (Player.nationality.toLowerCase().indexOf('indian') === 0) {
                    return false;
                }
            }
            else if (filter['nationality'].toLowerCase() == 'uncapped') {
                if (Player.uncapped == false) {
                    return false;
                }
            }
        }
        return true;
    };
    PlayerFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'playerfilter',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], PlayerFilterPipe);
    return PlayerFilterPipe;
}());
//# sourceMappingURL=Z:/Ajay/mydocs/Cefalo School/CefaloCricketFantasy/src/player-filter-pipe.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(676),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=Z:/Ajay/mydocs/Cefalo School/CefaloCricketFantasy/src/app.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_RestService__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_CommonSettingService__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipe_player_filter_pipe__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__squad_squad_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_tooltip_overlay__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_tooltip_overlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_tooltip_overlay__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pipe_player_filter_pipe__["a" /* PlayerFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_9__squad_squad_component__["a" /* SquadComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_tooltip_overlay__["Ng2TooltipOverlayModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
                    { path: 'squad', component: __WEBPACK_IMPORTED_MODULE_9__squad_squad_component__["a" /* SquadComponent */] },
                    { path: '**', redirectTo: 'home' }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_RestService__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_6__services_CommonSettingService__["a" /* CommonSettingService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=Z:/Ajay/mydocs/Cefalo School/CefaloCricketFantasy/src/app.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_RestService__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_CommonSettingService__ = __webpack_require__(216);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(restService, router, commonSettingService) {
        this.restService = restService;
        this.router = router;
        this.commonSettingService = commonSettingService;
        this.totalBudget = 10000000;
        this.players = [];
        this.freeuncapped = 1;
        this.subsleft = 10;
        this.filter = { fullName: '', teamAbbreviation: 'allteams', nationality: 'alltypes', role: 'allroles' };
        this.VALIDATION_MANAGER = {
            SquadBalance: VALIDATION_CSS.UNBALANCE,
            ElevenPlayer: VALIDATION_CSS.UNBALANCE,
            FranchiseSpread: VALIDATION_CSS.BALANCE,
            OverseasLimit: VALIDATION_CSS.UNBALANCE,
            UncappedQuota: VALIDATION_CSS.UNBALANCE,
            SQUAD_BALANCE_BATSMAN: VALIDATION_CSS.UNBALANCE,
            SQUAD_BALANCE_Bolwer: VALIDATION_CSS.UNBALANCE,
            SQUAD_BALANCE_Keeper: VALIDATION_CSS.UNBALANCE,
            SQUAD_BALANCE_AllRounder: VALIDATION_CSS.UNBALANCE,
            SQUAD_ElevenPlayer: VALIDATION_CSS.UNBALANCE,
            SQUAD_FranchiseSpread: VALIDATION_CSS.UNBALANCE,
            SQUAD_OverseasLimit: VALIDATION_CSS.UNBALANCE,
            SQUAD_UncappedQuota: VALIDATION_CSS.UNBALANCE
        };
        this.validationRule = {
            SquadBalance: {
                Batsman: {
                    MIN: 4,
                    MAX: 5
                },
                Bolwer: {
                    MIN: 2,
                    MAX: 5
                },
                Keeper: {
                    MIN: 1
                },
                AllRounder: {
                    MIN: 1,
                    MAX: 4
                }
            },
            ElevenPlayer: {
                TOTAL: 11
            },
            FranchiseSpread: {
                MAX: 6
            },
            OverseasLimit: {
                MAX: 4
            },
            UncappedQuota: {
                MIN: 1
            }
        };
        this.selectedplayers = [];
        this.title = 'Cefalo Cricket Fantasy!';
        this.currentCombination = {
            bowler: 0,
            batsman: 0,
            allrounder: 0,
            keeper: 0,
            uncapped: 0,
            overseas: 0,
            totalplayer: 0,
            franchisespread: 0
        };
    }
    HomeComponent.prototype.decidebudgetstate = function () {
        var retVal = 'budget-header';
        if (this.totalBudget >= 0) {
            retVal += ' active';
        }
        if (this.totalBudget < 0) {
            retVal += ' inactive';
        }
        return retVal;
    };
    HomeComponent.prototype.getplayertype = function (player) {
        var retVal = 'foreign';
        switch (player.nationality) {
            case 'Indian':
                retVal = '';
                break;
        }
        if (player.uncapped) {
            retVal += ' uncapped';
        }
        return retVal;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.get();
        this.getsquad();
        this.validatedata();
    };
    HomeComponent.prototype.get = function () {
        var _this = this;
        this.restService.getcustom('/api/player/get').then(function (data) {
            _this.players = data;
        });
    };
    HomeComponent.prototype.getsquad = function () {
        var _this = this;
        /* HardCoded SquadId 1 */
        this.restService.getcustom('/api/squad/get?squadId=1').then(function (data) {
            if (data.length > 0) {
                _this.selectedplayers = data[0].players;
                _this.validatedata();
            }
        });
    };
    HomeComponent.prototype.isValidForm = function () {
        var isValid = false;
        if (this.VALIDATION_MANAGER.ElevenPlayer == VALIDATION_CSS.BALANCE &&
            this.VALIDATION_MANAGER.FranchiseSpread == VALIDATION_CSS.BALANCE &&
            this.VALIDATION_MANAGER.OverseasLimit == VALIDATION_CSS.BALANCE &&
            this.VALIDATION_MANAGER.SquadBalance == VALIDATION_CSS.BALANCE &&
            this.VALIDATION_MANAGER.UncappedQuota == VALIDATION_CSS.BALANCE) {
            isValid = true;
        }
        return isValid;
    };
    HomeComponent.prototype.validatedata = function () {
        if (this.selectedplayers.length == this.validationRule.ElevenPlayer.TOTAL) {
            this.VALIDATION_MANAGER.ElevenPlayer = VALIDATION_CSS.BALANCE;
        }
        else {
            this.VALIDATION_MANAGER.ElevenPlayer = VALIDATION_CSS.UNBALANCE;
        }
        var totalBowler = 0, totalBatsman = 0, totalKeeper = 0, totalAllRounder = 0, uncapped = 0, totaloverseas = 0;
        var usedBudget = 0, uncapped = 0;
        this.selectedplayers.forEach(function (element) {
            if (element.role[0] == PLAYER_ROLE.BOWLER) {
                totalBowler++;
            }
            if (element.role[0] == PLAYER_ROLE.BATSMAN) {
                totalBatsman++;
            }
            if (element.role[0] == PLAYER_ROLE.ALL_ROUNDER) {
                totalAllRounder++;
            }
            if (element.role[0] == PLAYER_ROLE.KEEPER) {
                totalKeeper++;
            }
            if (element.nationality != PLAYER_NATIONALITY.INDIAN) {
                totaloverseas++;
            }
            if (element.uncapped == true) {
                uncapped++;
            }
            if (element.uncapped == true && uncapped == 1) {
            }
            else {
                usedBudget += element.price;
            }
        });
        this.currentCombination.bowler = totalBowler;
        this.currentCombination.batsman = totalBatsman;
        this.currentCombination.allrounder = totalAllRounder;
        this.currentCombination.overseas = totaloverseas;
        this.totalBudget = 10000000 - usedBudget;
        this.currentCombination.uncapped = uncapped;
        this.currentCombination.keeper = totalKeeper;
        this.currentCombination.totalplayer = this.selectedplayers.length;
        if (uncapped >= this.validationRule.UncappedQuota.MIN) {
            this.VALIDATION_MANAGER.UncappedQuota = VALIDATION_CSS.BALANCE;
            this.freeuncapped = 0;
        }
        else {
            this.VALIDATION_MANAGER.UncappedQuota = VALIDATION_CSS.UNBALANCE;
            this.freeuncapped = 1;
        }
        var squadValidateCount = 0;
        if (this.currentCombination.bowler >= this.validationRule.SquadBalance.Bolwer.MIN
            && this.currentCombination.bowler <= this.validationRule.SquadBalance.Bolwer.MAX) {
            this.VALIDATION_MANAGER.SQUAD_BALANCE_Bolwer = VALIDATION_CSS.BALANCE;
            squadValidateCount++;
        }
        else {
            this.VALIDATION_MANAGER.SQUAD_BALANCE_Bolwer = VALIDATION_CSS.UNBALANCE;
        }
        if (this.currentCombination.batsman >= this.validationRule.SquadBalance.Batsman.MIN
            && this.currentCombination.batsman <= this.validationRule.SquadBalance.Batsman.MAX) {
            this.VALIDATION_MANAGER.SQUAD_BALANCE_BATSMAN = VALIDATION_CSS.BALANCE;
            squadValidateCount++;
        }
        else {
            this.VALIDATION_MANAGER.SQUAD_BALANCE_BATSMAN = VALIDATION_CSS.UNBALANCE;
        }
        if (this.currentCombination.allrounder >= this.validationRule.SquadBalance.AllRounder.MIN
            && this.currentCombination.allrounder <= this.validationRule.SquadBalance.AllRounder.MAX) {
            squadValidateCount++;
            this.VALIDATION_MANAGER.SQUAD_BALANCE_AllRounder = VALIDATION_CSS.BALANCE;
        }
        else {
            this.VALIDATION_MANAGER.SQUAD_BALANCE_AllRounder = VALIDATION_CSS.UNBALANCE;
        }
        if (this.currentCombination.keeper >= this.validationRule.SquadBalance.Keeper.MIN) {
            squadValidateCount++;
            this.VALIDATION_MANAGER.SQUAD_BALANCE_Keeper = VALIDATION_CSS.BALANCE;
        }
        else {
            this.VALIDATION_MANAGER.SQUAD_BALANCE_Keeper = VALIDATION_CSS.UNBALANCE;
        }
        if (squadValidateCount == VALID_SQUADSELECTION.SQUAD_COUNT) {
            this.VALIDATION_MANAGER.SquadBalance = VALIDATION_CSS.BALANCE;
        }
        else {
            this.VALIDATION_MANAGER.SquadBalance = VALIDATION_CSS.UNBALANCE;
        }
        if (this.currentCombination.overseas <= this.validationRule.OverseasLimit.MAX) {
            this.VALIDATION_MANAGER.OverseasLimit = VALIDATION_CSS.BALANCE;
            this.VALIDATION_MANAGER.SQUAD_OverseasLimit = VALIDATION_CSS.BALANCE;
        }
        else {
            this.VALIDATION_MANAGER.OverseasLimit = VALIDATION_CSS.UNBALANCE;
            this.VALIDATION_MANAGER.SQUAD_OverseasLimit = VALIDATION_CSS.UNBALANCE;
        }
        if (this.selectedplayers.length > 1) {
            this.subsleft = 10 - (this.selectedplayers.length - 1);
        }
        else {
            this.subsleft = 10;
        }
    };
    HomeComponent.prototype.intersect = function (arr1, arr2) {
        var intersect = [];
        arr1.forEach(function (a) {
            arr2.forEach(function (b) {
                if (this.compare(a, b))
                    intersect.push(a);
            });
        });
        return intersect;
    };
    ;
    HomeComponent.prototype.compare = function (a, b) {
        if (a.playerId === b.playerId)
            return true;
        else
            return false;
    };
    HomeComponent.prototype.preparesquad = function () {
        var _this = this;
        var squad = {
            squadId: 1,
            squadname: 'squadname',
            players: this.selectedplayers
        };
        this.restService.createcustom('/api/squad/create', squad).then(function (data) {
            console.log(data);
            _this.router.navigate(['/squad']);
        });
    };
    HomeComponent.prototype.selectplayer = function (player) {
        this.selectedplayers.push(player);
        this.removeplayerfromplayerlist(player);
        this.validatedata();
    };
    HomeComponent.prototype.removeSelectedPlayer = function (player) {
        this.players.push(player);
        this.removeplayerfromselectedplayer(player);
        this.validatedata();
    };
    HomeComponent.prototype.removeplayerfromselectedplayer = function (player) {
        this.selectedplayers = this.selectedplayers.filter(function (element) {
            return element.playerId !== player.playerId;
        });
    };
    HomeComponent.prototype.removeplayerfromplayerlist = function (player) {
        this.players = this.players.filter(function (element) {
            return element.playerId !== player.playerId;
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(677),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_RestService__["a" /* RestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_RestService__["a" /* RestService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_CommonSettingService__["a" /* CommonSettingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_CommonSettingService__["a" /* CommonSettingService */]) === 'function' && _c) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());
var VALIDATION_CSS = (function () {
    function VALIDATION_CSS() {
    }
    VALIDATION_CSS.BALANCE = 'balance';
    VALIDATION_CSS.UNBALANCE = 'unbalance';
    return VALIDATION_CSS;
}());
var PLAYER_ROLE = (function () {
    function PLAYER_ROLE() {
    }
    PLAYER_ROLE.BOWLER = 'bowler';
    PLAYER_ROLE.BATSMAN = 'batsman';
    PLAYER_ROLE.ALL_ROUNDER = 'allrounder';
    PLAYER_ROLE.KEEPER = 'keeper';
    return PLAYER_ROLE;
}());
var PLAYER_NATIONALITY = (function () {
    function PLAYER_NATIONALITY() {
    }
    PLAYER_NATIONALITY.INDIAN = 'Indian';
    return PLAYER_NATIONALITY;
}());
var VALID_SQUADSELECTION = (function () {
    function VALID_SQUADSELECTION() {
    }
    VALID_SQUADSELECTION.SQUAD_COUNT = 4;
    return VALID_SQUADSELECTION;
}());
//# sourceMappingURL=Z:/Ajay/mydocs/Cefalo School/CefaloCricketFantasy/src/home.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_RestService__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_CommonSettingService__ = __webpack_require__(216);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SquadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SquadComponent = (function () {
    function SquadComponent(restService, commonSettingService) {
        this.restService = restService;
        this.commonSettingService = commonSettingService;
        this.squads = [];
    }
    SquadComponent.prototype.getplayertype = function (player) {
        var retVal = 'foreign';
        switch (player.nationality) {
            case 'Indian':
                retVal = '';
                break;
        }
        if (player.uncapped) {
            retVal += ' uncapped';
        }
        return retVal;
    };
    SquadComponent.prototype.ngOnInit = function () {
        this.get();
    };
    SquadComponent.prototype.get = function () {
        var _this = this;
        /* HardCoded SquadId 1 */
        this.restService.getcustom('/api/squad/get?squadId=1').then(function (data) {
            if (data.length > 0) {
                _this.squads = data[0].players;
            }
        });
    };
    SquadComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-squad',
            template: __webpack_require__(678),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_RestService__["a" /* RestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_RestService__["a" /* RestService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_CommonSettingService__["a" /* CommonSettingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_CommonSettingService__["a" /* CommonSettingService */]) === 'function' && _b) || Object])
    ], SquadComponent);
    return SquadComponent;
    var _a, _b;
}());
//# sourceMappingURL=Z:/Ajay/mydocs/Cefalo School/CefaloCricketFantasy/src/squad.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=Z:/Ajay/mydocs/Cefalo School/CefaloCricketFantasy/src/environment.js.map

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ".info-tab {\r\n    background-color: #0d1730;\r\n}\r\n\r\n.info-tab ul {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.info-tab ul li label {\r\n    width: 13px;\r\n    height: 13px;\r\n    border-radius: 100%;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    background-color: #fff;\r\n}\r\n\r\n.info-tab ul li label.balance {\r\n    background-color: #53c539;\r\n}\r\n\r\n.info-tab ul li label.unbalance {\r\n    background-color: #ed3434;\r\n}\r\n\r\n.info-tab ul li {\r\n    display: inline-block;\r\n    width: 16.1%;\r\n    text-align: center;\r\n    border-left: 1px solid rgba(255, 255, 255, 0.2);\r\n    padding: 12px 0px;\r\n    text-transform: capitalize;\r\n    color:#fff;\r\n    \r\n}\r\n\r\n.info-tab ul li:first-child {\r\n    border: none;\r\n}\r\n\r\n.info-tab ul li span {\r\n    font-family: ALINSB;\r\n    font-size: 11px;\r\n    display: block;\r\n    color: #fff;\r\n    margin-top: 0px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 450px) and (min-width: 360px) {\r\n    .info-tab ul li span {\r\n        width: 70px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n\r\n.tooltip-contents{\r\n  background: red !important;\r\n}\r\n[ng2-tooltip] {\r\n  margin: 40px; \r\n  border: 1px solid #ccc;\r\n}\r\n\r\n[ng2-tooltip] .tooltip-contents {\r\n  border: 1px solid #ccc; padding: 5px;\r\n   background:red;\r\n}\r\n[ng2-tooltip] .tooltip-down-arrow {\r\n  height: 10px;\r\n}\r\n[ng2-tooltip] .tooltip-down-arrow:before {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  width: 10px;\r\n  height: 10px;\r\n  left: 45%;\r\n  bottom: 5px;\r\n  background: #FFFFFF;\r\n  border-left:1px solid #ccc;\r\n  border-bottom:1px solid #ccc;\r\n  -webkit-transform:rotate(-45deg);\r\n          transform:rotate(-45deg);\r\n}\r\n\r\n .fantacy-body {\r\n    background: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/bg2.jpg);\r\n    background-size: cover;\r\n    width: 100%;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    padding-bottom: 60px;\r\n}\r\n\r\n .dropdown-tab{\r\n\tbackground-color: #0d1730;\r\n  padding:5px;\r\n}\r\n.dropdown-tab .form-group{\r\n\tmargin-bottom: 0px;\r\n}\r\n.dropdown-tab .dropdown-btn {\r\n    width: 100%;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr{background-color: #f2f2f2}\r\n\r\nth {\r\n    background-color: #1c4fa2;\r\n    color: white;\r\n}\r\n\r\n.ui.dropdown {\r\n  cursor: pointer;\r\n  position: relative;\r\n  display: inline-block;\r\n  outline: none;\r\n  text-align: left;\r\n  transition: box-shadow 0.1s ease, width 0.1s ease;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  padding:10px !important;\r\n}\r\n.ui.dropdown .menu {\r\n  cursor: auto;\r\n  position: absolute;\r\n  display: none;\r\n  outline: none;\r\n  top: 100%;\r\n  min-width: -webkit-max-content;\r\n  min-width: -moz-max-content;\r\n  min-width: max-content;\r\n  margin: 0em;\r\n  padding: 0em 0em;\r\n  background: #FFFFFF;\r\n  font-size: 1em;\r\n  text-shadow: none;\r\n  text-align: left;\r\n  box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\r\n  border: 1px solid rgba(34, 36, 38, 0.15);\r\n  border-radius: 0.28571429rem;\r\n  transition: opacity 0.1s ease;\r\n  z-index: 11;\r\n  will-change: transform, opacity;\r\n}\r\n.ui.dropdown .menu > * {\r\n  white-space: nowrap;\r\n}\r\n\r\n/*--------------\r\n  Hidden Input\r\n---------------*/\r\n\r\n.ui.dropdown > input:not(.search):first-child,\r\n.ui.dropdown > select {\r\n  display: none !important;\r\n}\r\n\r\n/*--------------\r\n Dropdown Icon\r\n---------------*/\r\n\r\n.ui.dropdown > .dropdown.icon {\r\n  position: relative;\r\n  width: auto;\r\n  font-size: 0.85714286em;\r\n  margin: 0em 0em 0em 1em;\r\n}\r\n.ui.dropdown .menu > .item .dropdown.icon {\r\n  width: auto;\r\n  float: right;\r\n  margin: 0em 0em 0em 1em;\r\n}\r\n.ui.dropdown .menu > .item .dropdown.icon + .text {\r\n  margin-right: 1em;\r\n}\r\n\r\n/*--------------\r\n      Text\r\n---------------*/\r\n\r\n.ui.dropdown > .text {\r\n  display: inline-block;\r\n  transition: none;\r\n}\r\n\r\n/*--------------\r\n    Menu Item\r\n---------------*/\r\n\r\n.ui.dropdown .menu > .item {\r\n  position: relative;\r\n  cursor: pointer;\r\n  display: block;\r\n  border: none;\r\n  height: auto;\r\n  text-align: left;\r\n  border-top: none;\r\n  line-height: 1em;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  padding: 0.78571429rem 1.14285714rem !important;\r\n  font-size: 1rem;\r\n  text-transform: none;\r\n  font-weight: normal;\r\n  box-shadow: none;\r\n  -webkit-touch-callout: none;\r\n}\r\n.ui.dropdown .menu > .item:first-child {\r\n  border-top-width: 0px;\r\n}\r\n\r\n/*--------------\r\n  Floated Content\r\n---------------*/\r\n\r\n.ui.dropdown > .text > [class*=\"right floated\"],\r\n.ui.dropdown .menu .item > [class*=\"right floated\"] {\r\n  float: right !important;\r\n  margin-right: 0em !important;\r\n  margin-left: 1em !important;\r\n}\r\n.ui.dropdown > .text > [class*=\"left floated\"],\r\n.ui.dropdown .menu .item > [class*=\"left floated\"] {\r\n  float: left !important;\r\n  margin-left: 0em !important;\r\n  margin-right: 1em !important;\r\n}\r\n.ui.dropdown .menu .item > .icon.floated,\r\n.ui.dropdown .menu .item > .flag.floated,\r\n.ui.dropdown .menu .item > .image.floated,\r\n.ui.dropdown .menu .item > img.floated {\r\n  margin-top: 0em;\r\n}\r\n\r\n/*--------------\r\n  Menu Divider\r\n---------------*/\r\n\r\n.ui.dropdown .menu > .header {\r\n  margin: 1rem 0rem 0.75rem;\r\n  padding: 0em 1.14285714rem;\r\n  color: rgba(0, 0, 0, 0.85);\r\n  font-size: 0.78571429em;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n}\r\n.ui.dropdown .menu > .divider {\r\n  border-top: 1px solid rgba(34, 36, 38, 0.1);\r\n  height: 0em;\r\n  margin: 0.5em 0em;\r\n}\r\n.ui.dropdown .menu > .input {\r\n  width: auto;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin: 1.14285714rem 0.78571429rem;\r\n  min-width: 10rem;\r\n}\r\n.ui.dropdown .menu > .header + .input {\r\n  margin-top: 0em;\r\n}\r\n.ui.dropdown .menu > .input:not(.transparent) input {\r\n  padding: 0.5em 1em;\r\n}\r\n.ui.dropdown .menu > .input:not(.transparent) .button,\r\n.ui.dropdown .menu > .input:not(.transparent) .icon,\r\n.ui.dropdown .menu > .input:not(.transparent) .label {\r\n  padding-top: 0.5em;\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n/*-----------------\r\n  Item Description\r\n-------------------*/\r\n\r\n.ui.dropdown > .text > .description,\r\n.ui.dropdown .menu > .item > .description {\r\n  float: right;\r\n  margin: 0em 0em 0em 1em;\r\n  color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n/*-----------------\r\n       Message\r\n-------------------*/\r\n\r\n.ui.dropdown .menu > .message {\r\n  padding: 0.78571429rem 1.14285714rem;\r\n  font-weight: normal;\r\n}\r\n.ui.dropdown .menu > .message:not(.ui) {\r\n  color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n/*--------------\r\n    Sub Menu\r\n---------------*/\r\n\r\n.ui.dropdown .menu .menu {\r\n  top: 0% !important;\r\n  left: 100% !important;\r\n  right: auto !important;\r\n  margin: 0em 0em 0em -0.5em !important;\r\n  border-radius: 0.28571429rem !important;\r\n  z-index: 21 !important;\r\n}\r\n\r\n/* Hide Arrow */\r\n.ui.dropdown .menu .menu:after {\r\n  display: none;\r\n}\r\n\r\n/*--------------\r\n   Sub Elements\r\n---------------*/\r\n\r\n\r\n/* Icons / Flags / Labels / Image */\r\n.ui.dropdown > .text > .icon,\r\n.ui.dropdown > .text > .label,\r\n.ui.dropdown > .text > .flag,\r\n.ui.dropdown > .text > img,\r\n.ui.dropdown > .text > .image {\r\n  margin-top: 0em;\r\n}\r\n.ui.dropdown .menu > .item > .icon,\r\n.ui.dropdown .menu > .item > .label,\r\n.ui.dropdown .menu > .item > .flag,\r\n.ui.dropdown .menu > .item > .image,\r\n.ui.dropdown .menu > .item > img {\r\n  margin-top: 0em;\r\n}\r\n.ui.dropdown > .text > .icon,\r\n.ui.dropdown > .text > .label,\r\n.ui.dropdown > .text > .flag,\r\n.ui.dropdown > .text > img,\r\n.ui.dropdown > .text > .image,\r\n.ui.dropdown .menu > .item > .icon,\r\n.ui.dropdown .menu > .item > .label,\r\n.ui.dropdown .menu > .item > .flag,\r\n.ui.dropdown .menu > .item > .image,\r\n.ui.dropdown .menu > .item > img {\r\n  margin-left: 0em;\r\n  float: none;\r\n  margin-right: 0.78571429rem;\r\n}\r\n\r\n/*--------------\r\n     Image\r\n---------------*/\r\n\r\n.ui.dropdown > .text > img,\r\n.ui.dropdown > .text > .image,\r\n.ui.dropdown .menu > .item > .image,\r\n.ui.dropdown .menu > .item > img {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  width: auto;\r\n  max-height: 2em;\r\n}\r\n\r\n\r\n/*******************************\r\n            Coupling\r\n*******************************/\r\n\r\n\r\n/*--------------\r\n      Menu\r\n---------------*/\r\n\r\n\r\n/* Remove Menu Item Divider */\r\n.ui.dropdown .ui.menu > .item:before,\r\n.ui.menu .ui.dropdown .menu > .item:before {\r\n  display: none;\r\n}\r\n\r\n/* Prevent Menu Item Border */\r\n.ui.menu .ui.dropdown .menu .active.item {\r\n  border-left: none;\r\n}\r\n\r\n/* Automatically float dropdown menu right on last menu item */\r\n.ui.menu .right.menu .dropdown:last-child .menu,\r\n.ui.menu .right.dropdown.item .menu,\r\n.ui.buttons > .ui.dropdown:last-child .menu {\r\n  left: auto;\r\n  right: 0em;\r\n}\r\n\r\n/*--------------\r\n      Label\r\n---------------*/\r\n\r\n\r\n/* Dropdown Menu */\r\n.ui.label.dropdown .menu {\r\n  min-width: 100%;\r\n}\r\n\r\n/*--------------\r\n     Button\r\n---------------*/\r\n\r\n\r\n/* No Margin On Icon Button */\r\n.ui.dropdown.icon.button > .dropdown.icon {\r\n  margin: 0em;\r\n}\r\n.ui.button.dropdown .menu {\r\n  min-width: 100%;\r\n}\r\n\r\n\r\n/*******************************\r\n              Types\r\n*******************************/\r\n\r\n\r\n/*--------------\r\n    Selection\r\n---------------*/\r\n\r\n\r\n/* Displays like a select box */\r\n.ui.selection.dropdown {\r\n  cursor: pointer;\r\n  word-wrap: break-word;\r\n  line-height: 1em;\r\n  white-space: normal;\r\n  outline: 0;\r\n  -webkit-transform: rotateZ(0deg);\r\n          transform: rotateZ(0deg);\r\n  min-width: 14em;\r\n  min-height: 2.71428571em;\r\n  background: #FFFFFF;\r\n  display: inline-block;\r\n  padding: 0.78571429em 2.1em 0.78571429em 1em;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  box-shadow: none;\r\n  border: 1px solid rgba(34, 36, 38, 0.15);\r\n  border-radius: 0.28571429rem;\r\n  transition: box-shadow 0.1s ease, width 0.1s ease;\r\n}\r\n.ui.selection.dropdown.visible,\r\n.ui.selection.dropdown.active {\r\n  z-index: 10;\r\n}\r\nselect.ui.dropdown {\r\n  height: 38px;\r\n  padding: 0.5em;\r\n  border: 1px solid rgba(34, 36, 38, 0.15);\r\n  visibility: visible;\r\n}\r\n.ui.selection.dropdown > .search.icon,\r\n.ui.selection.dropdown > .delete.icon,\r\n.ui.selection.dropdown > .dropdown.icon {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  width: auto;\r\n  height: auto;\r\n  line-height: 1.21428571em;\r\n  top: 0.78571429em;\r\n  right: 1em;\r\n  z-index: 3;\r\n  margin: -0.78571429em;\r\n  padding: 0.78571429em;\r\n  opacity: 0.8;\r\n  transition: opacity 0.1s ease;\r\n}\r\n\r\n/* Compact */\r\n.ui.compact.selection.dropdown {\r\n  min-width: 0px;\r\n}\r\n\r\n/*  Selection Menu */\r\n.ui.selection.dropdown .menu {\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  -webkit-overflow-scrolling: touch;\r\n  border-top-width: 0px !important;\r\n  width: auto;\r\n  outline: none;\r\n  margin: 0px -1px;\r\n  min-width: calc(100% +  2px );\r\n  width: calc(100% +  2px );\r\n  border-radius: 0em 0em 0.28571429rem 0.28571429rem;\r\n  box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\r\n  transition: opacity 0.1s ease;\r\n}\r\n.ui.selection.dropdown .menu:after,\r\n.ui.selection.dropdown .menu:before {\r\n  display: none;\r\n}\r\n\r\n/*--------------\r\n    Message\r\n---------------*/\r\n\r\n.ui.selection.dropdown .menu > .message {\r\n  padding: 0.78571429rem 1.14285714rem;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n  .ui.selection.dropdown .menu {\r\n    max-height: 8.01428571rem;\r\n  }\r\n}\r\n@media only screen and (min-width: 768px) {\r\n  .ui.selection.dropdown .menu {\r\n    max-height: 10.68571429rem;\r\n  }\r\n}\r\n@media only screen and (min-width: 992px) {\r\n  .ui.selection.dropdown .menu {\r\n    max-height: 16.02857143rem;\r\n  }\r\n}\r\n@media only screen and (min-width: 1920px) {\r\n  .ui.selection.dropdown .menu {\r\n    max-height: 21.37142857rem;\r\n  }\r\n}\r\n\r\n/* Menu Item */\r\n.ui.selection.dropdown .menu > .item {\r\n  border-top: 1px solid #FAFAFA;\r\n  padding: 0.78571429rem 1.14285714rem !important;\r\n  white-space: normal;\r\n  word-wrap: normal;\r\n}\r\n\r\n/* User Item */\r\n.ui.selection.dropdown .menu > .hidden.addition.item {\r\n  display: none;\r\n}\r\n\r\n/* Hover */\r\n.ui.selection.dropdown:hover {\r\n  border-color: rgba(34, 36, 38, 0.35);\r\n  box-shadow: none;\r\n}\r\n\r\n/* Active */\r\n.ui.selection.active.dropdown {\r\n  border-color: #96C8DA;\r\n  box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\r\n}\r\n.ui.selection.active.dropdown .menu {\r\n  border-color: #96C8DA;\r\n  box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\r\n}\r\n\r\n/* Focus */\r\n.ui.selection.dropdown:focus {\r\n  border-color: #96C8DA;\r\n  box-shadow: none;\r\n}\r\n.ui.selection.dropdown:focus .menu {\r\n  border-color: #96C8DA;\r\n  box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\r\n}\r\n\r\n/* Visible */\r\n.ui.selection.visible.dropdown > .text:not(.default) {\r\n  font-weight: normal;\r\n  color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n/* Visible Hover */\r\n.ui.selection.active.dropdown:hover {\r\n  border-color: #96C8DA;\r\n  box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\r\n}\r\n.ui.selection.active.dropdown:hover .menu {\r\n  border-color: #96C8DA;\r\n  box-shadow: 0px 2px 3px 0px rgba(34, 36, 38, 0.15);\r\n}\r\n\r\n/* Dropdown Icon */\r\n.ui.active.selection.dropdown > .dropdown.icon,\r\n.ui.visible.selection.dropdown > .dropdown.icon {\r\n  opacity: 1;\r\n  z-index: 3;\r\n}\r\n\r\n/* Connecting Border */\r\n.ui.active.selection.dropdown {\r\n  border-bottom-left-radius: 0em !important;\r\n  border-bottom-right-radius: 0em !important;\r\n}\r\n\r\n/* Empty Connecting Border */\r\n.ui.active.empty.selection.dropdown {\r\n  border-radius: 0.28571429rem !important;\r\n  box-shadow: none !important;\r\n}\r\n.ui.active.empty.selection.dropdown .menu {\r\n  border: none !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\n/*--------------\r\n   Searchable\r\n---------------*/\r\n\r\n\r\n/* Search Selection */\r\n.ui.search.dropdown {\r\n  min-width: '';\r\n}\r\n\r\n/* Search Dropdown */\r\n.ui.search.dropdown > input.search {\r\n  background: none transparent !important;\r\n  border: none !important;\r\n  box-shadow: none !important;\r\n  cursor: text;\r\n  top: 0em;\r\n  left: 1px;\r\n  width: 100%;\r\n  outline: none;\r\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\r\n  padding: inherit;\r\n}\r\n\r\n/* Text Layering */\r\n.ui.search.dropdown > input.search {\r\n  position: absolute;\r\n  z-index: 2;\r\n}\r\n.ui.search.dropdown > .text {\r\n  cursor: text;\r\n  position: relative;\r\n  left: 1px;\r\n  z-index: 3;\r\n}\r\n\r\n/* Search Selection */\r\n.ui.search.selection.dropdown > input.search {\r\n  line-height: 1.21428571em;\r\n  padding: 0.67857143em 2.1em 0.67857143em 1em;\r\n}\r\n\r\n/* Used to size multi select input to character width */\r\n.ui.search.selection.dropdown > span.sizer {\r\n  line-height: 1.21428571em;\r\n  padding: 0.67857143em 2.1em 0.67857143em 1em;\r\n  display: none;\r\n  white-space: pre;\r\n}\r\n\r\n/* Active/Visible Search */\r\n.ui.search.dropdown.active > input.search,\r\n.ui.search.dropdown.visible > input.search {\r\n  cursor: auto;\r\n}\r\n.ui.search.dropdown.active > .text,\r\n.ui.search.dropdown.visible > .text {\r\n  pointer-events: none;\r\n}\r\n\r\n/* Filtered Text */\r\n.ui.active.search.dropdown input.search:focus + .text .icon,\r\n.ui.active.search.dropdown input.search:focus + .text .flag {\r\n  opacity: 0.45;\r\n}\r\n.ui.active.search.dropdown input.search:focus + .text {\r\n  color: rgba(115, 115, 115, 0.87) !important;\r\n}\r\n\r\n/* Search Menu */\r\n.ui.search.dropdown .menu {\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n  .ui.search.dropdown .menu {\r\n    max-height: 8.01428571rem;\r\n  }\r\n}\r\n@media only screen and (min-width: 768px) {\r\n  .ui.search.dropdown .menu {\r\n    max-height: 10.68571429rem;\r\n  }\r\n}\r\n@media only screen and (min-width: 992px) {\r\n  .ui.search.dropdown .menu {\r\n    max-height: 16.02857143rem;\r\n  }\r\n}\r\n@media only screen and (min-width: 1920px) {\r\n  .ui.search.dropdown .menu {\r\n    max-height: 21.37142857rem;\r\n  }\r\n}\r\n\r\n/*--------------\r\n    Multiple\r\n---------------*/\r\n\r\n\r\n/* Multiple Selection */\r\n.ui.multiple.dropdown {\r\n  padding: 0.22619048em 2.1em 0.22619048em 0.35714286em;\r\n}\r\n.ui.multiple.dropdown .menu {\r\n  cursor: auto;\r\n}\r\n\r\n/* Multiple Search Selection */\r\n.ui.multiple.search.dropdown,\r\n.ui.multiple.search.dropdown > input.search {\r\n  cursor: text;\r\n}\r\n\r\n/* Selection Label */\r\n.ui.multiple.dropdown > .label {\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  white-space: normal;\r\n  font-size: 1em;\r\n  padding: 0.35714286em 0.78571429em;\r\n  margin: 0.14285714rem 0.28571429rem 0.14285714rem 0em;\r\n  box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;\r\n}\r\n\r\n/* Dropdown Icon */\r\n.ui.multiple.dropdown .dropdown.icon {\r\n  margin: '';\r\n  padding: '';\r\n}\r\n\r\n/* Text */\r\n.ui.multiple.dropdown > .text {\r\n  position: static;\r\n  padding: 0;\r\n  max-width: 100%;\r\n  margin: 0.45238095em 0em 0.45238095em 0.64285714em;\r\n  line-height: 1.21428571em;\r\n}\r\n.ui.multiple.dropdown > .label ~ input.search {\r\n  margin-left: 0.14285714em !important;\r\n}\r\n.ui.multiple.dropdown > .label ~ .text {\r\n  display: none;\r\n}\r\n\r\n/*-----------------\r\n  Multiple Search\r\n-----------------*/\r\n\r\n\r\n/* Prompt Text */\r\n.ui.multiple.search.dropdown > .text {\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  padding: inherit;\r\n  margin: 0.45238095em 0em 0.45238095em 0.64285714em;\r\n  line-height: 1.21428571em;\r\n}\r\n.ui.multiple.search.dropdown > .label ~ .text {\r\n  display: none;\r\n}\r\n\r\n/* Search */\r\n.ui.multiple.search.dropdown > input.search {\r\n  position: static;\r\n  padding: 0;\r\n  max-width: 100%;\r\n  margin: 0.45238095em 0em 0.45238095em 0.64285714em;\r\n  width: 2.2em;\r\n  line-height: 1.21428571em;\r\n}\r\n\r\n/*--------------\r\n     Inline\r\n---------------*/\r\n\r\n.ui.inline.dropdown {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  color: inherit;\r\n}\r\n.ui.inline.dropdown .dropdown.icon {\r\n  margin: 0em 0.5em 0em 0.21428571em;\r\n  vertical-align: baseline;\r\n}\r\n.ui.inline.dropdown > .text {\r\n  font-weight: bold;\r\n}\r\n.ui.inline.dropdown .menu {\r\n  cursor: auto;\r\n  margin-top: 0.21428571em;\r\n  border-radius: 0.28571429rem;\r\n}\r\n\r\n\r\n/*******************************\r\n            States\r\n*******************************/\r\n\r\n\r\n/*--------------------\r\n        Active\r\n----------------------*/\r\n\r\n\r\n/* Menu Item Active */\r\n.ui.dropdown .menu .active.item {\r\n  background: transparent;\r\n  font-weight: bold;\r\n  color: rgba(0, 0, 0, 0.95);\r\n  box-shadow: none;\r\n  z-index: 12;\r\n}\r\n\r\n/*--------------------\r\n        Hover\r\n----------------------*/\r\n\r\n\r\n/* Menu Item Hover */\r\n.ui.dropdown .menu > .item:hover {\r\n  background: rgba(0, 0, 0, 0.05);\r\n  color: rgba(0, 0, 0, 0.95);\r\n  z-index: 13;\r\n}\r\n\r\n/*--------------------\r\n       Loading\r\n---------------------*/\r\n\r\n.ui.loading.dropdown > i.icon {\r\n  height: 1em !important;\r\n  padding: 1.14285714em 1.07142857em !important;\r\n}\r\n.ui.loading.dropdown > i.icon:before {\r\n  position: absolute;\r\n  content: '';\r\n  top: 50%;\r\n  left: 50%;\r\n  margin: -0.64285714em 0em 0em -0.64285714em;\r\n  width: 1.28571429em;\r\n  height: 1.28571429em;\r\n  border-radius: 500rem;\r\n  border: 0.2em solid rgba(0, 0, 0, 0.1);\r\n}\r\n.ui.loading.dropdown > i.icon:after {\r\n  position: absolute;\r\n  content: '';\r\n  top: 50%;\r\n  left: 50%;\r\n  box-shadow: 0px 0px 0px 1px transparent;\r\n  margin: -0.64285714em 0em 0em -0.64285714em;\r\n  width: 1.28571429em;\r\n  height: 1.28571429em;\r\n  -webkit-animation: dropdown-spin 0.6s linear;\r\n          animation: dropdown-spin 0.6s linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n  border-radius: 500rem;\r\n  border-color: #767676 transparent transparent;\r\n  border-style: solid;\r\n  border-width: 0.2em;\r\n}\r\n\r\n/* Coupling */\r\n.ui.loading.dropdown.button > i.icon:before,\r\n.ui.loading.dropdown.button > i.icon:after {\r\n  display: none;\r\n}\r\n@-webkit-keyframes dropdown-spin {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes dropdown-spin {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*--------------------\r\n     Default Text\r\n----------------------*/\r\n\r\n.ui.dropdown:not(.button) > .default.text,\r\n.ui.default.dropdown:not(.button) > .text {\r\n  color: rgba(191, 191, 191, 0.87);\r\n}\r\n.ui.dropdown:not(.button) > input:focus + .default.text,\r\n.ui.default.dropdown:not(.button) > input:focus + .text {\r\n  color: rgba(115, 115, 115, 0.87);\r\n}\r\n\r\n/*--------------------\r\n        Loading\r\n----------------------*/\r\n\r\n.ui.loading.dropdown > .text {\r\n  transition: none;\r\n}\r\n\r\n/* Used To Check Position */\r\n.ui.dropdown .loading.menu {\r\n  display: block;\r\n  visibility: hidden;\r\n  z-index: -1;\r\n}\r\n\r\n/*--------------------\r\n    Keyboard Select\r\n----------------------*/\r\n\r\n\r\n/* Selected Item */\r\n.ui.dropdown.selected,\r\n.ui.dropdown .menu .selected.item {\r\n  background: rgba(0, 0, 0, 0.03);\r\n  color: rgba(0, 0, 0, 0.95);\r\n}\r\n\r\n/*--------------------\r\n    Search Filtered\r\n----------------------*/\r\n\r\n\r\n/* Filtered Item */\r\n.ui.dropdown > .filtered.text {\r\n  visibility: hidden;\r\n}\r\n.ui.dropdown .filtered.item {\r\n  display: none !important;\r\n}\r\n\r\n/*--------------------\r\n        Error\r\n----------------------*/\r\n\r\n.ui.dropdown.error,\r\n.ui.dropdown.error > .text,\r\n.ui.dropdown.error > .default.text {\r\n  color: #9F3A38;\r\n}\r\n.ui.selection.dropdown.error {\r\n  background: #FFF6F6;\r\n  border-color: #E0B4B4;\r\n}\r\n.ui.selection.dropdown.error:hover {\r\n  border-color: #E0B4B4;\r\n}\r\n.ui.dropdown.error > .menu,\r\n.ui.dropdown.error > .menu .menu {\r\n  border-color: #E0B4B4;\r\n}\r\n.ui.dropdown.error > .menu > .item {\r\n  color: #9F3A38;\r\n}\r\n.ui.multiple.selection.error.dropdown > .label {\r\n  border-color: #E0B4B4;\r\n}\r\n\r\n/* Item Hover */\r\n.ui.dropdown.error > .menu > .item:hover {\r\n  background-color: #FFF2F2;\r\n}\r\n\r\n/* Item Active */\r\n.ui.dropdown.error > .menu .active.item {\r\n  background-color: #FDCFCF;\r\n}\r\n\r\n/*--------------------\r\n        Disabled\r\n----------------------*/\r\n\r\n\r\n/* Disabled */\r\n.ui.disabled.dropdown,\r\n.ui.dropdown .menu > .disabled.item {\r\n  cursor: default;\r\n  pointer-events: none;\r\n  opacity: 0.45;\r\n}\r\n\r\n\r\n/*******************************\r\n           Variations\r\n*******************************/\r\n\r\n\r\n/*--------------\r\n    Direction\r\n---------------*/\r\n\r\n\r\n/* Flyout Direction */\r\n.ui.dropdown .menu {\r\n  left: 0px;\r\n}\r\n\r\n/* Default Side (Right) */\r\n.ui.dropdown .right.menu > .menu,\r\n.ui.dropdown .menu .right.menu {\r\n  left: 100% !important;\r\n  right: auto !important;\r\n  border-radius: 0.28571429rem !important;\r\n}\r\n\r\n/* Left Flyout Menu */\r\n.ui.dropdown > .left.menu .menu,\r\n.ui.dropdown .menu .left.menu {\r\n  left: auto !important;\r\n  right: 100% !important;\r\n  border-radius: 0.28571429rem !important;\r\n}\r\n.ui.dropdown .item .left.dropdown.icon,\r\n.ui.dropdown .left.menu .item .dropdown.icon {\r\n  width: auto;\r\n  float: left;\r\n  margin: 0em 0.78571429rem 0em 0em;\r\n}\r\n.ui.dropdown .item .left.dropdown.icon,\r\n.ui.dropdown .left.menu .item .dropdown.icon {\r\n  width: auto;\r\n  float: left;\r\n  margin: 0em 0.78571429rem 0em 0em;\r\n}\r\n.ui.dropdown .item .left.dropdown.icon + .text,\r\n.ui.dropdown .left.menu .item .dropdown.icon + .text {\r\n  margin-left: 1em;\r\n}\r\n\r\n/*--------------\r\n     Upward\r\n---------------*/\r\n\r\n\r\n/* Upward Main Menu */\r\n.ui.upward.dropdown > .menu {\r\n  top: auto;\r\n  bottom: 100%;\r\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\r\n  border-radius: 0.28571429rem 0.28571429rem 0em 0em;\r\n}\r\n\r\n/* Upward Sub Menu */\r\n.ui.dropdown .upward.menu {\r\n  top: auto !important;\r\n  bottom: 0 !important;\r\n}\r\n\r\n/* Active Upward */\r\n.ui.simple.upward.active.dropdown,\r\n.ui.simple.upward.dropdown:hover {\r\n  border-radius: 0.28571429rem 0.28571429rem 0em 0em !important;\r\n}\r\n.ui.upward.dropdown.button:not(.pointing):not(.floating).active {\r\n  border-radius: 0.28571429rem 0.28571429rem 0em 0em;\r\n}\r\n\r\n/* Selection */\r\n.ui.upward.selection.dropdown .menu {\r\n  border-top-width: 1px !important;\r\n  border-bottom-width: 0px !important;\r\n  box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\r\n}\r\n.ui.upward.selection.dropdown:hover {\r\n  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n/* Active Upward */\r\n.ui.active.upward.selection.dropdown {\r\n  border-radius: 0em 0em 0.28571429rem 0.28571429rem !important;\r\n}\r\n\r\n/* Visible Upward */\r\n.ui.upward.selection.dropdown.visible {\r\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08);\r\n  border-radius: 0em 0em 0.28571429rem 0.28571429rem !important;\r\n}\r\n\r\n/* Visible Hover Upward */\r\n.ui.upward.active.selection.dropdown:hover {\r\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);\r\n}\r\n.ui.upward.active.selection.dropdown:hover .menu {\r\n  box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n/*--------------\r\n     Simple\r\n---------------*/\r\n\r\n\r\n/*  Selection Menu */\r\n.ui.scrolling.dropdown .menu,\r\n.ui.dropdown .scrolling.menu {\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n.ui.scrolling.dropdown .menu {\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  -webkit-overflow-scrolling: touch;\r\n  min-width: 100% !important;\r\n  width: auto !important;\r\n}\r\n.ui.dropdown .scrolling.menu {\r\n  position: static;\r\n  overflow-y: auto;\r\n  border: none;\r\n  box-shadow: none !important;\r\n  border-radius: 0 !important;\r\n  margin: 0 !important;\r\n  min-width: 100% !important;\r\n  width: auto !important;\r\n  border-top: 1px solid rgba(34, 36, 38, 0.15);\r\n}\r\n.ui.scrolling.dropdown .menu .item.item.item,\r\n.ui.dropdown .scrolling.menu > .item.item.item {\r\n  border-top: none;\r\n}\r\n.ui.scrolling.dropdown .menu .item:first-child,\r\n.ui.dropdown .scrolling.menu .item:first-child {\r\n  border-top: none;\r\n}\r\n.ui.dropdown > .animating.menu .scrolling.menu,\r\n.ui.dropdown > .visible.menu .scrolling.menu {\r\n  display: block;\r\n}\r\n\r\n/* Scrollbar in IE */\r\n@media all and (-ms-high-contrast: none) {\r\n  .ui.scrolling.dropdown .menu,\r\n  .ui.dropdown .scrolling.menu {\r\n    min-width: calc(100% -  17px );\r\n  }\r\n}\r\n@media only screen and (max-width: 767px) {\r\n  .ui.scrolling.dropdown .menu,\r\n  .ui.dropdown .scrolling.menu {\r\n    max-height: 10.28571429rem;\r\n  }\r\n}\r\n@media only screen and (min-width: 768px) {\r\n  .ui.scrolling.dropdown .menu,\r\n  .ui.dropdown .scrolling.menu {\r\n    max-height: 15.42857143rem;\r\n  }\r\n}\r\n@media only screen and (min-width: 992px) {\r\n  .ui.scrolling.dropdown .menu,\r\n  .ui.dropdown .scrolling.menu {\r\n    max-height: 20.57142857rem;\r\n  }\r\n}\r\n@media only screen and (min-width: 1920px) {\r\n  .ui.scrolling.dropdown .menu,\r\n  .ui.dropdown .scrolling.menu {\r\n    max-height: 20.57142857rem;\r\n  }\r\n}\r\n\r\n/*--------------\r\n     Simple\r\n---------------*/\r\n\r\n\r\n/* Displays without javascript */\r\n.ui.simple.dropdown .menu:before,\r\n.ui.simple.dropdown .menu:after {\r\n  display: none;\r\n}\r\n.ui.simple.dropdown .menu {\r\n  position: absolute;\r\n  display: block;\r\n  overflow: hidden;\r\n  top: -9999px !important;\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n  transition: opacity 0.1s ease;\r\n}\r\n.ui.simple.active.dropdown,\r\n.ui.simple.dropdown:hover {\r\n  border-bottom-left-radius: 0em !important;\r\n  border-bottom-right-radius: 0em !important;\r\n}\r\n.ui.simple.active.dropdown > .menu,\r\n.ui.simple.dropdown:hover > .menu {\r\n  overflow: visible;\r\n  width: auto;\r\n  height: auto;\r\n  top: 100% !important;\r\n  opacity: 1;\r\n}\r\n.ui.simple.dropdown > .menu > .item:active > .menu,\r\n.ui.simple.dropdown:hover > .menu > .item:hover > .menu {\r\n  overflow: visible;\r\n  width: auto;\r\n  height: auto;\r\n  top: 0% !important;\r\n  left: 100% !important;\r\n  opacity: 1;\r\n}\r\n.ui.simple.disabled.dropdown:hover .menu {\r\n  display: none;\r\n  height: 0px;\r\n  width: 0px;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Visible */\r\n.ui.simple.visible.dropdown > .menu {\r\n  display: block;\r\n}\r\n\r\n/*--------------\r\n      Fluid\r\n---------------*/\r\n\r\n.ui.fluid.dropdown {\r\n  display: block;\r\n  width: 100%;\r\n  min-width: 0em;\r\n}\r\n.ui.fluid.dropdown > .dropdown.icon {\r\n  float: right;\r\n}\r\n\r\n/*--------------\r\n    Floating\r\n---------------*/\r\n\r\n.ui.floating.dropdown .menu {\r\n  left: 0;\r\n  right: auto;\r\n  box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.15) !important;\r\n  border-radius: 0.28571429rem !important;\r\n}\r\n.ui.floating.dropdown > .menu {\r\n  margin-top: 0.5em !important;\r\n  border-radius: 0.28571429rem !important;\r\n}\r\n\r\n/*--------------\r\n     Pointing\r\n---------------*/\r\n\r\n.ui.pointing.dropdown > .menu {\r\n  top: 100%;\r\n  margin-top: 0.78571429rem;\r\n  border-radius: 0.28571429rem;\r\n}\r\n.ui.pointing.dropdown > .menu:after {\r\n  display: block;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  content: '';\r\n  visibility: visible;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n  width: 0.5em;\r\n  height: 0.5em;\r\n  box-shadow: -1px -1px 0px 1px rgba(34, 36, 38, 0.15);\r\n  background: #FFFFFF;\r\n  z-index: 2;\r\n}\r\n.ui.pointing.dropdown > .menu:after {\r\n  top: -0.25em;\r\n  left: 50%;\r\n  margin: 0em 0em 0em -0.25em;\r\n}\r\n\r\n/* Top Left Pointing */\r\n.ui.top.left.pointing.dropdown > .menu {\r\n  top: 100%;\r\n  bottom: auto;\r\n  left: 0%;\r\n  right: auto;\r\n  margin: 1em 0em 0em;\r\n}\r\n.ui.top.left.pointing.dropdown > .menu {\r\n  top: 100%;\r\n  bottom: auto;\r\n  left: 0%;\r\n  right: auto;\r\n  margin: 1em 0em 0em;\r\n}\r\n.ui.top.left.pointing.dropdown > .menu:after {\r\n  top: -0.25em;\r\n  left: 1em;\r\n  right: auto;\r\n  margin: 0em;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n}\r\n\r\n/* Top Right  Pointing */\r\n.ui.top.right.pointing.dropdown > .menu {\r\n  top: 100%;\r\n  bottom: auto;\r\n  right: 0%;\r\n  left: auto;\r\n  margin: 1em 0em 0em;\r\n}\r\n.ui.top.right.pointing.dropdown > .menu:after {\r\n  top: -0.25em;\r\n  left: auto;\r\n  right: 1em;\r\n  margin: 0em;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n}\r\n\r\n/* Left Pointing */\r\n.ui.left.pointing.dropdown > .menu {\r\n  top: 0%;\r\n  left: 100%;\r\n  right: auto;\r\n  margin: 0em 0em 0em 1em;\r\n}\r\n.ui.left.pointing.dropdown > .menu:after {\r\n  top: 1em;\r\n  left: -0.25em;\r\n  margin: 0em 0em 0em 0em;\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\r\n}\r\n\r\n/* Right Pointing */\r\n.ui.right.pointing.dropdown > .menu {\r\n  top: 0%;\r\n  left: auto;\r\n  right: 100%;\r\n  margin: 0em 1em 0em 0em;\r\n}\r\n.ui.right.pointing.dropdown > .menu:after {\r\n  top: 1em;\r\n  left: auto;\r\n  right: -0.25em;\r\n  margin: 0em 0em 0em 0em;\r\n  -webkit-transform: rotate(135deg);\r\n          transform: rotate(135deg);\r\n}\r\n\r\n/* Bottom Pointing */\r\n.ui.bottom.pointing.dropdown > .menu {\r\n  top: auto;\r\n  bottom: 100%;\r\n  left: 0%;\r\n  right: auto;\r\n  margin: 0em 0em 1em;\r\n}\r\n.ui.bottom.pointing.dropdown > .menu:after {\r\n  top: auto;\r\n  bottom: -0.25em;\r\n  right: auto;\r\n  margin: 0em;\r\n  -webkit-transform: rotate(-135deg);\r\n          transform: rotate(-135deg);\r\n}\r\n\r\n/* Reverse Sub-Menu Direction */\r\n.ui.bottom.pointing.dropdown > .menu .menu {\r\n  top: auto !important;\r\n  bottom: 0px !important;\r\n}\r\n\r\n/* Bottom Left */\r\n.ui.bottom.left.pointing.dropdown > .menu {\r\n  left: 0%;\r\n  right: auto;\r\n}\r\n.ui.bottom.left.pointing.dropdown > .menu:after {\r\n  left: 1em;\r\n  right: auto;\r\n}\r\n\r\n/* Bottom Right */\r\n.ui.bottom.right.pointing.dropdown > .menu {\r\n  right: 0%;\r\n  left: auto;\r\n}\r\n.ui.bottom.right.pointing.dropdown > .menu:after {\r\n  left: auto;\r\n  right: 1em;\r\n}\r\n\r\n/* Upward pointing */\r\n.ui.upward.pointing.dropdown > .menu,\r\n.ui.upward.top.pointing.dropdown > .menu {\r\n  top: auto;\r\n  bottom: 100%;\r\n  margin: 0em 0em 0.78571429rem;\r\n  border-radius: 0.28571429rem;\r\n}\r\n.ui.upward.pointing.dropdown > .menu:after,\r\n.ui.upward.top.pointing.dropdown > .menu:after {\r\n  top: 100%;\r\n  bottom: auto;\r\n  box-shadow: 1px 1px 0px 1px rgba(34, 36, 38, 0.15);\r\n  margin: -0.25em 0em 0em;\r\n}\r\n\r\n/* Right Pointing Upward */\r\n.ui.upward.right.pointing.dropdown:not(.top):not(.bottom) > .menu {\r\n  top: auto;\r\n  bottom: 0;\r\n  margin: 0em 1em 0em 0em;\r\n}\r\n.ui.upward.right.pointing.dropdown:not(.top):not(.bottom) > .menu:after {\r\n  top: auto;\r\n  bottom: 0;\r\n  margin: 0em 0em 1em 0em;\r\n  box-shadow: -1px -1px 0px 1px rgba(34, 36, 38, 0.15);\r\n}\r\n\r\n/* Left Pointing Upward */\r\n.ui.upward.left.pointing.dropdown:not(.top):not(.bottom) > .menu {\r\n  top: auto;\r\n  bottom: 0;\r\n  margin: 0em 0em 0em 1em;\r\n}\r\n.ui.upward.left.pointing.dropdown:not(.top):not(.bottom) > .menu:after {\r\n  top: auto;\r\n  bottom: 0;\r\n  margin: 0em 0em 1em 0em;\r\n  box-shadow: -1px -1px 0px 1px rgba(34, 36, 38, 0.15);\r\n}\r\n\r\n\r\n/*******************************\r\n         Theme Overrides\r\n*******************************/\r\n\r\n\r\n/* Dropdown Carets */\r\n@font-face {\r\n  font-family: 'Dropdown';\r\n  src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMggjB5AAAAC8AAAAYGNtYXAPfuIIAAABHAAAAExnYXNwAAAAEAAAAWgAAAAIZ2x5Zjo82LgAAAFwAAABVGhlYWQAQ88bAAACxAAAADZoaGVhAwcB6QAAAvwAAAAkaG10eAS4ABIAAAMgAAAAIGxvY2EBNgDeAAADQAAAABJtYXhwAAoAFgAAA1QAAAAgbmFtZVcZpu4AAAN0AAABRXBvc3QAAwAAAAAEvAAAACAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADw2gHg/+D/4AHgACAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADgAAAAKAAgAAgACAAEAIPDa//3//wAAAAAAIPDX//3//wAB/+MPLQADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAIABJQElABMAABM0NzY3BTYXFhUUDwEGJwYvASY1AAUGBwEACAUGBoAFCAcGgAUBEgcGBQEBAQcECQYHfwYBAQZ/BwYAAQAAAG4BJQESABMAADc0PwE2MzIfARYVFAcGIyEiJyY1AAWABgcIBYAGBgUI/wAHBgWABwaABQWABgcHBgUFBgcAAAABABIASQC3AW4AEwAANzQ/ATYXNhcWHQEUBwYnBi8BJjUSBoAFCAcFBgYFBwgFgAbbBwZ/BwEBBwQJ/wgEBwEBB38GBgAAAAABAAAASQClAW4AEwAANxE0NzYzMh8BFhUUDwEGIyInJjUABQYHCAWABgaABQgHBgVbAQAIBQYGgAUIBwWABgYFBwAAAAEAAAABAADZuaKOXw889QALAgAAAAAA0ABHWAAAAADQAEdYAAAAAAElAW4AAAAIAAIAAAAAAAAAAQAAAeD/4AAAAgAAAAAAASUAAQAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAABAAAAASUAAAElAAAAtwASALcAAAAAAAAACgAUAB4AQgBkAIgAqgAAAAEAAAAIABQAAQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAOAAAAAQAAAAAAAgAOAEcAAQAAAAAAAwAOACQAAQAAAAAABAAOAFUAAQAAAAAABQAWAA4AAQAAAAAABgAHADIAAQAAAAAACgA0AGMAAwABBAkAAQAOAAAAAwABBAkAAgAOAEcAAwABBAkAAwAOACQAAwABBAkABAAOAFUAAwABBAkABQAWAA4AAwABBAkABgAOADkAAwABBAkACgA0AGMAaQBjAG8AbQBvAG8AbgBWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AbgBSAGUAZwB1AGwAYQByAGkAYwBvAG0AbwBvAG4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=) format('truetype'), url(data:application/font-woff;charset=utf-8;base64,d09GRk9UVE8AAAVwAAoAAAAABSgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAAdkAAAHZLDXE/09TLzIAAALQAAAAYAAAAGAIIweQY21hcAAAAzAAAABMAAAATA9+4ghnYXNwAAADfAAAAAgAAAAIAAAAEGhlYWQAAAOEAAAANgAAADYAQ88baGhlYQAAA7wAAAAkAAAAJAMHAelobXR4AAAD4AAAACAAAAAgBLgAEm1heHAAAAQAAAAABgAAAAYACFAAbmFtZQAABAgAAAFFAAABRVcZpu5wb3N0AAAFUAAAACAAAAAgAAMAAAEABAQAAQEBCGljb21vb24AAQIAAQA6+BwC+BsD+BgEHgoAGVP/i4seCgAZU/+LiwwHi2v4lPh0BR0AAACIDx0AAACNER0AAAAJHQAAAdASAAkBAQgPERMWGyAlKmljb21vb25pY29tb29udTB1MXUyMHVGMEQ3dUYwRDh1RjBEOXVGMERBAAACAYkABgAIAgABAAQABwAKAA0AVgCfAOgBL/yUDvyUDvyUDvuUDvtvi/emFYuQjZCOjo+Pj42Qiwj3lIsFkIuQiY6Hj4iNhouGi4aJh4eHCPsU+xQFiIiGiYaLhouHjYeOCPsU9xQFiI+Jj4uQCA77b4v3FBWLkI2Pjo8I9xT3FAWPjo+NkIuQi5CJjogI9xT7FAWPh42Hi4aLhomHh4eIiIaJhosI+5SLBYaLh42HjoiPiY+LkAgO+92d928Vi5CNkI+OCPcU9xQFjo+QjZCLkIuPiY6Hj4iNhouGCIv7lAWLhomHh4iIh4eJhouGi4aNiI8I+xT3FAWHjomPi5AIDvvdi+YVi/eUBYuQjZCOjo+Pj42Qi5CLkImOhwj3FPsUBY+IjYaLhouGiYeHiAj7FPsUBYiHhomGi4aLh42Hj4iOiY+LkAgO+JQU+JQViwwKAAAAAAMCAAGQAAUAAAFMAWYAAABHAUwBZgAAAPUAGQCEAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8NoB4P/g/+AB4AAgAAAAAQAAAAAAAAAAAAAAIAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAA4AAAACgAIAAIAAgABACDw2v/9//8AAAAAACDw1//9//8AAf/jDy0AAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAABAAA5emozXw889QALAgAAAAAA0ABHWAAAAADQAEdYAAAAAAElAW4AAAAIAAIAAAAAAAAAAQAAAeD/4AAAAgAAAAAAASUAAQAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAABAAAAASUAAAElAAAAtwASALcAAAAAUAAACAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIADgBHAAEAAAAAAAMADgAkAAEAAAAAAAQADgBVAAEAAAAAAAUAFgAOAAEAAAAAAAYABwAyAAEAAAAAAAoANABjAAMAAQQJAAEADgAAAAMAAQQJAAIADgBHAAMAAQQJAAMADgAkAAMAAQQJAAQADgBVAAMAAQQJAAUAFgAOAAMAAQQJAAYADgA5AAMAAQQJAAoANABjAGkAYwBvAG0AbwBvAG4AVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG4AUgBlAGcAdQBsAGEAcgBpAGMAbwBtAG8AbwBuAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format('woff');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.ui.dropdown > .dropdown.icon {\r\n  font-family: 'Dropdown';\r\n  line-height: 1;\r\n  height: 1em;\r\n  width: 1.23em;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  text-align: center;\r\n}\r\n.ui.dropdown > .dropdown.icon {\r\n  width: auto;\r\n}\r\n.ui.dropdown > .dropdown.icon:before {\r\n  content: '\\f0d7';\r\n}\r\n\r\n/* Sub Menu */\r\n.ui.dropdown .menu .item .dropdown.icon:before {\r\n  content: '\\f0da' /*rtl:'\\f0d9'*/;\r\n}\r\n.ui.dropdown .item .left.dropdown.icon:before,\r\n.ui.dropdown .left.menu .item .dropdown.icon:before {\r\n  content: \"\\f0d9\" /*rtl:\"\\f0da\"*/;\r\n}\r\n\r\n/* Vertical Menu Dropdown */\r\n.ui.vertical.menu .dropdown.item > .dropdown.icon:before {\r\n  content: \"\\f0da\" /*rtl:\"\\f0d9\"*/;\r\n}\r\n/* Icons for Reference\r\n.dropdown.down.icon {\r\n  content: \"\\f0d7\";\r\n}\r\n.dropdown.up.icon {\r\n  content: \"\\f0d8\";\r\n}\r\n.dropdown.left.icon {\r\n  content: \"\\f0d9\";\r\n}\r\n.dropdown.icon.icon {\r\n  content: \"\\f0da\";\r\n}\r\n*/\r\n\r\n\r\n/*******************************\r\n        User Overrides\r\n*******************************/\r\n.btn[disabled] {\r\n    /* don't let button block mouse events from reaching wrapper */\r\n    pointer-events: none;\r\n}\r\n\r\nsave-btn.disabled {\r\n    cursor: not-allowed;\r\n}\r\n\r\n.powerplay-active {\r\n    background-color: #ed3434 !important;\r\n}\r\n\r\n.table-section .table tbody tr.powerplay-active td {\r\n    color: #fff;\r\n}\r\n\r\n\r\n/*sno alignment*/\r\n\r\n.PadAlign {\r\n    padding-left: 17px !important;\r\n}\r\n\r\n.sort-price {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/*table section*/\r\n\r\n.table-section {\r\n    background-color: #fff;\r\n    overflow: auto;\r\n    margin-top: 0px;\r\n    position: relative;\r\n}\r\n\r\n.fixed-table-inner {\r\n    height: 570px;\r\n    overflow: auto;\r\n}\r\n\r\n.table-section .table thead tr {\r\n    background-color: #1c4fa2;\r\n    color: #fff;\r\n    font-size: 13px;\r\n    font-family: ALINIB;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.table-section .table thead tr th {\r\n    border-bottom: none;\r\n}\r\n\r\n.table-section .table tbody tr td {\r\n    font-family: ALINSN;\r\n    font-size: 13px;\r\n    color: rgba(0, 0, 0, 0.8);\r\n    text-transform: capitalize;\r\n    height: 40px;\r\n    vertical-align: middle;\r\n    /*border-top: none;*/\r\n}\r\n\r\n.table-hover {\r\n    /*margin-top: -34px;*/\r\n}\r\n\r\n\r\n/*roll*/\r\n\r\n.allrounder-active,\r\n.allrounder,\r\n.batsman-active,\r\n.batsman,\r\n.bowler-active,\r\n.bowler,\r\n.foreign-active,\r\n.foreign,\r\n.keeper-active,\r\n.keeper,\r\n.uncapped-active,\r\n.uncapped {\r\n    max-width: 100%;\r\n    background-size: 30px;\r\n    background-image: url('https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/roles_icons_sprite.png');\r\n    display: inline-block;\r\n    width: 22px;\r\n    height: 24px;\r\n    position: relative;\r\n    vertical-align: top;\r\n    opacity: 0.9;\r\n    vertical-align: middle;\r\n}\r\n.keeper-active,\r\n.keeper {\r\n    width: 35px;\r\n}\r\n\r\n.powerplay-active .allrounder,\r\n.powerplayer .allrounder,\r\n.allrounder-active {\r\n    background-position: 0 0%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.allrounder {\r\n    background-position: 0 9.090909%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.powerplay-active .batsman,\r\n.powerplayer .batsman,\r\n.batsman-active {\r\n    background-position: 0 18.181818%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.batsman {\r\n    background-position: 0 27.272727%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.powerplay-active .bowler,\r\n.powerplayer .bowler,\r\n.bowler-active {\r\n    background-position: 0 36.363636%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.bowler {\r\n    background-position: 0 45.454545%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.powerplay-active .foreign,\r\n.powerplayer .foreign,\r\n.foreign-active {\r\n    background-position: 0 54.545455%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.foreign {\r\n    background-position: 0 63.636364%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.powerplay-active .keeper,\r\n.powerplayer .keeper,\r\n.keeper-active {\r\n    background-position: 0 72.727273%;\r\n    background-size: 35px;\r\n}\r\n\r\n.keeper {\r\n    background-position: 0 81.818182%;\r\n    background-size: 35px;\r\n}\r\n\r\n.powerplay-active .uncapped,\r\n.powerplayer .uncapped,\r\n.uncapped-active {\r\n    background-position: 0 90.909091%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.uncapped {\r\n    background-position: 0 100%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n\r\n/*action*/\r\n\r\n.close-active,\r\n.close-icon,\r\n.plus-active,\r\n.plus {\r\n    max-width: 100%;\r\n    background-size: 100%;\r\n    background-image: url('https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/action.png');\r\n    display: inline-block;\r\n    width: 16px;\r\n    height: 19px;\r\n    position: relative;\r\n    vertical-align: top;\r\n    margin-left: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.close-active {\r\n    background-position: 0 0%;\r\n    background-size: 100%;\r\n}\r\n\r\n.close-icon {\r\n    /*background-position: 0 33%;\r\n    background-size: 100%;*/\r\n    background-position: 0 0%;\r\n    background-size: 100%;\r\n}\r\n\r\n.plus-active {\r\n    background-position: 0 65.666667%;\r\n    background-size: 100%;\r\n}\r\n\r\n.plus {\r\n    /*background-position: 0 99%;\r\n    background-size: 100%;*/\r\n    background-position: 0 65.666667%;\r\n    background-size: 100%;\r\n}\r\n\r\n\r\n/*add and delete action*/\r\n\r\n.action-close:hover .close-icon {\r\n    background-position: 0 0%;\r\n    background-size: 100%;\r\n}\r\n\r\n.powerplay-active .action-close .close-icon {\r\n    background-position: 0 0%;\r\n}\r\n\r\n.action-add:hover .plus {\r\n    background-position: 0 65.666667%;\r\n    background-size: 100%;\r\n}\r\n\r\n\r\n/*team*/\r\n\r\n.flag {\r\n    max-width: 100%;\r\n    background-size: 100%;\r\n    background-image: url('https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/team.png');\r\n    display: inline-block;\r\n    width: 29px;\r\n    height: 16px;\r\n    position: relative;\r\n    vertical-align: top;\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n.flag.dd { background-position: 0 0%; background-size: 100%; }\r\n.flag.gl { background-position: 0 12.456747%; background-size: 100%; }\r\n.flag.kkr { background-position: 0 24.913495%; background-size: 100%; }\r\n.flag.kxip { background-position: 0 37.370242%; background-size: 100%; }\r\n.flag.mi { background-position: 0 49.82699%; background-size: 100%; }\r\n.flag.tbd { background-position: 0 62.5%; background-size: 100%; }\r\n.flag.rcb { background-position: 0 75.086505%; background-size: 100%; }\r\n.flag.rps { background-position: 0 87.543253%; background-size: 100%; }\r\n.flag.srh { background-position: 0 100%; background-size: 100%; }\r\n\r\n/*table fixed css*/\r\n\r\n.duplicate-table {\r\n    background-color: #1c4fa2;\r\n    color: #fff;\r\n    font-size: 13px;\r\n    font-family: ALINIB;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    z-index: 999;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.dropdown-share img {\r\n    cursor: pointer;\r\n}\r\n\r\n.duplicate-table>thead>tr>th {\r\n    border-bottom: none;\r\n}\r\n@media screen and (max-width: 520px) {\r\n    .allrounder-active,\r\n    .allrounder,\r\n    .batsman-active,\r\n    .batsman,\r\n    .bowler-active,\r\n    .bowler,\r\n    .foreign-active,\r\n    .foreign,\r\n    .keeper-active,\r\n    .keeper,\r\n    .uncapped-active,\r\n    .uncapped {\r\n        width: 22px;\r\n        height: 22px;\r\n        background-size: 31px;\r\n    }\r\n    .table>thead:first-child>tr:first-child>th {\r\n        font-size: 11px;\r\n    }\r\n    .table-section .table tbody tr td {\r\n        font-size: 11px;\r\n    }\r\n    .keeper-active,\r\n    .keeper {\r\n        width: 30px;\r\n    }\r\n    .powerplay-active .keeper, .powerplayer .keeper, .keeper-active{\r\n        background-size: 31px;\r\n    }\r\n    .table-section .table thead tr th ,\r\n    .table-section .table tbody tr td {\r\n        padding: 10px 5px;\r\n    }\r\n}\r\n\r\n.header-background {\r\n    background-color: #1c4fa2;\r\n    height: 35px;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 999;\r\n}\r\n\r\n.th-inner {\r\n    position: absolute;\r\n    top: 3px;\r\n    line-height: 30px;\r\n    text-align: left;\r\n    z-index: 9999;\r\n}\r\n\r\n.league-label{\r\n    vertical-align: middle !important;\r\n}\r\n.league-popup {\r\n    width: 300px;\r\n    padding: 15px;\r\n    background: #fff;\r\n    position: relative;\r\n    box-shadow: 0px 2px 4px 1px #ddd;\r\n}\r\n\r\n.league-popup:before {\r\n    content: '';\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n    border-bottom: 15px solid #fff;\r\n    position: absolute;\r\n    top: -14px;\r\n    right: 15px;\r\n    display: none;\r\n}\r\n\r\n.league-popup .user-details .user-team-name {\r\n    font-size: 18px;\r\n    width: 150px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.league-popup .user-details .user-name,\r\n.league-popup .user-details .user-team-status {\r\n    width: 150px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.league-popup .user-details label {\r\n    color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.league-popup .user-team-points {\r\n    color: #1c4fa2 !important;\r\n    font-size: 16px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.leaguepop-code {\r\n    color: rgba(0, 0, 0, 0.8);\r\n    font-size: 16px;\r\n    margin: 10px 0;\r\n}\r\n\r\n.leaguepop-footer {\r\n    margin: 16px 0 8px;\r\n}\r\n\r\n.leaguepop-footer .SocialMediaShareButton {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-left: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.copy-url {\r\n    cursor: pointer\r\n}\r\n\r\n.copied-notify {\r\n    position: absolute;\r\n    bottom: 23px;\r\n    background: #d7d7d7;\r\n    padding: 2px 10px;\r\n    font-size: 13px;\r\n    text-transform: uppercase;\r\n    color: rgba(0, 0, 0, 0.78);\r\n    line-height: 1.5;\r\n    z-index: 999;\r\n}\r\n\r\n\r\n/*Legend Popup*/\r\n\r\n.legend-popup {\r\n    background: #f7f7f7;\r\n    padding: 10px 25px;\r\n    font-size: 14px;\r\n    color: rgba(0, 0, 0, 0.7);\r\n    font-family: ALINSN;\r\n    position: relative;\r\n    display: inline-block;\r\n    box-shadow: 0px 0px 2px 1px #eaeaea;\r\n    max-width: 200px;\r\n    text-align: center;\r\n}\r\n\r\n.legend-popup span {\r\n    color: #000;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.legend-popup:before {\r\n    content: '';\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n    border-top: 15px solid #f7f7f7;\r\n    position: absolute;\r\n    bottom: -14px;\r\n    left: 50%;\r\n    margin-left: -15px;\r\n}\r\n@media screen and (max-width: 767px){\r\n    .league-logo{\r\n        width: 27%;\r\n    }\r\n    .league-label .user-team-name{\r\n        font-size: 18px !important;\r\n    }\r\n    .team-img{\r\n        display: none !important;\r\n    }\r\n}\r\n@media screen and (max-width: 640px) {\r\n    .league-popup .user-details {\r\n        margin-top: 0;\r\n    }\r\n\r\n    .league-popup {\r\n        width: 100%;\r\n        padding: 10px;\r\n    }\r\n    .league-popup .user-details .user-team-name {\r\n        font-size: 18px;\r\n        width: 120px;\r\n    }\r\n    .league-popup .user-details .user-name {\r\n        width: 120px;\r\n    }\r\n    .league-popup .user-details .user-team-status {\r\n        width: 130px;\r\n    }\r\n    .league-popup .btn-theme {\r\n        font-size: 12px;\r\n        padding: 5px 20px;\r\n    }\r\n    .leaguepop-code {\r\n        font-size: 16px;\r\n    }\r\n    .dropdown-tab .dropdown-btn {\r\n        padding: 0px 5px;\r\n        font-size: 11px;\r\n    }\r\n}\r\n.playersadded-list label{\r\n   font-family: ALINSN;\r\n   font-size: 13px;\r\n   background-color: #1c4fa2;\r\n   height: 24px;\r\n   border-radius: 100%;\r\n   width: 24px;\r\n   text-align: center;\r\n   color: #fff;\r\n   padding: 3px 0px;\r\n   margin-right: 5px;\r\n}\r\n.playersadded-list{\r\n   position: relative;\r\n   top: 10px;\r\n}\r\n\r\n\r\n/*team logo*/\r\n.team-img{\r\n    display: inline-block;\r\n}\r\n.team{\r\n    width: 130px;\r\n    height: 130px;\r\n    display: inline-block;\r\n    background-size: 100% !important;\r\n    background-repeat: no-repeat !important;\r\n    position: relative;\r\n    top: 20px;\r\n}\r\n.team.dd{\r\n    background: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/dd.png);\r\n}\r\n.team.gl{\r\n    background: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/gl.png);\r\n}\r\n.team.kkr{\r\n    background: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/kkr.png);\r\n}\r\n.team.kxip{\r\n    background: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/kxip.png);\r\n}\r\n.team.mi{\r\n    background: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/mi.png);\r\n}\r\n.team.rcb{\r\n    background: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/rcb.png);\r\n}\r\n.team.rps{\r\n    background: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/rps.png);\r\n}\r\n.team.srh{\r\n    background: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/srh.png);\r\n}\r\n/*css fixes 11*/\r\n.pos-sa .user-img .emblem.team{\r\n    position: static !important;\r\n}\r\n\r\n.balance-tab {\r\n    background-color: #0d1730;\r\n}\r\n\r\n.balance-tab ul {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.balance-tab ul li label {\r\n    width: 13px;\r\n    height: 13px;\r\n    border-radius: 100%;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    background-color: #fff;\r\n}\r\n\r\n.balance-tab ul li label.balance {\r\n    background-color: #53c539;\r\n}\r\n\r\n.balance-tab ul li label.unbalance {\r\n    background-color: #ed3434;\r\n}\r\n\r\n.balance-tab ul li {\r\n    display: inline-block;\r\n    width: 19%;\r\n    text-align: center;\r\n    border-left: 1px solid rgba(255, 255, 255, 0.2);\r\n    padding: 12px 0px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.balance-tab ul li:first-child {\r\n    border: none;\r\n}\r\n\r\n.balance-tab ul li span {\r\n    font-family: ALINSB;\r\n    font-size: 11px;\r\n    display: block;\r\n    color: #fff;\r\n    margin-top: 0px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 450px) and (min-width: 360px) {\r\n    .balance-tab ul li span {\r\n        width: 70px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n\r\n.budget-header{\r\n\tbackground-color: #fff;\r\n}\r\n.budget-header.active {\r\n    background-color: #24a706;\r\n    color: #fff;\r\n}\r\n.budget-header.inactive {\r\n    background-color: #ed3434;\r\n    color: #fff;\r\n}\r\n.budget-header ul{\r\n\tmargin-bottom: 0px;\r\n    text-align: center;\r\n}\r\n.budget-header ul li{\r\n    margin-bottom: 0px;\r\n    display: inline-block;\r\n    padding: 12px 15px;\r\n    margin-right: 0px;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n}\r\n.budget-header ul li label,\r\n.budget-header ul li span{\r\n\tfont-family: ALINSB;\r\n\tfont-size: 12px;\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n@media screen and (max-width:1100px) {\r\n    .budget-header ul li {\r\n        margin-right: 0px;\r\n    }\r\n\r\n        .budget-header ul li label, .budget-header ul li span {\r\n            font-size: 11px;\r\n        }\r\n}\r\n\r\n.team-left .budget-header,\r\n.team-left .search-form {\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.team-left .search-form .form-control {\r\n    height: 44px;\r\n}\r\n\r\n.team-left .search-form .glyphicon-search {\r\n    right: 20px;\r\n    top: 15px;\r\n}\r\n\r\n.dropdown-tab {\r\n    text-align: center;\r\n    padding: 12px 0px;\r\n}\r\n\r\n.dropdown-tab .form-group {\r\n    display: inline-block;\r\n    width: 32%;\r\n    padding: 0px 5px;\r\n}\r\n\r\n\r\n/*tab;e footer*/\r\n\r\n.table-footer {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    width: 99.9%;\r\n    background-color: #fff;\r\n    padding: 10px 0px;\r\n    background-image: -ms-linear-gradient( 90deg, rgb(215, 215, 215) 0%, rgb(255, 255, 255) 100%);\r\n}\r\n\r\n.table-footer .btn-white,\r\n.table-footer .btn-theme {\r\n    height: 40px;\r\n    font-size: 11px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.table-footer .btn-theme {\r\n    height: 38px;\r\n}\r\n\r\n@media screen and (max-width: 991px) {\r\n\r\n    .table-footer .btn-white.bck-btn {\r\n        float: right;\r\n        margin-right: 10px;\r\n        width: 93%;\r\n    }\r\n  \r\n    .table-footer {\r\n        position: fixed;\r\n        z-index: 99999;\r\n    }\r\n}\r\n\r\n.team-header {\r\n    background-image: url(\"https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/header-bg.png\");\r\n    background-size: cover;\r\n    padding: 15px 0px;\r\n    height: 107px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ".team-header {\r\n    background-image: url(\"https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/header-bg.png\");\r\n    background-size: cover;\r\n    padding: 15px 0px;\r\n    height: 107px;\r\n    margin-bottom: 15px;\r\n}\r\n.squad-wrapper {\r\n\tbackground: #fff;\r\n\tpadding: 10px 0;\r\n\tmargin-bottom: 15px;\r\n}\r\n.current-squad {\r\n\tpadding: 50px 0px;\r\n\tpadding-top: 20px;\r\n\ttext-align: center;\r\n}\r\n.player-card{\r\n\twidth: 167px;\r\n    height: 185px;\r\n\tborder: 1px solid #ddd;\r\n\tbox-shadow: 0px 0px 2px 1px #ddd;\r\n\tdisplay: inline-block;\r\n\t/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+0,f4f4f4+57,f7f7f7+100 */\r\n\tbackground: #ffffff; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n\tbackground: linear-gradient(135deg, #ffffff 0%,#ffffff 0%,#f4f4f4 57%,#f7f7f7 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f7f7f7',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */\r\n\toverflow: hidden;\r\n\ttext-align: left;\r\n\tmargin: 10px;\r\n}\r\n.player-img {\r\n\tdisplay: inline-block;\r\n\twidth: 90px !important;\r\n\theight: 100px !important;\r\n\tbackground: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/cardbg.png);\r\n\tbackground-repeat: no-repeat;\r\n\tmargin: 5px 0px 0px 5px;\r\n\tposition: relative;\r\n}\r\n.player-img img{\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n    left: 0;\r\n}\r\n.player-card ul{\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n\twidth: 67px;\r\n\ttext-align: center;\r\n\tmargin-left: -3px;\r\n}\r\n.player-card li{\r\n\twidth: 100%;\r\n\tpadding: 6px 0;\r\n\theight: 40px;\r\n}\r\n.player-card ul li:nth-child(2){\r\n\tborder: solid #ddd;\r\n\tborder-width: 1px 0 1px 0;\r\n}\r\n.player-card li span{\r\n\tdisplay: inline-block;\r\n}\r\n.player-img.dd,\r\n.player-img.DD{\r\n\tbackground-position: 0px -160px;\r\n}\r\n.player-img.gl,\r\n.player-img.GL{\r\n\tbackground-position: 0px -320px;\r\n}\r\n.player-img.kkr,\r\n.player-img.KKR{\r\n\tbackground-position: 0px -640px;\r\n}\r\n.player-img.kxip,\r\n.player-img.KXIP{\r\n\tbackground-position: 0px -960px;\r\n\t    background-size: auto;\r\n}\r\n.player-img.mi,\r\n.player-img.MI{\r\n\tbackground-position: 0px -800px;\r\n}\r\n.player-img.rcb,\r\n.player-img.RCB{\r\n\tbackground-position: 0px 0px;\r\n}\r\n.player-img.rps,\r\n.player-img.RPS{\r\n\tbackground-position: 0px -1120px;\r\n}\r\n.player-img.srh,\r\n.player-img.SRH{\r\n\tbackground-position: 0px -480px;\r\n}\r\n.player-card .player-name{\r\n\tbackground: #e4e4e4;\r\n\tpadding: 5px;\r\n\ttext-align: center;\r\n}\r\n.player-card .player-value{\r\n\ttext-align: center;\r\n\tpadding: 6px;\r\n}\r\n\r\n.player-card.powerplayer .player-name{\r\n\tbackground: #b80909;\r\n\tcolor: #fff;\r\n}\r\n\r\n/*Table header background*/\r\n.points-history{\r\n\tbackground: #fff;\r\n}\r\n.points-history .table thead tr {\r\n\tbackground-color: #000000;\r\n}\r\n.points-history .fixed-table-inner{\r\n\theight: 434px;\r\n}\r\n\r\n@media screen and (max-width: 1024px){\r\n\t.current-squad{\r\n\t\tpadding: 10px;\r\n\t}\r\n\t.player-card{\r\n\t\twidth: 133px;\r\n\t\theight: 150px;\r\n\t\tmargin: 5px;\r\n\t}\r\n\t.player-img {\r\n\t\twidth: 60px !important;\r\n\t\theight: 60px !important;\r\n\t\tmargin: 15px 0px 5px 10px;\r\n\t}\r\n\t.player-card ul {\r\n\t\twidth: 60px;\r\n\t}\r\n\t.player-card li {\r\n\t\twidth: 100%;\r\n\t\tpadding: 4px 0;\r\n\t\theight: 30px;\r\n\t\tfont-size: 11px;\r\n\t}\r\n}\r\n@media screen and (max-width: 991px){\r\n\t.points-history .table-section{\r\n\t\tpadding-bottom: 0px;\r\n\t\theight: auto !important;\r\n\t}\r\n\t.badges {\r\n\t\theight: auto !important;\r\n\t}\r\n\t.badge-wrapper{\r\n\t\tmargin-top: 15px;\r\n\t}\r\n\tbody.fantacy-body {\r\n\t\tpadding-bottom: 0px;\r\n\t}\r\n}\r\n\r\n\r\n\r\n/*Extra*/\r\n.btn[disabled] {\r\n    /* don't let button block mouse events from reaching wrapper */\r\n    pointer-events: none;\r\n}\r\n\r\nsave-btn.disabled {\r\n    cursor: not-allowed;\r\n}\r\n\r\n.powerplay-active {\r\n    background-color: #ed3434 !important;\r\n}\r\n\r\n.table-section .table tbody tr.powerplay-active td {\r\n    color: #fff;\r\n}\r\n\r\n\r\n/*sno alignment*/\r\n\r\n.PadAlign {\r\n    padding-left: 17px !important;\r\n}\r\n\r\n.sort-price {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/*table section*/\r\n\r\n.table-section {\r\n    background-color: #fff;\r\n    overflow: auto;\r\n    margin-top: 0px;\r\n    position: relative;\r\n}\r\n\r\n.fixed-table-inner {\r\n    height: 570px;\r\n    overflow: auto;\r\n}\r\n\r\n.table-section .table thead tr {\r\n    background-color: #1c4fa2;\r\n    color: #fff;\r\n    font-size: 13px;\r\n    font-family: ALINIB;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.table-section .table thead tr th {\r\n    border-bottom: none;\r\n}\r\n\r\n.table-section .table tbody tr td {\r\n    font-family: ALINSN;\r\n    font-size: 13px;\r\n    color: rgba(0, 0, 0, 0.8);\r\n    text-transform: capitalize;\r\n    height: 40px;\r\n    vertical-align: middle;\r\n    /*border-top: none;*/\r\n}\r\n\r\n.table-hover {\r\n    /*margin-top: -34px;*/\r\n}\r\n\r\n\r\n/*roll*/\r\n\r\n.allrounder-active,\r\n.allrounder,\r\n.batsman-active,\r\n.batsman,\r\n.bowler-active,\r\n.bowler,\r\n.foreign-active,\r\n.foreign,\r\n.keeper-active,\r\n.keeper,\r\n.uncapped-active,\r\n.uncapped {\r\n    max-width: 100%;\r\n    background-size: 30px;\r\n    background-image: url('https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/roles_icons_sprite.png');\r\n    display: inline-block;\r\n    width: 22px;\r\n    height: 24px;\r\n    position: relative;\r\n    vertical-align: top;\r\n    opacity: 0.9;\r\n    vertical-align: middle;\r\n}\r\n.keeper-active,\r\n.keeper {\r\n    width: 35px;\r\n}\r\n\r\n.powerplay-active .allrounder,\r\n.powerplayer .allrounder,\r\n.allrounder-active {\r\n    background-position: 0 0%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.allrounder {\r\n    background-position: 0 9.090909%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.powerplay-active .batsman,\r\n.powerplayer .batsman,\r\n.batsman-active {\r\n    background-position: 0 18.181818%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.batsman {\r\n    background-position: 0 27.272727%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.powerplay-active .bowler,\r\n.powerplayer .bowler,\r\n.bowler-active {\r\n    background-position: 0 36.363636%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.bowler {\r\n    background-position: 0 45.454545%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.powerplay-active .foreign,\r\n.powerplayer .foreign,\r\n.foreign-active {\r\n    background-position: 0 54.545455%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.foreign {\r\n    background-position: 0 63.636364%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.powerplay-active .keeper,\r\n.powerplayer .keeper,\r\n.keeper-active {\r\n    background-position: 0 72.727273%;\r\n    background-size: 35px;\r\n}\r\n\r\n.keeper {\r\n    background-position: 0 81.818182%;\r\n    background-size: 35px;\r\n}\r\n\r\n.powerplay-active .uncapped,\r\n.powerplayer .uncapped,\r\n.uncapped-active {\r\n    background-position: 0 90.909091%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n.uncapped {\r\n    background-position: 0 100%;\r\n    /*background-size: 100%;*/\r\n}\r\n\r\n\r\n/*action*/\r\n\r\n.close-active,\r\n.close-icon,\r\n.plus-active,\r\n.plus {\r\n    max-width: 100%;\r\n    background-size: 100%;\r\n    background-image: url('https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/action.png');\r\n    display: inline-block;\r\n    width: 16px;\r\n    height: 19px;\r\n    position: relative;\r\n    vertical-align: top;\r\n    margin-left: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.close-active {\r\n    background-position: 0 0%;\r\n    background-size: 100%;\r\n}\r\n\r\n.close-icon {\r\n    /*background-position: 0 33%;\r\n    background-size: 100%;*/\r\n    background-position: 0 0%;\r\n    background-size: 100%;\r\n}\r\n\r\n.plus-active {\r\n    background-position: 0 65.666667%;\r\n    background-size: 100%;\r\n}\r\n\r\n.plus {\r\n    /*background-position: 0 99%;\r\n    background-size: 100%;*/\r\n    background-position: 0 65.666667%;\r\n    background-size: 100%;\r\n}\r\n\r\n\r\n/*add and delete action*/\r\n\r\n.action-close:hover .close-icon {\r\n    background-position: 0 0%;\r\n    background-size: 100%;\r\n}\r\n\r\n.powerplay-active .action-close .close-icon {\r\n    background-position: 0 0%;\r\n}\r\n\r\n.action-add:hover .plus {\r\n    background-position: 0 65.666667%;\r\n    background-size: 100%;\r\n}\r\n\r\n\r\n/*team*/\r\n\r\n.flag {\r\n    max-width: 100%;\r\n    background-size: 100%;\r\n    background-image: url('https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/team.png');\r\n    display: inline-block;\r\n    width: 29px;\r\n    height: 16px;\r\n    position: relative;\r\n    vertical-align: top;\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n.flag.dd { background-position: 0 0%; background-size: 100%; }\r\n.flag.gl { background-position: 0 12.456747%; background-size: 100%; }\r\n.flag.kkr { background-position: 0 24.913495%; background-size: 100%; }\r\n.flag.kxip { background-position: 0 37.370242%; background-size: 100%; }\r\n.flag.mi { background-position: 0 49.82699%; background-size: 100%; }\r\n.flag.tbd { background-position: 0 62.5%; background-size: 100%; }\r\n.flag.rcb { background-position: 0 75.086505%; background-size: 100%; }\r\n.flag.rps { background-position: 0 87.543253%; background-size: 100%; }\r\n.flag.srh { background-position: 0 100%; background-size: 100%; }\r\n\r\n/*table fixed css*/\r\n\r\n.duplicate-table {\r\n    background-color: #1c4fa2;\r\n    color: #fff;\r\n    font-size: 13px;\r\n    font-family: ALINIB;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    z-index: 999;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.dropdown-share img {\r\n    cursor: pointer;\r\n}\r\n\r\n.duplicate-table>thead>tr>th {\r\n    border-bottom: none;\r\n}\r\n@media screen and (max-width: 520px) {\r\n    .allrounder-active,\r\n    .allrounder,\r\n    .batsman-active,\r\n    .batsman,\r\n    .bowler-active,\r\n    .bowler,\r\n    .foreign-active,\r\n    .foreign,\r\n    .keeper-active,\r\n    .keeper,\r\n    .uncapped-active,\r\n    .uncapped {\r\n        width: 22px;\r\n        height: 22px;\r\n        background-size: 31px;\r\n    }\r\n    .table>thead:first-child>tr:first-child>th {\r\n        font-size: 11px;\r\n    }\r\n    .table-section .table tbody tr td {\r\n        font-size: 11px;\r\n    }\r\n    .keeper-active,\r\n    .keeper {\r\n        width: 30px;\r\n    }\r\n    .powerplay-active .keeper, .powerplayer .keeper, .keeper-active{\r\n        background-size: 31px;\r\n    }\r\n    .table-section .table thead tr th ,\r\n    .table-section .table tbody tr td {\r\n        padding: 10px 5px;\r\n    }\r\n}\r\n\r\n.header-background {\r\n    background-color: #1c4fa2;\r\n    height: 35px;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 999;\r\n}\r\n\r\n.th-inner {\r\n    position: absolute;\r\n    top: 3px;\r\n    line-height: 30px;\r\n    text-align: left;\r\n    z-index: 9999;\r\n}\r\n\r\n.league-label{\r\n    vertical-align: middle !important;\r\n}\r\n.league-popup {\r\n    width: 300px;\r\n    padding: 15px;\r\n    background: #fff;\r\n    position: relative;\r\n    box-shadow: 0px 2px 4px 1px #ddd;\r\n}\r\n\r\n.league-popup:before {\r\n    content: '';\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n    border-bottom: 15px solid #fff;\r\n    position: absolute;\r\n    top: -14px;\r\n    right: 15px;\r\n    display: none;\r\n}\r\n\r\n.league-popup .user-details .user-team-name {\r\n    font-size: 18px;\r\n    width: 150px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.league-popup .user-details .user-name,\r\n.league-popup .user-details .user-team-status {\r\n    width: 150px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.league-popup .user-details label {\r\n    color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.league-popup .user-team-points {\r\n    color: #1c4fa2 !important;\r\n    font-size: 16px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.leaguepop-code {\r\n    color: rgba(0, 0, 0, 0.8);\r\n    font-size: 16px;\r\n    margin: 10px 0;\r\n}\r\n\r\n.leaguepop-footer {\r\n    margin: 16px 0 8px;\r\n}\r\n\r\n.leaguepop-footer .SocialMediaShareButton {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-left: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.copy-url {\r\n    cursor: pointer\r\n}\r\n\r\n.copied-notify {\r\n    position: absolute;\r\n    bottom: 23px;\r\n    background: #d7d7d7;\r\n    padding: 2px 10px;\r\n    font-size: 13px;\r\n    text-transform: uppercase;\r\n    color: rgba(0, 0, 0, 0.78);\r\n    line-height: 1.5;\r\n    z-index: 999;\r\n}\r\n\r\n\r\n/*Legend Popup*/\r\n\r\n.legend-popup {\r\n    background: #f7f7f7;\r\n    padding: 10px 25px;\r\n    font-size: 14px;\r\n    color: rgba(0, 0, 0, 0.7);\r\n    font-family: ALINSN;\r\n    position: relative;\r\n    display: inline-block;\r\n    box-shadow: 0px 0px 2px 1px #eaeaea;\r\n    max-width: 200px;\r\n    text-align: center;\r\n}\r\n\r\n.legend-popup span {\r\n    color: #000;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.legend-popup:before {\r\n    content: '';\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n    border-top: 15px solid #f7f7f7;\r\n    position: absolute;\r\n    bottom: -14px;\r\n    left: 50%;\r\n    margin-left: -15px;\r\n}\r\n@media screen and (max-width: 767px){\r\n    .league-logo{\r\n        width: 27%;\r\n    }\r\n    .league-label .user-team-name{\r\n        font-size: 18px !important;\r\n    }\r\n    .team-img{\r\n        display: none !important;\r\n    }\r\n}\r\n@media screen and (max-width: 640px) {\r\n    .league-popup .user-details {\r\n        margin-top: 0;\r\n    }\r\n\r\n    .league-popup {\r\n        width: 100%;\r\n        padding: 10px;\r\n    }\r\n    .league-popup .user-details .user-team-name {\r\n        font-size: 18px;\r\n        width: 120px;\r\n    }\r\n    .league-popup .user-details .user-name {\r\n        width: 120px;\r\n    }\r\n    .league-popup .user-details .user-team-status {\r\n        width: 130px;\r\n    }\r\n    .league-popup .btn-theme {\r\n        font-size: 12px;\r\n        padding: 5px 20px;\r\n    }\r\n    .leaguepop-code {\r\n        font-size: 16px;\r\n    }\r\n    .dropdown-tab .dropdown-btn {\r\n        padding: 0px 5px;\r\n        font-size: 11px;\r\n    }\r\n}\r\n.playersadded-list label{\r\n   font-family: ALINSN;\r\n   font-size: 13px;\r\n   background-color: #1c4fa2;\r\n   height: 24px;\r\n   border-radius: 100%;\r\n   width: 24px;\r\n   text-align: center;\r\n   color: #fff;\r\n   padding: 3px 0px;\r\n   margin-right: 5px;\r\n}\r\n.playersadded-list{\r\n   position: relative;\r\n   top: 10px;\r\n}\r\n\r\n\r\n/*team logo*/\r\n.team-img{\r\n    display: inline-block;\r\n}\r\n.team{\r\n    width: 130px;\r\n    height: 130px;\r\n    display: inline-block;\r\n    background-size: 100% !important;\r\n    background-repeat: no-repeat !important;\r\n    position: relative;\r\n    top: 20px;\r\n}\r\n.team.dd{\r\n    background: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/dd.png);\r\n}\r\n.team.gl{\r\n    background: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/gl.png);\r\n}\r\n.team.kkr{\r\n    background: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/kkr.png);\r\n}\r\n.team.kxip{\r\n    background: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/kxip.png);\r\n}\r\n.team.mi{\r\n    background: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/mi.png);\r\n}\r\n.team.rcb{\r\n    background: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/rcb.png);\r\n}\r\n.team.rps{\r\n    background: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/rps.png);\r\n}\r\n.team.srh{\r\n    background: url(https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/team/srh.png);\r\n}\r\n/*css fixes 11*/\r\n.pos-sa .user-img .emblem.team{\r\n    position: static !important;\r\n}\r\n\r\n/* Row Style1*/\r\n\r\n/*Font Regular*/\r\n\r\n@font-face {\r\n    font-family: ALINSN;\r\n    src: url('../fonts/ALINSN_.ttf')\r\n}\r\n\r\n\r\n/*Font SemiBold*/\r\n\r\n@font-face {\r\n    font-family: ALINSB;\r\n    src: url('../fonts/ALINSB_.ttf')\r\n}\r\n\r\n\r\n/*Font Bold*/\r\n\r\n@font-face {\r\n    font-family: ALINIB;\r\n    src: url('../fonts/ALINIB_.ttf')\r\n}\r\n\r\n.cplace {\r\n    cursor: pointer ! important\r\n}\r\n\r\nul {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nul,\r\nli {\r\n    list-style: none;\r\n}\r\n\r\n\r\n/*commmon css*/\r\n\r\nbody {\r\n    font-synthesis: none;\r\n    -moz-font-feature-settings: 'kern';\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    background-color: #F2F4F6;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n    color: #000;\r\n    font-family: ALINSN;\r\n    font-size: 12px;\r\n    opacity: 0.6;\r\n}\r\n\r\n::-moz-placeholder {\r\n    color: #000;\r\n    font-family: ALINSN;\r\n    font-size: 12px;\r\n    opacity: 0.6;\r\n}\r\n\r\n.pad0 {\r\n    padding: 0px;\r\n}\r\n\r\n.padl0 {\r\n    padding-left: 0px;\r\n}\r\n\r\n.padr0 {\r\n    padding-right: 0px;\r\n}\r\n\r\n\r\n/*header*/\r\n\r\n#header-section img {\r\n    width: 100%;\r\n    height: 165px;\r\n    overflow: hidden;\r\n}\r\n\r\n.locked-img {\r\n    position: relative;\r\n    top: -2px;\r\n}\r\n\r\n\r\n/*main wrapper*/\r\n\r\nbody.fantacy-body {\r\n    background: url(\"https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/bg2.jpg\");\r\n    background-size: cover;\r\n    width: 100%;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    padding-bottom: 60px;\r\n}\r\n\r\n.body-section {\r\n    background-color: #000;\r\n    /*margin: 0px 90px;*/\r\n    padding: 15px 15px;\r\n}\r\n\r\n.mshow {\r\n    display: none;\r\n}\r\n\r\n.mhide {\r\n    display: block !important;\r\n}\r\n\r\n.edit-btn {\r\n    display: none !important;\r\n}\r\n.help-home{\r\n    position: relative;\r\n    top: 2px;\r\n}\r\n.help-home a.dropdown-toggle{\r\n     font-family: ALINSB;\r\n    cursor: pointer;\r\n    margin-right: 5px;\r\n    text-decoration: none;\r\n    color: #fff !important;\r\n}\r\n.help-home ul li a{\r\n    font-family: ALINSB;\r\n    color: #000 !important;\r\n}\r\n/*league icons*/\r\n\r\n.addperson,\r\n.create-league,\r\n.fantasy-league,\r\n.fantasy-team,\r\n.dailychallenge {\r\n    max-width: 100%;\r\n    background-size: 100%;\r\n    background-image: url('https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/league.png');\r\n    display: inline-block;\r\n    width: 130px;\r\n    height: 100px;\r\n}\r\n\r\n.addperson {\r\n    background-position: 0 0%;\r\n    background-size: 100%;\r\n}\r\n\r\n.create-league {\r\n    background-position: 0 31.637168%;\r\n    background-size: 131.034483%;\r\n}\r\n\r\n.fantasy-league {\r\n    background-position: 0 57.261411%;\r\n    background-size: 138.686131%;\r\n    height: 78px;\r\n}\r\n\r\n.fantasy-team {\r\n    background-position: 0 78.630705%;\r\n    background-size: 138.686131%;\r\n    height: 78px;\r\n}\r\n\r\n.dailychallenge {\r\n    background-position: 0 100%;\r\n    background-size: 138.686131%;\r\n    width: 130px;\r\n    height: 80px;\r\n}\r\n\r\n.back-option {\r\n    display: none;\r\n    padding: 0px 10px 0px 10px;\r\n}\r\n\r\n.back-table {\r\n    display: none;\r\n}\r\n\r\n.squad-member {\r\n    background-color: #d5d5d5 !important;\r\n}\r\n\r\n\r\n/*live score tab*/\r\n\r\n.tab-section {\r\n    clear: both;\r\n}\r\n\r\n.live-score-tab {\r\n    display: none;\r\n    margin: 10px auto 0;\r\n    text-align: center;\r\n}\r\n\r\n.score-holder .t-img span {\r\n    display: inline-block;\r\n    width: 100px;\r\n    height: 90px;\r\n    background: url('https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/live-team.png');\r\n    background-repeat: repeat;\r\n    text-indent: -9999px;\r\n    background-size: 194%;\r\n}\r\n\r\n.score-holder .t-img.rcb span,\r\n.score-holder .t-img.RCB span {\r\n    background-position: 3px 6px;\r\n}\r\n\r\n.score-holder .t-img.dd span,\r\n.score-holder .t-img.DD span {\r\n    background-position: -280px -337px;\r\n}\r\n\r\n.score-holder .t-img.gl span,\r\n.score-holder .t-img.GL span {\r\n    background-position: -190px -82px;\r\n}\r\n\r\n.score-holder .t-img.srh span,\r\n.score-holder .t-img.SRH span {\r\n    background-position: -276px -80px;\r\n}\r\n\r\n.score-holder .t-img.kxip span,\r\n.score-holder .t-img.KXIP span {\r\n    background-position: -190px -170px;\r\n}\r\n\r\n.score-holder .t-img.mi span,\r\n.score-holder .t-img.MI span {\r\n    background-position: -280px -163px;\r\n}\r\n\r\n.score-holder .t-img.rps span,\r\n.score-holder .t-img.RPS span {\r\n    background-position: 5px -600px;\r\n}\r\n\r\n.score-holder .t-img.kkr span,\r\n.score-holder .t-img.KKR span {\r\n    background-position: -280px -603px;\r\n}\r\n\r\n.live-score-tab li {\r\n    display: inline-block;\r\n    color: #fff;\r\n    width: 49%;\r\n    padding: 8px 0px;\r\n    margin-top: -5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.live-score-tab li a {\r\n    color: #fff;\r\n}\r\n\r\n.live-score-tab li.active {\r\n    border-bottom: 2px solid #fff;\r\n}\r\n\r\n.mhideinline {\r\n    padding-right: 5px;\r\n    display: inline-block;\r\n}\r\n\r\n.mshowinline {\r\n    display: none;\r\n}\r\n\r\n.modal-backdrop.in {\r\n    opacity: .8;\r\n    z-index: 9999;\r\n}\r\n\r\n/*live score empty*/\r\n#empty-score{\r\n    background-color: #fff;\r\n}\r\n.emptyScore-section{\r\n    padding: 50px 0px;\r\n}\r\n.emptyScore-section label{\r\n    font-family: ALINSB;\r\n    text-align: center;\r\n    display: block;\r\n    margin-top: 20px;\r\n    font-size: 18px;\r\n    color: rgb(171, 32, 32);\r\n}\r\n/*Forgot Password Button*/\r\n.forgot-button{\r\n    margin: 0 auto;\r\n    display: block;\r\n}\r\n/*Email Verification*/\r\n.verified-msg{\r\n    text-align: center;\r\n    background: #293375;\r\n    height: 60px;\r\n    font-size: 17px;\r\n    padding-top: 18px;\r\n    color: rgb(255, 255, 255);\r\n    margin-bottom: 15px;\r\n    position: relative;\r\n}\r\n.verified-msg img{\r\n    margin-right: 15px;\r\n    margin-top: -5px;\r\n}\r\n.verified-msg a{\r\n    text-decoration: underline;\r\n    color: #fff;\r\n}\r\n.verified-msg .close-notify{\r\n    font-size: 14px;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: 13px;\r\n    top: 18px;\r\n}\r\n.testclass{\r\n    display: none !important;\r\n}\r\n.share-links{\r\n   padding: 0px 0px;\r\n}\r\n.share-links ul li{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    padding: 0px 10px;\r\n    border-right: 1px solid #e8e8e8;\r\n    height: 35px;\r\n}\r\n.share-links ul li:last-child{\r\n    margin-right: -1px;\r\n}\r\n.share-links ul li:first-child img{\r\n    margin-top: 5px;\r\n}\r\n.leagueCode-section .copied-notify {\r\n    bottom: -10px;\r\n    left: 0px;\r\n}\r\n.back-align{\r\n   padding: 10px 15px;\r\n}\r\n.terms-error{\r\n    position: relative;\r\n    top: 0px;\r\n    margin-left: 0px;\r\n}\r\n.sharecursor{\r\n    margin-left: 5px;\r\n}\r\n.share-data ul li,\r\n.sharecursor{\r\n    cursor: pointer;\r\n}\r\n.Loader-img{\r\n    padding: 30px 0px;\r\n}\r\n.Loader-img img{\r\n    width: 50px;\r\n}\r\n.loaderWrapper{\r\n    position: relative;\r\n    width: 100%;\r\n    /*height: 100vh;*/\r\n    /*background-color: #000;*/\r\n}\r\n.loader{\r\n    position: absolute;\r\n    top: 50%;\r\n    bottom: 50%;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: #000;\r\n    opacity: 0.9;\r\n    z-index: 999999;\r\n    text-align: center;\r\n}\r\n.loader img{\r\n    width: 60px;\r\n    margin-top: 2%;\r\n}\r\n.dropdown.disabled{\r\n    cursor: not-allowed;\r\n}\r\n.delete-img,\r\n.ok-img{\r\n    cursor: pointer;\r\n    margin-left: 7px;\r\n    width: 22px;\r\n    height: 22px;\r\n}\r\n.mlhide {\r\n   /*display: block;*/\r\n}\r\n\r\n/*Landing Page Header Logo*/\r\n.landing-team-header .user-img{\r\n    padding: 10px;\r\n}\r\n.cursorChange{\r\n    cursor: inherit ! important;\r\n}\r\n.user-change{\r\n    font-family: ALINSN;\r\n    color: #fff;\r\n    display: block;\r\n    margin-bottom: 0px;\r\n    font-size: 13px;\r\n    opacity: 0.5;\r\n    margin-top: 5px;\r\n}\r\n.leagueNone{\r\n    width: 320px;\r\n    margin: 10px auto;\r\n    text-align: center;\r\n}\r\n.truncateWord .user-team-name,\r\n.truncateWord .user-team-status{\r\n    width: 180px;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n}\r\n.mpull label{\r\n    margin-top: 20px;\r\n}\r\n.ll-data ul li{\r\n    display: inline-block;\r\n    padding-right: 20px;\r\n}\r\n.ll-data ul li label{\r\n    font-family: ALINSB;\r\n}\r\n.ll-data ul li span{\r\n    font-family: ALINSN;\r\n}\r\n.tabelHeight-align{\r\n     height: 510px !important;\r\n}\r\n/*responsive css*/\r\n@media screen and (max-width: 640px){\r\n    .verified-msg {\r\n        height: auto;\r\n        font-size: 12px;\r\n        padding: 15px;\r\n    }\r\n    .verified-msg .close-notify{\r\n        font-size: 10px;\r\n        right: 9px;\r\n        top: 3px;\r\n    }\r\n    .leaguecode-generate{\r\n        margin-top: 10px;\r\n    }\r\n    .user-change{\r\n        display: none !important;\r\n    }\r\n    .leagueNone{\r\n        width: 90%;\r\n        margin: 10px auto;\r\n        text-align: center;\r\n    }\r\n    .text-none{\r\n        display: none !important;\r\n    }\r\n    .playersadded-list span{\r\n        font-size: 12px;\r\n    }\r\n    .dailyTab.stats-header ul li{\r\n        width: 120px;\r\n    }\r\n    .playersadded-list span{\r\n        font-size: 12px;\r\n    }\r\n}\r\n@media screen and (max-width: 991px) {\r\n    .mpull label {\r\n        margin-top: 0px;\r\n    }\r\n    .body-section {\r\n        padding: 20px 0px;\r\n        width: 100%;\r\n    }\r\n    body.fantacy-body{\r\n        height: 100vh;\r\n    }\r\n    .padl0,\r\n    .padr0 {\r\n        padding: 0px;\r\n    }\r\n    .mhide,\r\n    .reset-btn {\r\n        display: none !important;\r\n    }\r\n    .mshow {\r\n        display: inline-block !important;\r\n    }\r\n    .edit-btn {\r\n        display: inline-block !important;\r\n    }\r\n    .search-tab .search-form {\r\n        width: 86%;\r\n        display: inline-block;\r\n    }\r\n    body.fantacy-body {\r\n        padding-bottom: 0px;\r\n    }\r\n    .back-option {\r\n        display: inline-block;\r\n    }\r\n    .back-table {\r\n        display: inline-block;\r\n        padding: 10px;\r\n    }\r\n    .dailychallenge {\r\n        height: 60px;\r\n    }\r\n    .live-score-tab {\r\n        display: block;\r\n    }\r\n    /*table css*/\r\n    .fixed-table-inner {\r\n        height: auto !important;\r\n        margin-bottom: 40px;\r\n    }\r\n    .mhideinline {\r\n        display: none;\r\n    }\r\n    .mshowinline {\r\n        display: inline-block;\r\n            padding-right: 4px;\r\n    }\r\n    /*sidebar*/\r\n    .overflow-scroll.active {\r\n        position: fixed;\r\n        width: 100%;\r\n    }\r\n    .testclass{\r\n        display: inline-block !important;\r\n    }\r\n    .join-bottom,\r\n    .help-home{\r\n        display: none !important;\r\n    }\r\n    .sharecursor {\r\n        margin-right: 5px;\r\n    }\r\n    .mtop{\r\n       margin-top: 16px;\r\n    }\r\n    .new-league .prize{\r\n        display: none;\r\n    }\r\n    .user-details.prize-head {\r\n        margin-top: 5px !important;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 991px) and (max-width:1250px) {\r\n    .table-footer .btn-white,\r\n    .table-footer .btn-theme {\r\n        font-size: 10px !important;\r\n        padding: 7px 10px;\r\n    }\r\n    .budget-header ul li label,\r\n    .budget-header ul li span {\r\n        font-size: 10px;\r\n    }\r\n    .balance-tab ul li span {\r\n        font-size: 10px;\r\n    }\r\n    .help-home{\r\n    position: relative;\r\n    top: 6px;\r\n}\r\n}\r\n\r\n@media screen and (max-width:1200px) {\r\n    .mlhide {\r\n       display: none;\r\n    }\r\n}\r\n@media screen and (min-width: 991px) {\r\n    .truncateWord .user-team-name,\r\n    .truncateWord .user-team-status{\r\n        width: 200px;\r\n        white-space: nowrap;\r\n        overflow: hidden !important;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n\r\n\r\n/*new css*/\r\n.track-back.bck-btn{\r\n    padding: 10px 15px;\r\n}\r\n.dailyTab{\r\n    background-color: #fff;\r\n    margin: 0px !important;\r\n    margin-bottom: 15px !important;\r\n    padding: 15px 0px;\r\n}\r\n.dailyTab.stats-header li:nth-child(2) {\r\n    margin-left: 0px;\r\n}\r\n.info-11{\r\n    background-color: #fff;\r\n    padding: 10px;\r\n}\r\n.info-11 p{\r\n       font-family: ALINSN;\r\n       margin-bottom: 0px;\r\n       font-size: 16px;\r\n       text-align: center;\r\n}\r\n.info-11 label{\r\n    font-family: ALINSB;\r\n}\r\n\r\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-12 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<style>\r\n    ng2-tooltip .tooltip-contents {\r\n    border: 1px solid #ccc;\r\n    padding: 5px;\r\n    background:#fff !important;\r\n}\r\n    </style>\r\n<h2 class=\"team-header text-center\" style=\"color:white;\">\r\n  {{title}}\r\n</h2>\r\n   <div class=\"info-tab\">\r\n        <ul class=\"list-unstyled\">\r\n            <li>\r\n                <label [ngClass]=\"VALIDATION_MANAGER.SQUAD_BALANCE_BATSMAN\"></label>\r\n                <strong>Batsman:</strong>&nbsp; {{currentCombination.batsman}}<br>\r\n                (min: {{validationRule.SquadBalance.Batsman.MIN}} max: {{validationRule.SquadBalance.Batsman.MAX}})\r\n            </li>\r\n            <li>\r\n                <label [ngClass]=\"VALIDATION_MANAGER.SQUAD_BALANCE_Bolwer\"></label>\r\n                <strong>Bolwer:</strong>&nbsp; {{currentCombination.bowler}}<br>\r\n                (min: {{validationRule.SquadBalance.Bolwer.MIN}} max: {{validationRule.SquadBalance.Bolwer.MAX}})\r\n            </li>\r\n            <li>\r\n                <label [ngClass]=\"VALIDATION_MANAGER.SQUAD_BALANCE_AllRounder\"></label>\r\n                <strong>All Rounder:</strong>&nbsp; {{currentCombination.allrounder}}<br>\r\n                 (min: {{validationRule.SquadBalance.AllRounder.MIN}} max: {{validationRule.SquadBalance.AllRounder.MAX}})\r\n            </li>\r\n            <li>\r\n                <label [ngClass]=\"VALIDATION_MANAGER.SQUAD_BALANCE_Keeper\"></label>\r\n                <strong>Keeper:</strong>&nbsp; {{currentCombination.keeper}}<br>\r\n                (min: {{validationRule.SquadBalance.Keeper.MIN}})\r\n            </li>\r\n            <li>\r\n                <label [ngClass]=\"VALIDATION_MANAGER.SQUAD_OverseasLimit\"></label>\r\n                <strong>Overseas:</strong>&nbsp; {{currentCombination.overseas}}<br>\r\n                (max: {{validationRule.OverseasLimit.MAX}})\r\n            </li>\r\n            <li>\r\n                <label [ngClass]=\"VALIDATION_MANAGER.ElevenPlayer\"></label>\r\n                <strong>Total:</strong>&nbsp; {{currentCombination.totalplayer}}<br>\r\n                (total: {{validationRule.ElevenPlayer.TOTAL}})\r\n            </li>\r\n        </ul>\r\n    </div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div [ngClass]=\"decidebudgetstate()\" >\r\n            <ul class=\"list-unstyled\">\r\n                <li><label>Budget Left : </label><span> {{totalBudget}}</span></li>\r\n                <li><label>Subs Left : </label><span> {{subsleft}}</span></li>\r\n                <li><label>Free Uncapped : </label><span> {{freeuncapped}}</span></li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"balance-tab\">\r\n        <ul class=\"list-unstyled\">\r\n                <li ng2-tooltip='\r\n<div style=\"background:#fff !important;margin: -5px;\r\n    padding: 10px;\">\r\n    <div>\r\n        <div style=\"width:210px;\">\r\n            <div style=\"float:left\">\r\n                    Bowler: (min: {{validationRule.SquadBalance.Bolwer.MIN}} max: {{validationRule.SquadBalance.Bolwer.MAX}})\r\n            </div>   \r\n            <div style=\"float:left\">\r\n                  \r\n                  Keeper: (min: {{validationRule.SquadBalance.Keeper.MIN}})\r\n            </div>   \r\n            <div style=\"clear:both;\">\r\n            </div>\r\n        </div>\r\n        <div style=\"width:210px;\">\r\n            <div style=\"float:left\">\r\n               \r\n               Batsman: (min: {{validationRule.SquadBalance.Batsman.MIN}} max: {{validationRule.SquadBalance.Batsman.MAX}})\r\n            </div>   \r\n            <div style=\"float:left\">\r\n                    All Rounder: (min: {{validationRule.SquadBalance.AllRounder.MIN}} max: {{validationRule.SquadBalance.AllRounder.MAX}})\r\n            </div>   \r\n            <div style=\"clear:both;\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'>\r\n                <label class=\"{{VALIDATION_MANAGER.SquadBalance}}\"></label><span>Squad Balance</span></li>\r\n                <li ng2-tooltip='<div style=\"background:#fff;margin: -5px;\r\n    padding: 10px;\">\r\n                            <div style=\"width:200px;\">\r\n                            <div style=\"float:left\">\r\n                                &nbsp;\r\n                            </div>   \r\n                            <div style=\"float:left\">\r\n                                Total Player: (total: {{validationRule.ElevenPlayer.TOTAL}})\r\n                            </div>   \r\n                            <div style=\"clear:both;\">\r\n                            </div>\r\n                         </div>\r\n                         </div>'>\r\n                    <label class=\"{{VALIDATION_MANAGER.ElevenPlayer}}\"></label><span>Eleven Players</span>\r\n                </li>\r\n                 <li ng2-tooltip='<div style=\"background:#fff;padding: 0px; !important;margin: -5px;\r\n    padding: 10px;\">\r\n                                    <span> Franchise Spread: (max: {{validationRule.FranchiseSpread.MAX}})</span>\r\n                                  </div>'>\r\n                    <label class=\"{{VALIDATION_MANAGER.FranchiseSpread}}\"></label><span>Franchise Spread</span>\r\n                </li>\r\n                <li ng2-tooltip='<div style=\"background:#fff;margin: -5px;\r\n    padding: 10px;\">\r\n                        <div style=\"width:200px;\">\r\n                            <div style=\"float:left\">\r\n                                &nbsp;\r\n                            </div>   \r\n                            <div style=\"float:left\">\r\n                               Overseas: (max: {{validationRule.OverseasLimit.MAX}})\r\n                            </div>   \r\n                            <div style=\"clear:both;\">\r\n                            </div>\r\n                         </div>\r\n                         </div>'>\r\n                    <label class=\"{{VALIDATION_MANAGER.OverseasLimit}}\"></label><span>Overseas Limit</span>\r\n                </li>\r\n                <li ng2-tooltip='<div  style=\"background:#fff;margin: -5px;\r\n    padding: 10px;\">\r\n                        <div style=\"width:200px;\">\r\n                            <div style=\"float:left\">\r\n                                &nbsp;\r\n                            </div>   \r\n                            <div style=\"float:left\">\r\n                               Uncapped: (min: {{validationRule.UncappedQuota.MIN}})\r\n                            </div>   \r\n                            <div style=\"clear:both;\">\r\n                            </div>\r\n                         </div>\r\n                         </div>'>\r\n                    <label class=\"{{VALIDATION_MANAGER.UncappedQuota}}\"></label><span>Uncapped Quota</span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div style=\"height:570px; overflow:auto;\" class=\"table-section\">\r\n            <table style=\"width:100%\">\r\n                <tr>\r\n                    <th class=\"fixed\">ROLE</th>\r\n                    <th>PLAYER</th>\r\n                    <th>TEAM</th>\r\n                    <th>COST</th>\r\n                    <th>&nbsp;</th>\r\n                </tr>\r\n                <tr *ngFor=\"let player of selectedplayers\">\r\n                    <td><span [ngClass]=\"player.role[0]\"></span></td>\r\n                    <td>{{player.fullName}}&nbsp;<span [ngClass]=\"getplayertype(player)\"></span></td>\r\n                    <td>{{player.teamAbbreviation}}</td>\r\n                    <td>{{player.price}}</td>\r\n                    <td class=\"action-close\" (click)=\"removeSelectedPlayer(player)\"><span class=\"close-icon\"></span></td>\r\n                </tr>\r\n            </table>\r\n            <div class=\"table-footer\">\r\n                <div class=\"pull-right\" style=\"float:right;\">\r\n                    <button  [disabled]=\"!isValidForm()\"  type=\"button\" class=\"btn btn-theme save-btn\" value=\"Save\" (click)=\"preparesquad()\">Save</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"search-tab\">\r\n            <form class=\"navbar-form\" role=\"search\">\r\n            <div class=\"input-group add-on\">\r\n                <input class=\"form-control\" placeholder=\"Search with the player name\" name=\"srch-term\" style=\"height:50px;\" id=\"srch-term\" type=\"text\" [(ngModel)]=\"filter.fullName\">\r\n                <div class=\"input-group-btn\">\r\n                    <button class=\"btn btn-default\" type=\"submit\"><i class=\"glyphicon glyphicon-search\"></i></button>\r\n                </div>\r\n            </div>\r\n            </form> \r\n        </div>\r\n        <div class=\"col-md-12 dropdown-tab\">\r\n            <select class=\"ui dropdown\"  [(ngModel)]=\"filter.role\">\r\n                <option value=\"allroles\">All Roles</option>\r\n                <option value=\"batsman\">Batsman</option>\r\n                <option value=\"keeper\">Keeper</option>\r\n                <option value=\"allrounder\">All Rounder</option>\r\n                <option value=\"bowler\">Bowler</option>\r\n            </select>\r\n            <select class=\"ui dropdown\" [(ngModel)]=\"filter.nationality\">\r\n                <option value=\"alltypes\">All Types</option>\r\n                <option value=\"foreign\">Foreign Players</option>\r\n                <option value=\"indian\">Indian Players</option>\r\n                <option value=\"uncapped\">Uncapped Players</option>\r\n            </select>\r\n            <select class=\"ui dropdown\" [(ngModel)]=\"filter.teamAbbreviation\">\r\n                <option value=\"allteams\">All Teams</option>\r\n                <option value=\"dd\">DD</option>\r\n                <option value=\"kxip\">KXIP</option>\r\n                <option value=\"kkr\">KKR</option>\r\n                <option value=\"mi\">MI</option>\r\n                <option value=\"kxip\">KXIP</option>\r\n                <option value=\"srh\">SRH</option>\r\n                <option value=\"gl\">GL</option>\r\n                <option value=\"rps\">RPS</option>\r\n            </select>\r\n        </div>\r\n        <div style=\"height:570px; overflow:auto;\" class=\"table-section\">\r\n            <table style=\"width:100%\">\r\n                <tr>\r\n                    <th>ROLE</th>\r\n                    <th>PLAYER</th>\r\n                    <th>TEAM</th>\r\n                    <th>COST</th>\r\n                    <th>&nbsp;</th>\r\n                </tr>\r\n                <tr *ngFor=\"let player of players |playerfilter:filter\">\r\n                    <td><span [ngClass]=\"player.role[0]\"></span></td>\r\n                    <td>{{player.fullName}}&nbsp;<span [ngClass]=\"getplayertype(player)\"></span></td>\r\n                    <td>{{player.teamAbbreviation}}</td>\r\n                    <td>{{player.price}}</td>\r\n                    <td class=\"action-add\" (click)=\"selectplayer(player)\"><span class=\"plus\"></span></td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br/>\r\n \r\n   "

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"team-header text-center\" style=\"color:white;\">\n    FANTASY SQUAD\n</h2>\n<div class=\"squad-wrapper\">\n  <div class=\"current-squad\">\n    <div class=\"player-card\" *ngFor=\"let player of squads\" >\n      <span class=\"player-img dd\">\n    <img onerror=\"this.src='https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/players/rps/Ankit_Sharma.png';\" src=\"https://s3-ap-southeast-1.amazonaws.com/images-fantasy-iplt20/images/players/{{player.teamAbbreviation.toLowerCase()}}/{{player.fullName.replace(' ','_')}}.png\">\n</span>\n      <ul>\n        <li><span [ngClass]=\"player.role[0]\"></span></li>\n        <li><span [ngClass]=\"getplayertype(player)\"></span></li>\n        <li>{{player.teamAbbreviation}}</li>\n      </ul>\n      <div class=\"player-name mhide\">{{player.fullName}}</div>\n      <div class=\"player-name mshow\" style=\"width: 100%;\">{{player.shortName}}</div>\n      <div class=\"player-value\">{{player.price}}</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(394);


/***/ })

},[696]);
//# sourceMappingURL=main.bundle.map
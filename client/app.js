"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('reflect-metadata');
require('zone.js/dist/zone');
var core_1 = require('@angular/core');
var angular2_meteor_auto_bootstrap_1 = require('angular2-meteor-auto-bootstrap');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
var parties_list_ts_1 = require('./imports/parties-list/parties-list.ts');
var party_details_ts_1 = require('./imports/party-details/party-details.ts');
require('../collections/methods.ts');
var Tere = (function () {
    function Tere() {
    }
    Tere = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/client/app.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', as: 'PartiesList', component: parties_list_ts_1.PartiesList },
            { path: '/party/:partyId', as: 'PartyDetails', component: party_details_ts_1.PartyDetails }
        ]), 
        __metadata('design:paramtypes', [])
    ], Tere);
    return Tere;
}());
angular2_meteor_auto_bootstrap_1.bootstrap(Tere, [router_deprecated_1.ROUTER_PROVIDERS, core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' })]);
//# sourceMappingURL=app.js.map
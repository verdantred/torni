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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var parties_1 = require('../../../collections/parties');
var parties_form_1 = require('../parties-form/parties-form');
var PartiesList = (function () {
    function PartiesList() {
        this.parties = parties_1.Parties.find();
    }
    PartiesList.prototype.removeParty = function (party) {
        parties_1.Parties.remove(party._id);
    };
    PartiesList = __decorate([
        core_1.Component({
            selector: 'parties-list',
            templateUrl: '/client/imports/parties-list/parties-list.html',
            directives: [parties_form_1.PartiesForm, router_deprecated_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [])
    ], PartiesList);
    return PartiesList;
}());
exports.PartiesList = PartiesList;
//# sourceMappingURL=parties-list.js.map
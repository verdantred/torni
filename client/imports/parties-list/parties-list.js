"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var angular2_meteor_accounts_ui_1 = require('angular2-meteor-accounts-ui');
var angular2_meteor_1 = require('angular2-meteor');
var tmeasday_publish_counts_1 = require('meteor/tmeasday:publish-counts');
var angular2_pagination_1 = require('angular2-pagination');
var parties_1 = require('../../../collections/parties');
var parties_form_1 = require('../parties-form/parties-form');
var PartiesList = (function (_super) {
    __extends(PartiesList, _super);
    function PartiesList() {
        var _this = this;
        _super.call(this);
        this.pageSize = 10;
        this.curPage = new ReactiveVar(1);
        this.nameOrder = new ReactiveVar(1);
        this.partiesSize = 0;
        this.location = new ReactiveVar(null);
        this.autorun(function () {
            var options = {
                limit: _this.pageSize,
                skip: (_this.curPage.get() - 1) * _this.pageSize,
                sort: { name: _this.nameOrder.get() }
            };
            _this.subscribe('parties', options, _this.location.get(), function () {
                _this.parties = parties_1.Parties.find({}, { sort: { name: _this.nameOrder.get() } });
            }, true);
        });
        this.autorun(function () {
            _this.partiesSize = tmeasday_publish_counts_1.Counts.get('numberOfParties');
        }, true);
    }
    PartiesList.prototype.removeParty = function (party) {
        parties_1.Parties.remove(party._id);
    };
    PartiesList.prototype.search = function (value) {
        this.curPage.set(1);
        this.location.set(value);
    };
    PartiesList.prototype.changeSortOrder = function (nameOrder) {
        this.nameOrder.set(parseInt(nameOrder));
    };
    PartiesList.prototype.onPageChanged = function (page) {
        this.curPage.set(page);
    };
    PartiesList = __decorate([
        core_1.Component({
            selector: 'parties-list',
            viewProviders: [angular2_pagination_1.PaginationService],
            templateUrl: '/client/imports/parties-list/parties-list.html',
            directives: [parties_form_1.PartiesForm, router_deprecated_1.RouterLink, angular2_meteor_accounts_ui_1.LoginButtons, angular2_pagination_1.PaginationControlsCmp],
            pipes: [angular2_pagination_1.PaginatePipe]
        }), 
        __metadata('design:paramtypes', [])
    ], PartiesList);
    return PartiesList;
}(angular2_meteor_1.MeteorComponent));
exports.PartiesList = PartiesList;
//# sourceMappingURL=parties-list.js.map
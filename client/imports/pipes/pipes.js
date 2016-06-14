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
var core_1 = require('@angular/core');
var meteor_1 = require('meteor/meteor');
var DisplayName = (function () {
    function DisplayName() {
    }
    DisplayName.prototype.transform = function (user) {
        if (!user) {
            return '';
        }
        if (user.username) {
            return user.username;
        }
        if (user.emails) {
            return user.emails[0].address;
        }
        return '';
    };
    DisplayName = __decorate([
        core_1.Pipe({
            name: 'displayName'
        }), 
        __metadata('design:paramtypes', [])
    ], DisplayName);
    return DisplayName;
}());
exports.DisplayName = DisplayName;
var UserPartyStatus = (function () {
    function UserPartyStatus() {
    }
    UserPartyStatus.prototype.transform = function (party) {
        if (meteor_1.Meteor.userId() === party.owner) {
            return 'owner';
        }
        else if (party.public) {
            return 'invited (this is a public party)';
        }
        else if (party.invited && (party.invited.indexOf(meteor_1.Meteor.userId()) !== -1)) {
            return 'invited';
        }
        else {
            return 'uninvited';
        }
    };
    UserPartyStatus = __decorate([
        core_1.Pipe({
            name: 'userPartyStatus'
        }), 
        __metadata('design:paramtypes', [])
    ], UserPartyStatus);
    return UserPartyStatus;
}());
exports.UserPartyStatus = UserPartyStatus;
//# sourceMappingURL=pipes.js.map
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
var tracker_1 = require('meteor/tracker');
var parties_ts_1 = require('../../../collections/parties.ts');
var PartyDetails = (function () {
    function PartyDetails(params, ngZone) {
        var _this = this;
        var partyId = params.get('partyId');
        tracker_1.Tracker.autorun(function () {
            ngZone.run(function () {
                _this.party = parties_ts_1.Parties.findOne(partyId);
            });
        });
    }
    PartyDetails.prototype.saveParty = function (party) {
        parties_ts_1.Parties.update(party._id, {
            $set: {
                name: party.name,
                description: party.description,
                location: party.location
            }
        });
    };
    PartyDetails = __decorate([
        core_1.Component({
            selector: 'party-details',
            templateUrl: '/client/imports/party-details/party-details.html',
            directives: [router_deprecated_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, core_1.NgZone])
    ], PartyDetails);
    return PartyDetails;
}());
exports.PartyDetails = PartyDetails;
//# sourceMappingURL=party-details.js.map
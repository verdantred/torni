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
var meteor_1 = require('meteor/meteor');
var angular2_meteor_accounts_ui_1 = require('angular2-meteor-accounts-ui');
var angular2_meteor_1 = require('angular2-meteor');
var parties_ts_1 = require('../../../collections/parties.ts');
var pipes_ts_1 = require('../pipes/pipes.ts');
var PartyDetails = (function (_super) {
    __extends(PartyDetails, _super);
    function PartyDetails(params) {
        var _this = this;
        _super.call(this);
        var partyId = params.get('partyId');
        this.subscribe('party', partyId, function () {
            _this.autorun(function () {
                _this.party = parties_ts_1.Parties.findOne(partyId);
                _this.getUsers(_this.party);
            }, true);
        });
        this.subscribe('uninvited', partyId, function () {
            _this.getUsers(_this.party);
        }, true);
    }
    PartyDetails.prototype.getUsers = function (party) {
        if (party) {
            this.users = meteor_1.Meteor.users.find({
                _id: {
                    $nin: party.invited || [],
                    $ne: meteor_1.Meteor.userId()
                }
            });
        }
    };
    PartyDetails.prototype.saveParty = function (party) {
        if (meteor_1.Meteor.userId()) {
            parties_ts_1.Parties.update(party._id, {
                $set: {
                    name: party.name,
                    description: party.description,
                    location: party.location
                }
            });
        }
        else {
            alert('Please log in to change this party');
        }
    };
    PartyDetails.prototype.invite = function (user) {
        this.call('invite', this.party._id, user._id, function (error) {
            if (error) {
                alert('Failed to invite due to ${error}');
                return;
            }
            alert('User successfully invited.');
        });
    };
    PartyDetails.prototype.reply = function (rsvp) {
        this.call('reply', this.party._id, rsvp, function (error) {
            if (error) {
                alert('Failed to invite due to ${error}');
            }
            else {
                alert('You successfully replied.');
            }
        });
    };
    Object.defineProperty(PartyDetails.prototype, "isOwner", {
        get: function () {
            if (this.party && this.user) {
                return this.user._id === this.party.owner;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PartyDetails.prototype, "isPublic", {
        get: function () {
            if (this.party) {
                return this.party.public;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PartyDetails.prototype, "isInvited", {
        get: function () {
            if (this.party && this.user) {
                var invited = this.party.invited || [];
                return invited.indexOf(this.user._id) !== -1;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    PartyDetails = __decorate([
        core_1.Component({
            selector: 'party-details',
            templateUrl: '/client/imports/party-details/party-details.html',
            directives: [router_deprecated_1.RouterLink],
            pipes: [pipes_ts_1.DisplayName, pipes_ts_1.UserPartyStatus]
        }),
        angular2_meteor_accounts_ui_1.RequireUser(),
        angular2_meteor_accounts_ui_1.InjectUser(), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams])
    ], PartyDetails);
    return PartyDetails;
}(angular2_meteor_1.MeteorComponent));
exports.PartyDetails = PartyDetails;
//# sourceMappingURL=party-details.js.map
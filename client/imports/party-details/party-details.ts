import {Component} from '@angular/core';
import {RouteParams, RouterLink} from '@angular/router-deprecated';
import {Tracker} from 'meteor/tracker';
import {Meteor} from 'meteor/meteor';
import {RequireUser, InjectUser} from 'angular2-meteor-accounts-ui';
import {MeteorComponent} from 'angular2-meteor';
import {Mongo} from 'meteor/mongo';

import {Parties} from '../../../collections/parties.ts';
import {DisplayName, UserPartyStatus} from '../pipes/pipes.ts';

@Component({
  selector: 'party-details',
  templateUrl: '/client/imports/party-details/party-details.html',
  directives: [RouterLink],
  pipes: [DisplayName, UserPartyStatus]
})
@RequireUser()
@InjectUser()
export class PartyDetails extends MeteorComponent{
  party: Party;
  users: Mongo.Cursor<Object>;
  user: Meteor.User;

  constructor(params: RouteParams) {
    super();
    var partyId = params.get('partyId');

    this.subscribe('party', partyId, () => {
      this.autorun(() => {
        this.party = Parties.findOne(partyId);
        this.getUsers(this.party);
      }, true);
    });

    this.subscribe('uninvited', partyId, () => {
      this.getUsers(this.party);
    }, true);
  }

  getUsers(party: Party) {
    if(party) {
      this.users = Meteor.users.find({
        _id: {
          $nin: party.invited || [],
          $ne: Meteor.userId()
        }
      });
    }
  }

  saveParty(party: Party) {
    if(Meteor.userId()) {
      Parties.update(party._id, {
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
  }

  invite(user: Meteor.User) {
    this.call('invite', this.party._id, user._id, (error) => {
      if(error) {
        alert('Failed to invite due to ${error}');
        return;
      }
      alert('User successfully invited.')
    });
  }

  reply(rsvp: string) {
    this.call('reply', this.party._id, rsvp, (error) => {
      if(error) {
        alert('Failed to invite due to ${error}');
      }
      else{
        alert('You successfully replied.')
      }
    });
  }

  get isOwner(): boolean {
    if(this.party && this.user) {
      return this.user._id === this.party.owner;
    }
    return false;
  }

  get isPublic(): boolean {
    if(this.party) {
      return this.party.public;
    }
    return false;
  }

  get isInvited(): boolean {
    if(this.party && this.user) {
      let invited = this.party.invited || [];
      return invited.indexOf(this.user._id) !== -1;
    }
    return false;
  }
}

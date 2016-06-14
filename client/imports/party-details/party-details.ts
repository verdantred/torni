import {Component} from '@angular/core';
import {RouteParams, RouterLink} from '@angular/router-deprecated';
import {Tracker} from 'meteor/tracker';
import {Meteor} from 'meteor/meteor';
import {RequireUser} from 'angular2-meteor-accounts-ui';
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
export class PartyDetails extends MeteorComponent{
  party: Party;
  users: Mongo.Cursor<Object>;

  constructor(params: RouteParams) {
    super();
    var partyId = params.get('partyId');

    this.subscribe('party', partyId, () => {
      this.party = Parties.findOne(partyId);
    }, true);

    this.subscribe('uninvited', partyId, () => {
      this.users = Meteor.users.find({_id: {$ne: Meteor.userId()}});
    }, true);
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
}

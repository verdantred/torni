import {Component} from '@angular/core';
import {RouteParams, RouterLink} from '@angular/router-deprecated';
import {Tracker} from 'meteor/tracker';
import {Meteor} from 'meteor/meteor';
import {RequireUser} from 'angular2-meteor-accounts-ui';
import {MeteorComponent} from 'angular2-meteor';

import {Parties} from '../../../collections/parties.ts';

@Component({
  selector: 'party-details',
  templateUrl: '/client/imports/party-details/party-details.html',
  directives: [RouterLink]
})
@RequireUser()
export class PartyDetails extends MeteorComponent{
  party: Party;

  constructor(params: RouteParams) {
    super();
    var partyId = params.get('partyId');

    this.subscribe('party', partyId, () => {
      this.party = Parties.findOne(partyId);
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
}

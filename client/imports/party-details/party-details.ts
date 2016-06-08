import {Component, NgZone} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {Tracker} from 'meteor/tracker';
import {RouterLink} from '@angular/router-deprecated';

import {Parties} from '../../../collections/parties.ts';

@Component({
  selector: 'party-details',
  templateUrl: '/client/imports/party-details/party-details.html',
  directives: [RouterLink]
})
export class PartyDetails{
  party: Object;

  constructor(params: RouteParams, ngZone: NgZone) {
    var partyId = params.get('partyId');

    Tracker.autorun(() => {
      ngZone.run(() => {
        this.party = Parties.findOne(partyId);
      });
    });
  }
}

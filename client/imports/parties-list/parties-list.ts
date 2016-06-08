import {Component} from '@angular/core';
import {Mongo} from 'meteor/mongo';
import {RouterLink} from '@angular/router-deprecated';

import {Parties} from '../../../collections/parties';
import {PartiesForm} from '../parties-form/parties-form';

@Component({
  selector: 'parties-list',
  templateUrl: '/client/imports/parties-list/parties-list.html',
  directives: [PartiesForm, RouterLink]
})

export class PartiesList {
  parties: Mongo.Cursor<Object>;

  constructor(){
    this.parties = Parties.find();
  }

  removeParty(party) {
    Parties.remove(party._id);
  }
}

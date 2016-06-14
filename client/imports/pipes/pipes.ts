import 'reflect-metadata';
import {Pipe, PipeTransform} from '@angular/core';
import {Meteor} from 'meteor/meteor';

import {Parties} from '../../../collections/parties.ts';

@Pipe({
  name: 'displayName'
})
export class DisplayName implements PipeTransform {
  transform(user: Meteor.User): string {
    if(!user) {
      return '';
    }

    if(user.username) {
      return user.username;
    }

    if(user.emails) {
      return user.emails[0].address;
    }

    return '';
  }
}

@Pipe({
  name: 'userPartyStatus'
})
export class UserPartyStatus implements PipeTransform {
  transform(party: Party): string {

    if(Meteor.userId() === party.owner) {
      return 'owner';
    }
    else if(party.public) {
      return 'invited (this is a public party)';
    }
    else if(party.invited && (party.invited.indexOf(Meteor.userId()) !== -1)) {
      return 'invited';
    }
    else {
      return 'uninvited';
    }
  }
}

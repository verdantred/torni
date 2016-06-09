import {Parties} from '../collections/parties.ts';
import {Meteor} from 'meteor/meteor';

export function loadParties() {
  if(Parties.find().count() === 0) {
    var parties = [
      {'name': 'Spaghetti-Free Zone',
        'description': 'No spaghetti here',
        'location': 'Palo Alto',
        'owner': Meteor.users.findOne()._id
      },
      {'name': 'SpaghettiFest',
        'description': 'Spaaaaaaaaaaghetti!',
        'location': 'Palo Alto',
        'owner': Meteor.users.findOne()._id
      },
      {'name': 'NoodleFest',
        'description': 'noodlenoodlenoodlenoodle',
        'location': 'San Francisco',
        'owner': Meteor.users.findOne()._id
      }
    ];

    for( var i = 0; i < parties.length; i++) {
      Parties.insert(parties[i]);
    }
  }
}

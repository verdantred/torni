import {Parties} from '../collections/parties.ts';
import {Meteor} from 'meteor/meteor';

export function loadParties() {
  if(Parties.find().count() === 0) {
    var parties = [
      {'name': 'Spaghetti-Free Zone',
        'description': 'No spaghetti here',
        'location': 'Palo Alto',
        'public': true
      },
      {'name': 'SpaghettiFest',
        'description': 'Spaaaaaaaaaaghetti!',
        'location': 'Palo Alto',
        'public': true
      },
      {'name': 'NoodleFest',
        'description': 'noodlenoodlenoodlenoodle',
        'location': 'San Francisco',
        'public': false
      }
    ];

    for( let i = 0; i < parties.length; i++) {
      Parties.insert(parties[i]);
    }

    for(let i = 0; i < 27; i++) {
      Parties.insert({
        name: Fake.sentence(50),
        location: Fake.sentence(10),
        description: Fake.sentence(100),
        public: true
      });
    }
  }
}

import {Parties} from '../collections/parties.ts';

export function loadParties() {
  if(Parties.find().count() === 0) {
    var parties = [
      {'name': 'Spaghetti-Free Zone',
        'description': 'No spaghetti here',
        'location': 'Palo Alto'
      },
      {'name': 'SpaghettiFest',
        'description': 'Spaaaaaaaaaaghetti!',
        'location': 'Palo Alto'
      },
      {'name': 'NoodleFest',
        'description': 'noodlenoodlenoodlenoodle',
        'location': 'San Francisco'
      }
    ];

    for( var i = 0; i < parties.length; i++) {
      Parties.insert(parties[i]);
    }
  }
}

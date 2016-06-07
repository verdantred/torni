import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app',
  templateUrl: '/client/app.html'
})

class Tere {
  parties: Array<Object>;

  constructor(){
    this.parties = [
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
  }
}
bootstrap(Tere);

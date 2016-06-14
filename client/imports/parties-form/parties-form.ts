import 'reflect-metadata';
import {Component} from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import {Meteor} from 'meteor/meteor';
import { Parties } from '../../../collections/parties.ts';

@Component({
  selector: 'parties-form',
  templateUrl: '/client/imports/parties-form/parties-form.html'
})
export class PartiesForm {
  partiesForm: ControlGroup;

  constructor() {
    let fb = new FormBuilder();

    this.partiesForm = fb.group({
      name: ['', Validators.required],
      description: [''],
      location: ['', Validators.required],
      'public': [false]
    });
  }

  addParty(party: Party) {
    if(this.partiesForm.valid) {
      if(Meteor.userId()) {
        Parties.insert(<Party>{
          name: party.name,
          description: party.description,
          location: party.location,
          'public': party.public,
          owner: Meteor.userId(),
          invited: []
        });

        (<Control>this.partiesForm.controls['name']).updateValue('');
        (<Control>this.partiesForm.controls['description']).updateValue('');
        (<Control>this.partiesForm.controls['location']).updateValue('');
        (<Control>this.partiesForm.controls['public']).updateValue(false);

      }
      else {
        alert('Please log in to add a party')
      }

    }
  }
}

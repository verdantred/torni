import {Component} from '@angular/core';
import {Mongo} from 'meteor/mongo';
import {RouterLink} from '@angular/router-deprecated';
import {LoginButtons} from 'angular2-meteor-accounts-ui';
import {MeteorComponent} from 'angular2-meteor';
import {Counts} from 'meteor/tmeasday:publish-counts';
import {PaginationService, PaginatePipe, PaginationControlsCmp} from 'angular2-pagination';

import {Parties} from '../../../collections/parties';
import {PartiesForm} from '../parties-form/parties-form';

@Component({
  selector: 'parties-list',
  viewProviders: [PaginationService],
  templateUrl: '/client/imports/parties-list/parties-list.html',
  directives: [PartiesForm, RouterLink, LoginButtons, PaginationControlsCmp],
  pipes: [PaginatePipe]
})

export class PartiesList extends MeteorComponent {
  parties: Mongo.Cursor<Party>;
  pageSize: number = 10;
  curPage: ReactiveVar<number> = new ReactiveVar<number>(1);
  nameOrder: ReactiveVar<number> = new ReactiveVar<number>(1);
  partiesSize: number = 0;

  constructor(){
    super();

    this.autorun(() => {
      let options = {
        limit: this.pageSize,
        skip: (this.curPage.get() - 1) * this.pageSize,
        sort: {name: this.nameOrder.get()}
      };

      this.subscribe('parties', options, () => {
        this.parties = Parties.find({}, {sort: {name: this.nameOrder.get()}});
      }, true);
    });

    this.autorun(() => {
      this.partiesSize = Counts.get('numberOfParties');
    }, true);
  }

  removeParty(party) {
    Parties.remove(party._id);
  }

  search(value: string) {
    if(value) {
      this.parties = Parties.find({location: value});
    }
    else{
      this.parties = Parties.find();
    }
  }

  changeSortOrder(nameOrder: string) {
    this.nameOrder.set(parseInt(nameOrder));
  }

  onPageChanged(page) {
    this.curPage.set(page);
  }
}

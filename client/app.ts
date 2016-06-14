import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, provide} from '@angular/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import {APP_BASE_HREF} from '@angular/common';

import {PartiesList} from './imports/parties-list/parties-list.ts';
import {PartyDetails} from './imports/party-details/party-details.ts';
import '../collections/methods.ts';


@Component({
  selector: 'app',
  templateUrl: '/client/app.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', as: 'PartiesList', component: PartiesList},
  {path: '/party/:partyId', as: 'PartyDetails', component: PartyDetails}
])
class Tere {}

bootstrap(Tere, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue: '/'})]);

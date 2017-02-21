import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {HrzComponent} from './hrz.component';
import {RaceComponent} from './race/race.component';
import {PersonComponent} from './race/person/person.component';
import {PeopleService} from "./shared/people.service";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HrzComponent,
    RaceComponent,
    PersonComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PeopleService],
  bootstrap: [HrzComponent]
})
export class HrzModule {
}

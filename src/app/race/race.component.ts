import {Component, OnInit, Input} from '@angular/core';
import {PeopleService} from "../shared/people.service";

@Component({
  selector: 'hrz-race',
  templateUrl: './race.component.html',
  styleUrls: ['race.component.scss']
})
export class RaceComponent implements OnInit {

  @Input() public personality;

  public people;

  constructor(public peopleService: PeopleService) {
    this.people = [];
    this.personality = {};
  }

  ngOnInit() {
    this.peopleService.fetch().then(people => this.people = people);
  }

}

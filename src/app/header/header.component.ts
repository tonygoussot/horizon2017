import {Component, OnInit, Input} from '@angular/core';
import {PeopleService} from "../shared/people.service";

@Component({
  selector: 'hrz-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public meta;

  constructor(public peopleService: PeopleService) {
    this.meta = {}
  }

  ngOnInit() {
    this.peopleService.fetchMetaData().then(metadata => this.meta = metadata);
  }

}

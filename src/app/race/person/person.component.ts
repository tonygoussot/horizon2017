import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'hrz-person',
  templateUrl: './person.component.html',
  styleUrls: ['person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() public personality;

  constructor() {
    this.personality = {};
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hrz-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  public people: any[];

  constructor() {
    this.people = [];
  }

  ngOnInit() {
  }

}

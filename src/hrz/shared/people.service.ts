import {Injectable} from '@angular/core';
import {PEOPLE} from "./mocks/people";

@Injectable()
export class PeopleService {

  constructor() {
  }

  fetch(): Promise<any[]> {
    return Promise.resolve(PEOPLE);
  }
}

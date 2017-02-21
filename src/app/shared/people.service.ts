import {Injectable} from '@angular/core';
import {PEOPLE, METADATA} from "./mocks/people";

@Injectable()
export class PeopleService {

  constructor() {
  }

  fetch(): Promise<any[]> {
    return Promise.resolve(PEOPLE);
  }

  fetchMetaData(): Promise<any> {
    return Promise.resolve(METADATA);
  }
}

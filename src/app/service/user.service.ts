import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isUserLoggedIn: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  constructor() {}
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

   logged$ = new BehaviorSubject<boolean>(false);
   
  LogIn(){
    this.logged$.next(true);
  }
  
  LogOut(){
    this.logged$.next(false);
  }
  
  LogState() {
    return this.logged$.asObservable();
  }
  constructor() { }
}

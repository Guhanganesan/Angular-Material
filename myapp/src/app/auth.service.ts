import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(){
    localStorage.setItem('token', "guhan-ganesan0123456789");
    return localStorage.getItem('token');
  }

  
}

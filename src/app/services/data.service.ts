import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http : HttpClient ) { }

  getUsuarios(){
    //De aca obtengo los users
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

}

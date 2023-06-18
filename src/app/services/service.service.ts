import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { RootObject } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  pokedex(){
    return this.http.get<RootObject>('https://pokeapi.co/api/v2/pokemon')
  }
}

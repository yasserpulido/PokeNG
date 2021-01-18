import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../_interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly baseURL: string = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private http: HttpClient) { }

  getPokemon(pokemonName: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.baseURL + pokemonName);
  }
}

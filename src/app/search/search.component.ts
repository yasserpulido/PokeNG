import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../_interfaces/pokemon';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public pokemonName!: string;
  public pokemon$!: Observable<Pokemon>;
  @Output() apiResult: EventEmitter<any> = new EventEmitter();

  constructor(private service: SearchService) { }

  searchPokemon() {
    if (this.pokemonName) {
      this.pokemon$ = this.service.getPokemon(this.pokemonName.toLowerCase().trim());
      this.apiResult.emit(this.pokemon$);
      this.pokemonName = '';
    }
  }
}

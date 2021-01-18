import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './_interfaces/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  recievePokemonResult$!: Observable<Pokemon>;
}

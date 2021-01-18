import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../_interfaces/pokemon';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() pokemon$!: Observable<Pokemon> | null;

  closeCardDetail(){
    this.pokemon$ = null;
  }
}

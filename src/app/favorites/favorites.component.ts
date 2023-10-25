import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavoritesService } from '../favourite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent {
  constructor(private favoritesService: FavoritesService) {}
  
  /* getting the favorites save locally for the favorite services
  so the list automatically updates upon updating and removing
  people from favorites */
  get favorites(): any[] {
    return this.favoritesService.getFavorites();
  }
}

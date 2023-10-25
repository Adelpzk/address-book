import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

/* Service that manges access to favorites list, adding, removing and updating */
export class FavoritesService {
  constructor() {}

  getFavorites(): any[] {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  storeLocally(favorites: any[]) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  addItem(favorites: any[], data: any) {
    const newItem = {
      firstname: data.firstname,
      lastname: data.lastname,
      dob: data.dob,
      cell: data.cell,
      age: data.age,
      email: data.email,
      nat: data.nat,
      country: data.country,
      city: data.city,
      state: data.state,
      lat: data.lat,
      lon: data.lon,
      image_thumbnail: data.image_thumbnail,
      image_large: data.image_large,
      starState: data.starState,
    };
    favorites.push(newItem);
    this.storeLocally(favorites);
  }

  removeItem(name: string, favorites: any[]) {
    const index = favorites.findIndex(
      (item) => item.firstname + ' ' + item.lastname === name
    );
    if (index !== -1) {
      favorites.splice(index, 1);
      this.storeLocally(favorites);
    }
  }

  updateFavorites(favorites: any[]): void {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout'; // for layout features
import { RouterModule } from '@angular/router'; // for routing
import { HomeComponent } from '../home/home.component';
import { ContactsComponent } from '../contacts/contacts.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { NavbarComponent } from './navbar.component';
import { FavoritesComponent } from '../favorites/favorites.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'contacts', redirectTo: '/contacts', pathMatch: 'full' },
      { path: 'contacts', component: ContactsComponent },
      { path: 'favourites', redirectTo: '/favourites', pathMatch: 'full' },
      { path: 'favourites', component: FavoritesComponent },
    ]),
  ],
  exports: [NavbarComponent],
  providers: [],
  bootstrap: [NavbarComponent],
})
export class NavbarModule {}

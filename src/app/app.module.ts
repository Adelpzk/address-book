import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarModule } from './navbar/navbar.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environment/environment';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CachingInterceptor } from 'src/caching.interceptor';
import { UserDetailDialogComponent } from './user-detail-dialog/user-detail-dialog.component';
import { MapComponent } from './map/map.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FavoritesComponent } from './favorites/favorites.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    CardComponent,
    UserDetailDialogComponent,
    MapComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    NavbarModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    LazyLoadImageModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

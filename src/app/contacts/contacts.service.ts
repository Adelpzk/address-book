import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheService } from '../cache.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private baseApiUrl = 'https://randomuser.me/api/';
  private seed = 'nuvalence';

  constructor(private http: HttpClient, private cacheService: CacheService) { }

  /* getting the users from the api and caching the results for performance */
  getUserData(page: number = 1, results: number = 10): Observable<any> {
    const apiUrl = `${this.baseApiUrl}?page=${page}&results=${results}&seed=${this.seed}`;
    
    const cachedResponse = this.cacheService.get(apiUrl);
    if (cachedResponse) {
      return cachedResponse;
    }

    const request = this.http.get<any>(apiUrl).pipe(
      tap(() => {
        this.cacheService.set(apiUrl, request);
      })
    );

    return request;
  }
}

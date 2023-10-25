import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
/* The Service in charge of caching the result of the api call  */
@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache = new Map<string, any>();

  get(key: string): Observable<any> | undefined {
    return this.cache.get(key);
  }

  set(key: string, value: Observable<any>): void {
    this.cache.set(key, value);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RamdomUser } from '../models/RamdomUser';
@Injectable({
  providedIn: 'root',
})
export class RamdomUserService {
  private urlEndpoint = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) {}
  getRamdomUser(): Observable<RamdomUser[]> {
    return this.http
      .get(this.urlEndpoint)
      .pipe(map((response: any) => response.results as RamdomUser[]));
  }
}

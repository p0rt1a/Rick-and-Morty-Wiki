import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getItems(url: string, name?: string) {
    if (name != null) {
      return this.http.get(url + '?name=' + name);
    } else {
      return this.http.get(url);
    }
  }
}

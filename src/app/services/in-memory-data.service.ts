import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const movies = [
      {id: 1, name: "movie 1", description: "Güzel film", imageUrl: "ayla.jpg"},
      {id: 2, name: "movie 2", description: "Güzel film", imageUrl: "ayla.jpg"},
      {id: 3, name: "movie 3", description: "Güzel film", imageUrl: "ayla.jpg"},
      {id: 4, name: "movie 4", description: "Güzel film", imageUrl: "ayla.jpg"},
      {id: 5, name: "movie 5", description: "Güzel film", imageUrl: "ayla.jpg"},
      {id: 6, name: "movie 6", description: "Güzel film", imageUrl: "ayla.jpg"},
      {id: 7, name: "movie 7", description: "Güzel film", imageUrl: "ayla.jpg"},
      {id: 8, name: "movie 8", description: "Güzel film", imageUrl: "ayla.jpg"}
    
  ];
  return {movies};
  }
  constructor() { }
}

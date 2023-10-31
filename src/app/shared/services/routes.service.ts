import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private http: HttpClient) { }

  getRoute() {
    const url = `https://router.project-osrm.org/route/v1/driving/-1.167648,46.140997;-1.183027,46.170092?alternatives=false&annotations=false&steps=true`;
  
    return this.http.get(url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private http: HttpClient) { }

  getRoute() {
    // Construisez l'URL complète en utilisant les coordonnées de début et de fin
    const url = `https://router.project-osrm.org/route/v1/driving/-1.167648,46.140997;-1.176882,46.166885?alternatives=false&annotations=false&steps=true`;
  
    // Utilisez HttpClient pour effectuer la requête GET
    return this.http.get(url);
  }
}

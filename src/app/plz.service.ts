import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlzService {

  private http = inject(HttpClient);

  getCity(plz: string) {
    return this.http.get<any>("https://openplzapi.org/ch/Localities?postalCode=" + plz);
  }
}



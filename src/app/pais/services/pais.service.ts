import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Country } from '../interfaces/pais-intercafe';


@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiURL: string = `https://restcountries.com/v3.1`;

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,flags,population,cca2')
  }

  constructor(private http: HttpClient) { }


  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${termino}?fullText=false`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }


  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${termino}?fullText=false`
    return this.http.get<Country[]>(url, { params: this.httpParams })
  }

  obtenerPaisPorCodigo(id: string): Observable<Country> {
    const url = `${this.apiURL}/alpha?codes=${id}`
    return this.http.get<Country>(url)
  }


  obtenerPaisPorRegion(region: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${region}`
    return this.http.get<Country[]>(url, { params: this.httpParams })
  }


}

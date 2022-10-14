import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais-intercafe';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})

export class PorPaisComponent {

  termino: string = '';
  hayError: Boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: Boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {

    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;


    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        console.log(paises)
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }



  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true

    this.paisService.buscarPais(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0.10),
        (err) => this.paisesSugeridos = []
      )
  }



  buscarSugeridos(termino: string) {
    this.buscar(termino);
  }

}

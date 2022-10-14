import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-intercafe';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',

})
export class PorRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  regionActiva: string = '';
  paises: Country[] = []

  constructor(private paisService: PaisService) { }

  getClasesTailwind(region: string) {
    return (region === this.regionActiva)
      ? 'relative -ml-px inline-flex items-center border border-gray-300 bg-black px-4 py-2 text-sm font-medium text-white'
      : 'relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
  }


  activarRegion(region: string) {

    if (region === this.regionActiva) { return; }

    this.regionActiva = region
    this.paises = []

    this.paisService.obtenerPaisPorRegion(region)
      .subscribe(paises => this.paises = paises)

  }

}

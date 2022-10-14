import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-intercafe';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

  pais!: Country

  constructor(
    private activadRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit() {

    this.activadRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.obtenerPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais[0])

    // this.activadRoute.params
    //   .subscribe(({ id }) => {
    //     console.log(id)

    //     this.paisService.obtenerPaisPorCodigo(id)
    //       .subscribe(pais => {
    //         console.log(pais)
    //       });
    //   });

  }
}
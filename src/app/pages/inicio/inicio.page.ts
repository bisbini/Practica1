import { Component, OnInit } from '@angular/core';

interface Componentes{
  nombre : string
  icono: string
  redirectTo: string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  componentes: Componentes[] = [
    {
      icono: 'alert-outline',
      nombre:'Action-Sheet',
      redirectTo:'/action-sheet'
    },
    {
      icono: 'checkbox-outline',
      nombre:'Check',
      redirectTo:'/check'
    },
    {
      icono: 'list-circle-outline',
      nombre:'Listing-Sliding',
      redirectTo:'/listing-sliding'
    },

  ];

}

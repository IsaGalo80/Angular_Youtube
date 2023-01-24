import { Component, OnInit } from '@angular/core';
// import { ServicioFavoritosService } from '../servicio-favoritos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public listaVideos:Array<any>=[];
  constructor() { }

  ngOnInit(): void {
    // this.servicioFavoritos.diparadorFavoritos.subscribe(
    //   data=>{this.listaVideos.push(data)}
    // )
  }


}

// linea 12 private servicioFavoritos: ServicioFavoritosService
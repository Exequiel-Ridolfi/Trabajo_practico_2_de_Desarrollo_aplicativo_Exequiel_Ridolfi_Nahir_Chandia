import { Component,OnInit } from '@angular/core';
import { ServicioService } from '../services/service.service';
import { Result } from '../interfaces/interfaces'; 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  arraypokemon:Result[]=[]
  constructor(private service:ServicioService) {}
  ngOnInit(){
    this.service.pokedex().subscribe(respuesta=>{
      console.log(respuesta)
      this.arraypokemon=respuesta.results
     })
  }

  }

import { Component,OnInit } from '@angular/core';
import { ServicioService } from '../services/service.service';
import { Result } from '../interfaces/interfaces'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  arraypokemon:Result[]=[]
  constructor(private service:ServicioService, private _router:Router) {}
  ngOnInit(){
    this.service.pokedex().subscribe(respuesta=>{
      console.log(respuesta)
      this.arraypokemon=respuesta.results
     })
  }
  gotoinfo(){
   this._router.navigate(['tabs/masinfo'])
  }

  }

import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/service.service';
import { Result } from '../interfaces/interfaces'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  textobuscar = '';
  arraypokemon: Result[] = [];
  pokemonsFiltrados: Result[] = [];

  constructor(private service: ServicioService, private router: Router) {}

  ngOnInit() {
    this.service.pokedex().subscribe(respuesta => {
      console.log(respuesta);
      this.arraypokemon = respuesta.results;
      this.pokemonsFiltrados = this.arraypokemon;
    });
  }

  buscar() {
    const texto = this.textobuscar.toLowerCase();
    this.pokemonsFiltrados = this.arraypokemon.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(texto);
    });
  }

  gotoinfo() {
    this.router.navigate(['tabs/masinfo']);
  }
}

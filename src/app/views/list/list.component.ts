import { Component } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})



export class ListComponent {

  nameFilter = '';
  selectedPkm = null;

  get pokemonList() {
    return this.pokeapi.pokeList.filter(pokemon => {
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    })
  }

  get pkmSprite() {
    const number = ('000' + this.selectedPkm.number).slice(-3);

    return `//serebii.net/sunmoon/pokemon/${number}.png`;
  }

  constructor(
    private pokeapi: PokeapiService
  ) { }

  ngOnInit() {
    this.pokeapi.listAll();
  }
  selectPokemon(pkm: any) {
    this.selectedPkm = pkm;
  }
}

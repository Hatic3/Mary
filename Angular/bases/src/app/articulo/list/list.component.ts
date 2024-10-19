import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  articulosLst: string[] = ['Batería', 'Filtro', 'Garrafa de Aceite'];
  
  constructor() { }

  ngOnInit(): void {
  }

  eliminaUltArt() {
    
  }

}

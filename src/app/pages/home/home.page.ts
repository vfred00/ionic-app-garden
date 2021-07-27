import { Component, OnInit } from '@angular/core';
import { BackMenu, Option } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private optionsMenu: Option[];

  constructor() {
    this.optionsMenu = [
      {
        name: "Recomendaciones para el cultivo",
        link: "/select-plant",
        parameters: false

      },
      {
        name: "Calculadora de terreno",
        link: "/land-calculator",
        parameters: false
      }
    ];
  }

  getOptionsMenu(): Option[] {
    return this.optionsMenu;
  }

  ngOnInit() {
  }


}
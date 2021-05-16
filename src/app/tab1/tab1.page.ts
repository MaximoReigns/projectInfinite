import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  homes = [
    {
      image: "../../assets/static/dashboard-1.jpeg",
      numberPhase: "1",
      namePhase: "Prelinguistica",
      progress: "18%"
    },
  ]

}

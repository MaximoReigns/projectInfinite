import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slideOpts={
    initialSlide: 0,
    slidePreview: 1,
    centeredSlides: true,
    speed: 400
  }

  slides = [
    {
      imageSrc: "assets/static/logo.png",
      imageAlt: "Peques Logo",
      title: "Impulsa el desarrollo de tu pequeñin",
      subTitle: "Transformando a tu pequeñin del futuro con ❤️️ para el mundo"
    },
    {
      imageSrc: "assets/static/logo.png",
      imageAlt: "Peques Logo",
      title: "No salgas de Casa",
      subTitle: "Instruyelo tu mismo(a) ❤️️"
    },
    {
      imageSrc: "assets/static/logo.png",
      imageAlt: "Peques Logo",
      title: "La curva de Aprendizaje Más Rápida para tu Peque",
      subTitle: "¡Comienza Ahora!"
    }
  ]
}

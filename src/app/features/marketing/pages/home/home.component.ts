
import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {

logos = [
  "/slide/img-slide.jpg",
  "/JPEG/1.jpg",
  "/immo-1.png",
  "/partenaires/om.png",
  "/partenaires/yas.png",
  "/partenaires/wave.png",
];

  scrollLeft(carousel: HTMLElement) {
    carousel.scrollBy({ left: -260, behavior: 'smooth' });
  }

  scrollRight(carousel: HTMLElement) {
    carousel.scrollBy({ left: 260, behavior: 'smooth' });
  }
}

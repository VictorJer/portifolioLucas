import { Component } from '@angular/core';
import { MEDIA } from '../../data/content';
@Component({ selector: 'app-hero', templateUrl: './hero.html', styleUrl: './hero.scss' })
export class HeroComponent {
  readonly media = MEDIA;
}

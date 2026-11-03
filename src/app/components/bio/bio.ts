import { Component } from '@angular/core';
import { MEDIA } from '../../data/content';
@Component({ selector: 'app-bio', templateUrl: './bio.html' })
export class BioComponent {
  readonly media = MEDIA;
}

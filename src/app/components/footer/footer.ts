import { Component } from '@angular/core';
import { CONTACT, MEDIA } from '../../data/content';
@Component({ selector: 'app-footer', templateUrl: './footer.html' })
export class Footer {
  readonly contact = CONTACT;
  readonly media = MEDIA;
  readonly year = new Date().getFullYear();
}

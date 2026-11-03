import { Component, signal } from '@angular/core';
import { MEDIA } from '../../data/content';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  readonly open = signal(false);
  readonly media = MEDIA;
  close(): void {
    this.open.set(false);
  }
  closeAndFocus(button: HTMLButtonElement): void {
    this.close();
    button.focus();
  }
}

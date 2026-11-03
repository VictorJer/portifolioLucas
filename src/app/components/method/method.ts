import { Component } from '@angular/core';
import { METHOD } from '../../data/content';
@Component({ selector: 'app-method', templateUrl: './method.html' })
export class MethodComponent {
  readonly steps = METHOD;
}

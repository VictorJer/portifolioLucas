import { Component } from '@angular/core';
import { TRANSFORMATIONS } from '../../data/content';

@Component({
  selector: 'app-results',
  templateUrl: './results.html',
  styleUrl: './results.scss',
})
export class ResultsComponent {
  readonly transformations = TRANSFORMATIONS;
}

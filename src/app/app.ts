import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { BioComponent } from './components/bio/bio';
import { MethodComponent } from './components/method/method';
import { PricingComponent } from './components/pricing/pricing';
import { Footer } from './components/footer/footer';
import { ResultsComponent } from './components/results/results';
@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    HeroComponent,
    BioComponent,
    MethodComponent,
    ResultsComponent,
    PricingComponent,
    Footer,
  ],
  templateUrl: './app.html',
})
export class App {}

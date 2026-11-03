import { Component } from '@angular/core';
import { PLANS, money, total, saving, monthlySaving, whatsappUrl } from '../../data/content';
@Component({ selector: 'app-pricing', templateUrl: './pricing.html', styleUrl: './pricing.scss' })
export class PricingComponent {
  readonly plans = PLANS;
  readonly money = money;
  readonly total = total;
  readonly saving = saving;
  readonly monthlySaving = monthlySaving;
  readonly whatsappUrl = whatsappUrl;
}

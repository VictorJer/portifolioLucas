import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { App } from './app';
import { CONTACT, PLANS, money, total } from './data/content';

describe('Landing page Lucas Physique', () => {
  const originalContact = { ...CONTACT };
  beforeEach(() => {
    Object.assign(CONTACT, originalContact);
  });
  afterEach(() => {
    Object.assign(CONTACT, originalContact);
  });
  async function render() {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return fixture;
  }
  it('apresenta todas as seções e âncoras válidas', async () => {
    const fixture = await render();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelectorAll('h1')).toHaveLength(1);
    expect(root.querySelectorAll('.plan-card')).toHaveLength(6);
    expect(root.querySelectorAll('.method-card')).toHaveLength(3);
    for (const anchor of root.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
      expect(root.querySelector(anchor.getAttribute('href')!), anchor.textContent!).not.toBeNull();
    }
    expect(root.textContent).not.toContain('Full Stack');
  });
  it('mantém contratação indisponível enquanto faltarem contatos oficiais', async () => {
    CONTACT.whatsapp = '';
    CONTACT.instagram = '';
    const fixture = await render();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelectorAll('button.plan-cta:disabled')).toHaveLength(6);
    expect(root.querySelector('a[href*="wa.me"]')).toBeNull();
    expect(root.textContent).toContain('Instagram oficial em breve');
  });
  it('apresenta comparações completas entre o método e os planos', async () => {
    const fixture = await render();
    const root: HTMLElement = fixture.nativeElement;
    const sections = [...root.querySelectorAll('main section')].map((section) => section.id);
    expect(sections.indexOf('resultados')).toBe(sections.indexOf('metodo') + 1);
    expect(sections.indexOf('planos')).toBe(sections.indexOf('resultados') + 1);
    const images = root.querySelectorAll<HTMLImageElement>('#resultados figure img');
    expect(images).toHaveLength(2);
    expect(images[0].getAttribute('src')).toBe('img/dps.webp');
    expect(images[0].alt).toContain('07/05/2026');
    expect(images[0].alt).toContain('25/10/2026');
    expect(images[1].getAttribute('src')).toBe('img/dps2.webp');
    expect(images[1].alt).toContain('05/09/2026');
    expect(images[1].alt).toContain('24/10/2026');
    for (const image of images) {
      expect(image.getAttribute('loading')).toBe('lazy');
      expect(image.width).toBeGreaterThan(0);
      expect(image.height).toBeGreaterThan(0);
    }
    expect(root.querySelector('#resultados a[href="#planos"]')?.textContent).toContain(
      'Conheça os planos',
    );
    expect(root.querySelector('#resultados')?.getAttribute('aria-labelledby')).toBe(
      'results-title',
    );
  });
  it('fecha o menu ao selecionar Resultados', async () => {
    const fixture = await render();
    const root: HTMLElement = fixture.nativeElement;
    const toggle = root.querySelector<HTMLButtonElement>('.menu-toggle')!;
    toggle.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    root.querySelector<HTMLAnchorElement>('#main-menu a[href="#resultados"]')!.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });
  it('ativa os contatos configurados', async () => {
    expect(CONTACT).toEqual({
      whatsapp: '554988107298',
      instagram: 'https://www.instagram.com/lucasfrancisco_physique/',
    });
    const fixture = await render();
    const root: HTMLElement = fixture.nativeElement;
    const whatsappLinks = root.querySelectorAll<HTMLAnchorElement>('a.plan-cta');
    expect(whatsappLinks).toHaveLength(6);
    for (const [index, link] of [...whatsappLinks].entries()) {
      const plan = PLANS[index];
      const url = new URL(link.href);
      expect(url.origin).toBe('https://wa.me');
      expect(url.pathname).toBe('/554988107298');
      const message = url.searchParams.get('text')!;
      expect(message).toContain(`plano ${plan.name} de ${plan.months} `);
      expect(message).toContain(`${plan.months}x de ${money(plan.installmentCents)}`);
      expect(message).toContain(`total ${money(total(plan))}`);
      expect(message).toContain('Método Evolução 360');
      expect(link.getAttribute('aria-label')).toContain('WhatsApp (abre em nova aba)');
    }
    const instagramLink = root.querySelector<HTMLAnchorElement>(
      'footer a[href="https://www.instagram.com/lucasfrancisco_physique/"]',
    );
    expect(instagramLink).not.toBeNull();
    expect(instagramLink!.getAttribute('aria-label')).toContain('Instagram do Lucas (abre em nova aba)');
    for (const link of [...whatsappLinks, instagramLink!]) {
      expect(link.target).toBe('_blank');
      expect(link.relList.contains('noopener')).toBe(true);
      expect(link.relList.contains('noreferrer')).toBe(true);
    }
    expect(root.querySelector('button.plan-cta')).toBeNull();
    expect(root.textContent).not.toContain('WhatsApp oficial em configuração.');
    expect(root.textContent).not.toContain('Instagram oficial em breve');
  });
  it('abre o menu e fecha depois da escolha de uma seção', async () => {
    const fixture = await render();
    const root: HTMLElement = fixture.nativeElement;
    const toggle = root.querySelector<HTMLButtonElement>('.menu-toggle')!;
    toggle.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    toggle.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    toggle.click();
    await fixture.whenStable();
    root.querySelector<HTMLAnchorElement>('#main-menu a')!.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });
});

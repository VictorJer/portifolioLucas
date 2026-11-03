import { TestBed } from '@angular/core/testing';
import { afterEach, describe, expect, it } from 'vitest';
import { App } from './app';
import { CONTACT } from './data/content';

describe('Landing page Lucas Physique', () => {
  afterEach(() => {
    CONTACT.whatsapp = '';
    CONTACT.instagram = '';
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
    const fixture = await render();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelectorAll('button.plan-cta:disabled')).toHaveLength(6);
    expect(root.querySelector('a[href*="wa.me"]')).toBeNull();
    expect(root.textContent).toContain('Instagram oficial em breve');
  });
  it('ativa os contatos configurados', async () => {
    CONTACT.whatsapp = '5511999999999';
    CONTACT.instagram = 'https://www.instagram.com/exemplo/';
    const fixture = await render();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelectorAll('a[href*="wa.me"]')).toHaveLength(6);
    expect(root.querySelector('a[href="https://www.instagram.com/exemplo/"]')).not.toBeNull();
    expect(root.querySelector('button.plan-cta')).toBeNull();
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

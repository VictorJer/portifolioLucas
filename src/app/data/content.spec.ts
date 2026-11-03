import { describe, expect, it } from 'vitest';
import { PLANS, money, total, monthlySaving, saving, whatsappUrl } from './content';

describe('Planos definidos no SPEC.md', () => {
  it.each([
    ['mensal', 1, 59990, 59990],
    ['trimestral', 3, 54990, 164970],
    ['cinco-meses', 5, 49990, 249950],
    ['semestral', 6, 46990, 281940],
    ['nove-meses', 9, 39990, 359910],
    ['anual', 12, 37000, 444000],
  ])('%s preserva duração, parcela e total', (id, months, cents, sum) => {
    const plan = PLANS.find((item) => item.id === id)!;
    expect(plan.months).toBe(months);
    expect(plan.installmentCents).toBe(cents);
    expect(total(plan)).toBe(sum);
  });
  it('compara o Anual com doze contratações mensais', () => {
    expect(monthlySaving(PLANS[5])).toBe(22990);
    expect(saving(PLANS[5])).toBe(275880);
    expect(saving(PLANS[0])).toBe(0);
    expect(PLANS.filter((plan) => plan.featured).map((plan) => plan.id)).toEqual(['anual']);
  });
  it('formata reais com centavos e separador de milhar', () => {
    expect(money(444000).replace(/\s/g, ' ')).toBe('R$ 4.440,00');
  });
  it.each(['', 'pendente', '+55 (00) 00000-0000', '123'])(
    'não gera contato fictício: %s',
    (number) => {
      expect(whatsappUrl(PLANS[0], number)).toBeNull();
    },
  );
  it.each(PLANS)('identifica o plano $name na mensagem de contratação', (plan) => {
    const url = new URL(whatsappUrl(plan, '5511999999999')!);
    expect(url.origin).toBe('https://wa.me');
    expect(url.pathname).toBe('/5511999999999');
    const text = url.searchParams.get('text')!;
    expect(text).toContain(plan.name);
    expect(text).toContain(`${plan.months}x de ${money(plan.installmentCents)}`);
    expect(text).toContain(`total ${money(total(plan))}`);
    expect(text).toContain('Método Evolução 360');
  });
});

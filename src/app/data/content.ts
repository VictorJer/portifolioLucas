export interface Plan {
  readonly id: string;
  readonly name: string;
  readonly months: number;
  readonly installmentCents: number;
  readonly featured?: boolean;
}

/** Contatos oficiais. WhatsApp com DDI e DDD, apenas dígitos. */
export const CONTACT: { whatsapp: string; instagram: string } = { whatsapp: '', instagram: '' };
/** Caminhos relativos a public/. Preencher somente com materiais oficiais validados. */
export const MEDIA: { hero: string; bio: string; logo: string } = {
  hero: 'img/lucas-francisco.webp',
  bio: '',
  logo: 'img/logo.png',
};

export const PLANS: readonly Plan[] = [
  { id: 'mensal', name: 'Mensal', months: 1, installmentCents: 59990 },
  { id: 'trimestral', name: 'Trimestral', months: 3, installmentCents: 54990 },
  { id: 'cinco-meses', name: '5 meses', months: 5, installmentCents: 49990 },
  { id: 'semestral', name: 'Semestral', months: 6, installmentCents: 46990 },
  { id: 'nove-meses', name: '9 meses', months: 9, installmentCents: 39990 },
  { id: 'anual', name: 'Anual', months: 12, installmentCents: 37000, featured: true },
];
export const METHOD = [
  {
    number: '01',
    label: 'ACOMPANHAMENTO',
    title: 'Protocolo 10D',
    text: 'A cada 10 dias, um novo feedback. Fotos de progresso, atualização de peso e checklist de hábitos para acompanhar sua evolução.',
  },
  {
    number: '02',
    label: 'COMPROMETIMENTO',
    title: 'Hall da Evolução',
    text: 'Ranking bimestral com Top 1 Homem e Top 1 Mulher. O reconhecimento considera comprometimento e resultados visíveis.',
  },
  {
    number: '03',
    label: 'CONQUISTA',
    title: 'Camiseta da Elite',
    text: 'Uma recompensa para alunos com 90 dias ininterruptos e participação ativa. Não é vendida, é conquistada.',
  },
] as const;
export function money(cents: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cents / 100);
}
export function total(plan: Plan): number {
  return plan.months * plan.installmentCents;
}
export function monthlySaving(plan: Plan): number {
  return PLANS[0].installmentCents - plan.installmentCents;
}
export function saving(plan: Plan): number {
  return monthlySaving(plan) * plan.months;
}
export function whatsappUrl(plan: Plan, number: string = CONTACT.whatsapp): string | null {
  if (!/^\d{10,15}$/.test(number)) return null;
  const message = `Olá, Lucas! Tenho interesse no plano ${plan.name} de ${plan.months} ${plan.months === 1 ? 'mês' : 'meses'}: ${plan.months}x de ${money(plan.installmentCents)} (total ${money(total(plan))}). Quero saber como começar no Método Evolução 360.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

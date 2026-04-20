import { getPromotion } from '@/services/api'

export default async function PromoBanner() {
  const promo = await getPromotion()
  if (!promo?.active) return null

  return (
    <div className="rounded-lg border border-border bg-muted px-4 py-3 text-center text-sm">
      <span className="font-medium">{promo.title}</span>
      {' - '}
      <span className="text-muted-foreground">{promo.description}</span>
      {promo.code && (
        <span className="ml-2 rounded bg-accent px-2 py-0.5 font-mono text-xs">{promo.code}</span>
      )}
    </div>
  )
}

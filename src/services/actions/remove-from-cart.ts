'use server'

import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import { removeCartItemApi } from '@/services/api'
import type { ActionState } from '@/services/types'

export async function removeFromCart(
  itemId: string,
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const cookieStore = await cookies()
    const cartToken = cookieStore.get('cart-token')?.value
    if (!cartToken) return { success: false, message: 'No cart found' }

    await removeCartItemApi(cartToken, itemId)
    revalidateTag('cart', 'seconds')
    return { success: true, message: 'Item removed' }
  } catch {
    return { success: false, message: 'Failed to remove item' }
  }
}

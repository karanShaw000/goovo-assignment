'use server'

import { cookies } from 'next/headers'

export async function create(key: "email" | "mobile") {
  const cookieStore = cookies()
  cookieStore.set(key, 'true')
}

import Link from 'next/link'
import { notFound } from "next/navigation"

export const metadata = {
  title: '404',
  robots: 'noindex, nofollow'
}

export default function NotFoundCatchAll() {
  notFound()
  return null
}
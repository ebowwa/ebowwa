// app/layout.tsx
'use client'

import { Logo } from '@pmndrs/branding'
import Overlay from './Overlay'
import './styles.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {children}
        <Overlay />
        <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />
      </body>
    </html>
  )
}
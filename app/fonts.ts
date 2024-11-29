import localFont from 'next/font/local'

export const geistSans = localFont({
  src: './fonts/GeistVF.woff2',
  variable: '--font-geist-sans',
  display: 'swap',
  weight: '100 900',
})

export const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff2',
  variable: '--font-geist-mono',
  display: 'swap',
  weight: '100 900',
})

export const consolas = localFont({
  src: './fonts/CONSOLA.woff2',
  variable: '--font-consolas',
  display: 'swap',
})

export const overusedGrotesk = localFont({
  src: [
    {
      path: './fonts/OverusedGrotesk-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/OverusedGrotesk-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/OverusedGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/OverusedGrotesk-Roman.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/OverusedGrotesk-SemiBold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/OverusedGrotesk-Bold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/OverusedGrotesk-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-overused',
  display: 'swap',
})
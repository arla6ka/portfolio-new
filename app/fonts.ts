import localFont from 'next/font/local'

export const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  display: 'swap',
  weight: '100 900',
})

export const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  display: 'swap',
  weight: '100 900',
})

export const consolas = localFont({
  src: './fonts/CONSOLA.ttf',
  variable: '--font-consolas',
  display: 'swap',
})

export const overusedGrotesk = localFont({
  src: [
    {
      path: './fonts/OverusedGrotesk-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/OverusedGrotesk-Book.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/OverusedGrotesk-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/OverusedGrotesk-Roman.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/OverusedGrotesk-SemiBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/OverusedGrotesk-Bold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/OverusedGrotesk-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-overused',
  display: 'swap',
})
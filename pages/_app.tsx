import { useEffect } from 'react'
import { useRouter } from 'next/router';

import { useAuthStore } from '@/data/store/useAuthStore';
import '@/styles/global.scss'
import type { AppProps } from 'next/app'
import { check } from '@/data/api';

export default function App({ Component, pageProps }: AppProps) {


  return (
    <Component
      {...pageProps}
    />
    
  )
}

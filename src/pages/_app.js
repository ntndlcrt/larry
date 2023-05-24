// import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import Head from 'next/head'

import supabase from '@/utils/supabase/Client'
import AuthListener from '@/utils/supabase/AuthListener'

import '@ionic/react/css/core.css'
import '@ionic/react/css/structure.css'

import '@ionic/react/css/padding.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

// // import '@/styles/globals.css'
import '@/styles/variables.scss'
import '@/styles/app.scss'

export default function App({ Component, pageProps }) {
    return (
        <SessionContextProvider
            supabaseClient={supabase}
            initialSession={pageProps.initialSession}
        >
            <Head>
                <meta charSet="utf-8" />
                <title>Larry</title>
                <meta name="description" content="Your personal web keeper" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AuthListener />
            <Component {...pageProps} />
        </SessionContextProvider>
    )
}

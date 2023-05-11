import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

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
    const [supabase] = useState(() => createBrowserSupabaseClient())

    return (
        <SessionContextProvider
            supabaseClient={supabase}
            initialSession={pageProps.initialSession}
        >
            <AuthListener supabase={supabase} />
            <Component {...pageProps} />
        </SessionContextProvider>
    )
}

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { IonPage } from '@ionic/react'

export default function Login() {
    const supabase = useSupabaseClient()

    return (
        <IonPage>
            <Auth
                providers={['google']}
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                theme="dark"
            />
        </IonPage>
    )
}

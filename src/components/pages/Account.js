import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { IonPage } from '@ionic/react'

import Avatar from '@/components/ui/Avatar'
import Larry from '@/components/ui/Larry'

export default function Account() {
    const user = useUser()
    const supabase = useSupabaseClient()
    const [email, setEmail] = useState(null)
    const [fullName, setFullName] = useState(null)
    const [avatarUrl, setAvatarUrl] = useState(null)

    async function getProfile() {
        try {
            let { data, error, status } = await supabase
                .from('profiles')
                .select(`email, full_name, avatar_url`)
                .eq('id', user.id)
                .single()

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setEmail(data.email)
                setFullName(data.full_name)
                setAvatarUrl(data.avatar_url)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <IonPage>
            <div className="w-full h-full flex flex-col items-center justify-center text-center">
                <Avatar src={avatarUrl} />
                <h1 className="text-20 font-bold mt-2_5 mb-1">
                    Bienvenue {fullName} !
                </h1>
                <p>Vous êtes authentifié avec le compte Google {email}</p>
                <Larry svgId="coffee" />
                <button
                    className="button block mt-3"
                    onClick={async () => await supabase.auth.signOut()}
                >
                    Sign Out
                </button>
            </div>
        </IonPage>
    )
}

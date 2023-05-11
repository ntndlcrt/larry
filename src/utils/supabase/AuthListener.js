import { useEffect } from 'react'
import { useRouter } from 'next/router'

function AuthListener({ supabase }) {
    const router = useRouter()

    async function createProfileIfNotExists(id, email, full_name, avatar_url) {
        // Check if user has a profile
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', id)

        if (error) {
            console.error(error)
            return
        }

        // If the user doesn't have a profile, create one
        if (!data || data.length === 0) {
            const { error } = await supabase.from('profiles').insert([
                {
                    id,
                    email,
                    full_name,
                    avatar_url,
                },
            ])

            if (error) {
                console.error(error)
                return
            }
        }
    }

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN') {
                const { user } = session
                const { email, id, user_metadata } = user
                const { full_name, avatar_url } = user_metadata

                createProfileIfNotExists(id, email, full_name, avatar_url)
            }

            if (event === 'SIGNED_OUT') {
                router.push('/login')
            }
        })
    }, [])

    return null
}

export default AuthListener

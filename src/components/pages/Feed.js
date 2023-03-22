import { IonPage } from '@ionic/react'
import client from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Feed() {
    const [pages, setPages] = useState([])

    useEffect(() => {
        const fetchPages = async () => {
            const { data, error } = await client.from('pages').select('title')

            if (error) {
                console.error(error)
            } else {
                setPages(data)
            }
        }

        fetchPages()
    }, [])

    return (
        <IonPage>
            {pages &&
                pages.map((page) => <div key={page.title}>{page.title}</div>)}
        </IonPage>
    )
}

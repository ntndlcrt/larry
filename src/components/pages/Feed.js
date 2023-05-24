import { IonPage } from '@ionic/react'
import { useEffect, useState } from 'react'
import { useUser } from '@supabase/auth-helpers-react'

import PagesAPI from '@/utils/supabase/API/Pages'
import Page from '@/components/ui/Page'

export default function Feed() {
    const [pages, setPages] = useState([])
    const pagesAPI = new PagesAPI({ user: useUser() })

    useEffect(() => {
        const fetchPages = async () => {
            let pages = await pagesAPI.getPages({ order: true })
            setPages(pages)
        }

        fetchPages()
    }, [])

    return (
        <IonPage>
            <div className="mb-6 bg-black text-white pt-4 pb-2 px-2">
                <h1 className="text-32 font-black mb-0_5">Feed</h1>
                <p className="text-gray-200">
                    Retrouvez toutes vos pages sauvegardées
                </p>
            </div>
            <div className="flex flex-col w-full px-2">
                {pages &&
                    pages.map((page) => <Page key={page.title} {...page} />)}
            </div>
        </IonPage>
    )
}

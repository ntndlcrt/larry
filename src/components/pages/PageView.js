import { IonPage } from '@ionic/react'
import { useEffect, useState } from 'react'
import { FiEdit, FiExternalLink, FiTrash2 } from 'react-icons/fi'
import { useIonRouter } from '@ionic/react'
import { useUser } from '@supabase/auth-helpers-react'

import PagesAPI from '@/utils/supabase/API/Pages'
import formatTimestamp from '@/utils/formatTimestamp'
import browserLink from '@/utils/browserLink'

export default function PageView({ match }) {
    const id = match.params.id
    const pagesAPI = new PagesAPI({ user: useUser() })
    const [page, setPage] = useState()
    const router = useIonRouter()

    useEffect(() => {
        const fetchPage = async () => {
            let page = await pagesAPI.getPage(id)
            setPage(page)
        }

        fetchPage()
    }, [])

    return (
        <IonPage className="bg-black text-white min-h-screen">
            {page && (
                <>
                    <div className="pt-8 pb-4 px-2_5">
                        <div className="w-full aspect-[5/3] relative mb-2">
                            <img
                                className="absolute object-center w-full h-full object-cover"
                                src={page.web_src}
                                alt={page.title}
                            />
                        </div>
                        <h1 className="text-[2.8rem] font-bold mb-0_5">
                            {page?.title}
                        </h1>
                    </div>
                    <div className="w-full pt-3 rounded-tl-[3.2rem] rounded-tr-[3.2rem] text-black bg-white h-full px-2_5">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500 text-13">
                                {formatTimestamp(page.created_at)}
                            </span>
                            <div className="flex items-center">
                                <div
                                    className="mr-2_5"
                                    onClick={() => browserLink(page.url)}
                                >
                                    <FiExternalLink className="text-gray-500 text-24" />
                                </div>
                                <div
                                    className="mr-2_5"
                                    onClick={() => {
                                        router.push(
                                            `/tabs/pages/${id}/edit`,
                                            'root',
                                            'replace'
                                        )
                                    }}
                                >
                                    <FiEdit className="text-gray-500 text-20" />
                                </div>
                                <div>
                                    <FiTrash2
                                        className="text-gray-500 text-24"
                                        onClick={() => {
                                            router.push(
                                                `/tabs/pages/${id}/delete`,
                                                'root',
                                                'replace'
                                            )
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="py-4 my-2 border-b border-t border-gray-100">
                            &quot;{' '}
                            {page.short_desc ??
                                'Pas de description pour le moment'}{' '}
                            &quot;
                        </p>
                        <div className="flex flex-col">
                            <h2 className="text-14 font-medium">
                                Présente dans :
                            </h2>
                        </div>
                    </div>
                </>
            )}
        </IonPage>
    )
}

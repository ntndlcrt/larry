import { FiEdit } from 'react-icons/fi'
import { useIonRouter } from '@ionic/react'

import formatTimestamp from '@/utils/formatTimestamp'

export default function Page({
    id,
    title,
    url,
    web_src,
    short_desc,
    created_at,
}) {
    const router = useIonRouter()

    return (
        <div
            className="w-full pb-2_5 mb-2_5 last:mb-0 border-b border-gray-100 last:border-0 grid grid-cols-3 gap-1_5"
            onClick={() => {
                router.push(`/tabs/pages/${id}`, 'root', 'replace')
            }}
        >
            <div className="aspect-square relative overflow-hidden">
                <img
                    className="absolute w-full h-full object-center object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src={web_src}
                    alt=""
                />
            </div>
            <div className="flex flex-col col-span-2">
                <h2 className="font-bold text-18 leading-[1.1] mb-1">
                    {title}
                </h2>
                <p className="text-gray-700 text-14">{short_desc}</p>
                <div className="flex justify-between align-center w-full mt-auto">
                    <p className="text-gray-500 text-13">
                        {formatTimestamp(created_at)}
                    </p>
                    <div
                        onClick={() => {
                            router.push(
                                `/tabs/pages/${id}/edit`,
                                'root',
                                'replace'
                            )
                        }}
                    >
                        <FiEdit className="text-gray-500 text-24" />
                    </div>
                </div>
            </div>
        </div>
    )
}

import { IonPage } from '@ionic/react'
import { useEffect, useState } from 'react'
import { useUser } from '@supabase/auth-helpers-react'

import PageHeader from '@/components/ui/PageHeader'
import { FormLoader } from '@/components/ui/Loaders'
import PagesAPI from '@/utils/supabase/API/Pages'
import ImagesAPI from '@/utils/supabase/API/Images'

export default function PageEdit({ match }) {
    const pagesAPI = new PagesAPI({ user: useUser() })
    const imagesAPI = new ImagesAPI()
    const [image, setImage] = useState()
    const [page, setPage] = useState()
    const [loading, setLoading] = useState(true)

    const handleImageUpload = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const uploadedImage = event.target.files[0]
            setImage(uploadedImage)
        }
    }

    useEffect(() => {
        const fetchPage = async () => {
            let page = await pagesAPI.getPage(match.params.id)
            setPage(page)
            hideLoader()
        }

        fetchPage()
    }, [])

    const updatePage = () => async (event) => {
        event.preventDefault()

        try {
            setLoading(true)

            let updatedPage = await pagesAPI.updatePage(page.id, {
                title: event.target[1].value,
                short_desc: event.target[2].value,
            })

            await (async () => {
                if (image) {
                    let uploadedImage = await imagesAPI.uploadImage(
                        page.id,
                        image
                    )

                    updatedPage = await pagesAPI.updatePage(page.id, {
                        web_src: uploadedImage.publicUrl,
                    })
                }
            })()

            setPage({
                id: page.id,
                title: event.target[1].value,
                short_desc: event.target[2].value,
                web_src: image ? URL.createObjectURL(image) : page.web_src,
            })

            hideLoader()
        } catch (error) {
            console.error(error)
        }
    }

    const hideLoader = () => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    return (
        <IonPage>
            {!loading ? (
                <>
                    <PageHeader
                        svgId={'coffee'}
                        title={`Éditer la page "${page.title}"`}
                    />
                    <form action="#" onSubmit={updatePage()} className="px-2">
                        <div className="mb-2 flex flex-col">
                            <span>Image :</span>
                            <input
                                id="imageField"
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                hidden
                            />
                            <div
                                className="w-full aspect-[3/2] bg-cover bg-no-repeat bg-center"
                                style={{
                                    backgroundImage: `url(${
                                        image
                                            ? URL.createObjectURL(image)
                                            : page.web_src
                                    })`,
                                }}
                                onClick={() =>
                                    document
                                        .getElementById('imageField')
                                        .click()
                                }
                            />
                        </div>
                        <div className="mb-2 flex flex-col">
                            <span>Titre :</span>
                            <textarea rows="3" defaultValue={page.title} />
                        </div>
                        <div className="mb-2 flex flex-col">
                            <span>Description :</span>
                            <textarea rows="3" defaultValue={page.short_desc} />
                        </div>
                        <input
                            type="submit"
                            value="Enregistrer"
                            className="bg-black text-white px-2 py-1 rounded-md"
                        />
                    </form>
                </>
            ) : (
                <div className="px-2 mt-10">
                    <FormLoader />
                </div>
            )}
        </IonPage>
    )
}

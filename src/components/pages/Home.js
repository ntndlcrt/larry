import { IonPage, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react'
import { useState, useRef, useEffect } from 'react'
import { Raleway } from 'next/font/google'
import classNames from 'classnames'
import { TfiArrowLeft, TfiArrowRight } from 'react-icons/tfi'
import { register } from 'swiper/element/bundle'

import { inlineStyleSwiperPagination } from '@/utils/inlineStyles'
import OnboardingSlide from '@/components/ui/OnboardingSlide'

import 'swiper/css'

const raleway = Raleway({
    weights: [400, 500, 600, 700],
    subsets: ['latin'],
    variable: '--font-raleway',
})

register()

export default function Home() {
    const [firstSlide, setFirstSlide] = useState(true)
    const [lastSlide, setLastSlide] = useState(false)
    const swiperEl = useRef()

    useEffect(() => {
        Object.assign(swiperEl.current, {
            injectStyles: [inlineStyleSwiperPagination],
        })

        swiperEl.current.initialize()

        swiperEl.current.addEventListener('progress', (e) => {
            const [swiper, progress] = e.detail
            setFirstSlide(progress === 0)
            setLastSlide(progress === 1)
        })
    }, [])

    const onboardingSlides = [
        {
            svgId: 'sonar',
            content:
                'Naviguez à la recherche de contenu pertinent pour vos projets',
        },
        {
            svgId: 'shopping',
            content:
                'Enregistrez vos trouvailles, et classez-les selon vos besoins/envies',
        },
        {
            svgId: 'exchanging',
            content:
                'Partagez vos pages/collections et visionnez celles de vos collaborateurs',
        },
        {
            svgId: 'teamwork',
            isFinal: true,
        },
    ]

    return (
        <IonPage className={classNames('bg-white', raleway.className)}>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <swiper-container
                                slides-per-view="1"
                                speed="400"
                                pagination="true"
                                ref={swiperEl}
                                init="false"
                            >
                                {onboardingSlides.map((slide, index) => {
                                    return (
                                        <OnboardingSlide
                                            key={index}
                                            {...slide}
                                        />
                                    )
                                })}
                            </swiper-container>
                            <div className="flex items-center justify-between mx-auto w-3/4">
                                <TfiArrowLeft
                                    className={classNames(
                                        'text-24 transition-all',
                                        firstSlide && 'text-gray-300'
                                    )}
                                    onClick={() => {
                                        !firstSlide &&
                                            swiperEl.current.swiper.slidePrev()
                                    }}
                                />
                                <TfiArrowRight
                                    className={classNames(
                                        'text-24 transition-all',
                                        lastSlide && 'text-gray-300'
                                    )}
                                    onClick={() => {
                                        !lastSlide &&
                                            swiperEl.current.swiper.slideNext()
                                    }}
                                />
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

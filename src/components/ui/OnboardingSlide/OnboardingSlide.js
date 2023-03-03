import { SwiperSlide } from 'swiper/react'

import Larry from '@/components/ui/Larry'

export default function OnboardingSlide({ svgId, content, isFinal = false }) {
    return (
        <SwiperSlide>
            <div className="w-full h-full flex flex-col items-center justify-center text-center">
                <Larry svgId={svgId} />
                {content && (
                    <p className="text-22 leading-[3.6rem] w-4/5 mt-5">
                        {content}
                    </p>
                )}
                {isFinal && <div className="button wide mt-10">Lezgongue</div>}
            </div>
        </SwiperSlide>
    )
}

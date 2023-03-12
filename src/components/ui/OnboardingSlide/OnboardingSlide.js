import { Preferences } from '@capacitor/preferences'

import Larry from '@/components/ui/Larry'

const setHasOnboarded = async () => {
    await Preferences.set({ key: 'hasOnboarded', value: true })
}

export default function OnboardingSlide({ svgId, content, isFinal = false }) {
    return (
        <swiper-slide>
            <div className="w-full h-full flex flex-col items-center justify-center text-center">
                <Larry svgId={svgId} />
                {content && (
                    <p className="text-22 leading-[3.6rem] w-4/5 mt-5">
                        {content}
                    </p>
                )}
                {isFinal && (
                    <button
                        className="button wide mt-10"
                        onClick={() => {
                            setHasOnboarded()
                            location.reload()
                        }}
                    >
                        Lezgongue
                    </button>
                )}
            </div>
        </swiper-slide>
    )
}

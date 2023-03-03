import Button from '@/components/Button/button'
import MySearchComponent from '@/components/Search/search'
import Card from '@/components/Collection/collection'
import Barre from '@/components/Barre/barre'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter();

    return (
        <>
                <h2 className="py-4 flex justify-center text-3xl">
                    My Collection
                </h2>
                <hr className='w-full border-0 border-t border-black pb-3'/>
                <Button text="C'EST PARTI !" onClick={() => console.log('clicked')} />
                    <h3 class="py-6"></h3>   
                <MySearchComponent/>
                <Card title="Cooking" comment="Toutes mes recettes de cuisine" privacyStatus="public" date="Created on 2nd March of 2022"/>
                <Card title="Travel" comment="Mes idées de voyages" privacyStatus="private" date="Created on 24th June of 2021" />
                <Card title="Design" comment="Inspirations" privacyStatus="world" date="Created on 12th April of 2022" />
                <Card title="Dev" comment="A garder" privacyStatus="private" date="Created on 1st January of 2023" />

                <Barre/>
        </>
    )
}

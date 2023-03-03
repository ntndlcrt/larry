import Button from '@/components/Button/button'
import MySearchComponent from '@/components/Search/search'
import CardCollections from '@/components/Card-Collections/card-collections'
import Barre from '@/components/Barre/barre'
import { useState } from 'react';

export default function Home() {
    const [cards, setCards] = useState([
        {
          title: 'Cooking',
          comment: 'Toutes mes recettes de cuisine',
          privacyStatus: 'public',
          date: 'Created on 2nd March of 2022',
        },
        {
          title: 'Dev',
          comment: 'Mes projets de développement',
          privacyStatus: 'private',
          date: 'Created on 3rd March of 2022',
        },
        {
          title: 'Design',
          comment: 'Mes créations graphiques',
          privacyStatus: 'world',
          date: 'Created on 4th March of 2022',
        },
        {
            title: 'Travel',
            comment: 'Mes idées de voyages',
            privacyStatus: 'private',
            date: 'Created on 24th June of 2021',
          },
      ]);
    return (
        <>
                <h2 className="py-4 flex justify-center text-3xl">
                    My Collection
                </h2>
                <hr className='w-full border-0 border-t border-black pb-3'/>
                <div>
                {cards.map((card, index) => (
                <CardCollections
                    key={index}
                    title={card.title} 
                    comment={card.comment} 
                    privacyStatus={card.privacyStatus} 
                    date={card.date}/>))}
                </div>
                <Barre/>
        </>
    )
}

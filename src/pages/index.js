import CardCollections from '@/components/Card-Collections/card-collections'
import Barre from '@/components/Barre/barre'
import { useState } from 'react'
import { GiCook } from 'react-icons/gi'
import { RiCodeView } from 'react-icons/ri'
import { SiAdobeindesign } from 'react-icons/si'
import { SiYourtraveldottv } from 'react-icons/si'


export default function Home() {
    const [cards, setCards] = useState([
        {
          title: 'Cooking',
          comment: 'Toutes mes recettes de cuisine',
          privacyStatus: 'public',
          date: 'Created on 2nd March of 2022',
          image:'https://i.f1g.fr/media/madame/1194x804/sites/default/files/img/2017/01/50-astuces-cuisine.jpg',
        },
        {
          title: 'Dev',
          comment: 'Mes projets de développement',
          privacyStatus: 'private',
          date: 'Created on 3rd March of 2022',
          image:'https://upload.wikimedia.org/wikipedia/commons/c/cc/Circle-icons-dev.svg',
        },
        {
          title: 'Design',
          comment: 'Mes créations graphiques',
          privacyStatus: 'world',
          date: 'Created on 4th March of 2022',
          image:'https://fr.wizcase.com/wp-content/uploads/2020/12/IndESIGN-LOGO.png',
        },
        {
            title: 'Travel',
            comment: 'Mes idées de voyages',
            privacyStatus: 'private',
            date: 'Created on 24th June of 2021',
            image:'https://st2.depositphotos.com/3725083/5485/i/450/depositphotos_54856347-stock-photo-travel-the-world-monument-concept.jpg',
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
                    date={card.date}
                    image={card.image}/>))}
                </div>
                <Barre/>
        </>
    )
}

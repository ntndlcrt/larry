import Barre from '@/components/Barre/barre'
import { useRouter } from 'next/router'
import { MdArrowBackIos } from 'react-icons/md'
import { GiCook } from 'react-icons/gi'
import Collection from '@/components/Collection/collection'
import PrivacyIcon from '@/components/Collection/privacy-icon'
import { useState } from 'react';

export default function Home() {
    const router = useRouter();
    const [collection, setCollection] = useState([
        {
          name: 'Recette de gratin aux courgettes',
          comment: 'à tester mercredi',
          date: 'Added on 2nd March of 2022',
        },
        {
          name: 'Recette de pates à crêpes',
          comment: 'Super recette, enlever le rhum',
          date: 'Added on 3rd March of 2022',
        },
        {
            name: 'Recette de tarte aux pommes',
            comment: "j'ai adoré cette recette très bonne",
            date: 'Added on 4th March of 2022',
        },
        {
            name: "Recette d'un couscous marocain",
            comment: 'à reproduire mais ajouter des épices',
            date: 'Added on 24th June of 2021',

        },
      ]);
    const title = router.query.title;
    const image = router.query.image;


    function handleClick() {
        router.push('/');
      }

    return (
        <>
        <div flex className="flex flex-col justify-between">
             <div className='flex py-4 justify-around'>
                <MdArrowBackIos className='text-3xl mt-2' onClick={handleClick}/>
                <h2 className="flex text-3xl leading-10">
                    {title}
                </h2>
                 <img src={image} className='w-14 h-14 rounded-full'/>
            </div>
            
            <div className='flex flex-col items-center mt-8 mb-3'>
            {collection.map((collection, index) => (
                <Collection
                    key={index}
                    name={collection.name} 
                    comment={collection.comment}
                    date={collection.date}/>))}
            </div>
               <Barre/> 
            
        </div>

        </>
    )
}

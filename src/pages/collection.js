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
          comment: 'à tester',
          date: 'Added on 2nd March of 2022',
        },
        {
          name: 'Recette de pates à crêpes',
          comment: 'Super recette',
          date: 'Added on 3rd March of 2022',
        },
        {
            name: 'Recette de tarte aux pommes',
            comment: 'à tester',
            date: 'Added on 4th March of 2022',
        },
        {
            name: 'Recette d un couscous marocain',
            comment: 'à reproduire',
            date: 'Added on 24th June of 2021',

        },
      ]);
    const title = router.query.title;
    return (
        <>
        <div flex className="flex flex-col justify-between">
             <div className='flex py-4 justify-around'>
                <MdArrowBackIos className='text-2xl'/>
                <h2 className="flex text-3xl">
                    {title}
                </h2>
            
                <GiCook className='text-4xl'/>
            </div>
            
            {collection.map((collection, index) => (
                <Collection
                    key={index}
                    name={collection.name} 
                    comment={collection.comment}
                    date={collection.date}/>))}

            <div className='flex-col'>
               <Barre/> 
            </div>
            
        </div>

        </>
    )
}

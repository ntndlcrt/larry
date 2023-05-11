import Barre from '@/components/Barre/barre'
import { useRouter } from 'next/router'
import { MdArrowBackIos } from 'react-icons/md'
import { GiCook } from 'react-icons/gi'
import Collection from '@/components/Collection/collection'
import PrivacyIcon from '@/components/Collection/privacy-icon'
import { useState } from 'react';

export default function CreateCollection({ title, comment, date, image}) {
    const router = useRouter();

    function handleClick() {
        router.push('/');
      }

    return (
        <>

            <div className="p-3" onClick={handleClick}>
            <div className='flex py-4 justify-around'>
              <MdArrowBackIos className='text-3xl mt-2' onClick={handleClick}/>
              <h2 className="flex text-xl uppercase text-center">
                  Création de votre nouvelle collection
              </h2>
            </div>

              <div className='mt-10 p-4'>
                <h2 className='text-3xl py-4'>Titre de votre collection</h2>
                <input className='text-3xl rounded'>{title}</input>
                <p className='text-xl py-4'>Description de votre collection</p>
                <input className='text-xl rounded'>{comment}</input>
                <p className='text-gray-300 text-xs'>{date}</p>
                  <button>Valider</button>
              </div>
            </div>
        </>
    )
}

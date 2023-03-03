import React from 'react';
import { GiCook } from 'react-icons/gi';
import PrivacyIcon from './privacy-icon';
import { useRouter } from 'next/router';

function CardCollections ({ title, comment,privacyStatus, date, onClick }) {
  const router = useRouter();

  function handleClick() {
    router.push({
      pathname: './collection',
      query: { title: title },
    });
  }
    return (
      <div className="flex justify-between p-3" onClick={handleClick}>
        <div>
          <h2 className='text-3xl'>{title}</h2>
          <p className='text-xl'>{comment}</p>
          <p className='text-gray-300 text-xs'>{date}</p>
            <div className="flex items-center p-1">
              <PrivacyIcon privacyStatus={privacyStatus}/><p className='ml-2 text-gray-400 text-0.5l'>{privacyStatus}</p>
            </div>
            <hr className='w-80'/>
        </div>
        <GiCook className='text-9xl'/>
      </div>
    );
  }
  export default CardCollections;
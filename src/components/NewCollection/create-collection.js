import React from 'react';
import { useRouter } from 'next/router';

function CreateCollection() {
    return (
        return (
            <div className="flex flex-row justify-between p-3" onClick={handleClick}>
              <div>
                <h2 className='text-3xl'>Titre de votre collection</h2>
                <label className='text-3xl'>{title}</label>
                <p className='text-xl'>Description de votre collection</p>
                <label className='text-xl'>{comment}</label>
                <p className='text-gray-300 text-xs'>{date}</p>
                  <hr className='w-72'/>
              </div>
                <img src={image} className='w-20 h-20'/>
            </div>
          );
    );
  }
  export default CreateCollection;
import React from 'react';
import { GiCook } from 'react-icons/gi';
import PrivacyIcon from './privacy-icon';
import { useRouter } from 'next/router';

function Collection ({name, comment, date}) {
  const router = useRouter();

    return (
      <div className="py-3 px-6 m-3 bg-gray-300 w-4/5 rounded">
          <h2 className="text-base uppercase">{name}</h2>
          <p>Commentaire : {comment}</p>
          <p className="text-gray-400 text-xs">{date}</p>
      </div>
    );
  }
  export default Collection;
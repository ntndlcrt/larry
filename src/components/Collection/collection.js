import React from 'react';
import { GiCook } from 'react-icons/gi';
import PrivacyIcon from './privacy-icon';
import { useRouter } from 'next/router';

function Collection ({name, comment, date}) {
  const router = useRouter();

    return (
      <div className="p-3">
          <h2>{name}</h2>
          <p>{comment}</p>
          <p>{date}</p>
      </div>
    );
  }
  export default Collection;
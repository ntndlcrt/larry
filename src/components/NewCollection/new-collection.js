import React from 'react';
import { useRouter } from 'next/router';

function NewCollection() {
  const router = useRouter();

  function handleClick() {
    router.push({
      pathname: './create-collection',
    });
  }

    return (
      <div className="m-3 flex" onClick={handleClick}>
        <img src="add.png" alt="create-new-collection"/>
          <h2 className="m-3 flex justify-center text-xl">Créer une nouvelle collection</h2>
      </div>
    );
  }
  export default NewCollection;
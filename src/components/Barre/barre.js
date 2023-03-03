import { CiHome } from 'react-icons/ci'
import { CiSearch } from 'react-icons/ci'
import { CiUser } from 'react-icons/ci'
import React from 'react'

function Barre() {
    return (
        <div>
            <hr className="w-full border-0 border-t border-black my-1"/>
            <div className="flex justify-around p-3">
                <CiHome className='text-2xl'/>
                <CiSearch className='text-2xl'/>
                <CiUser className='text-2xl'/>
            </div>
        </div>
        
    );
  }

  export default Barre;
  
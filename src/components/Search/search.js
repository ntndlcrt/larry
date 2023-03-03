import { CiSearch } from 'react-icons/ci';

function MySearchComponent() {
    return (
      <div className='flex justify-center'>
        <button className="text-black px-4 py-1 sm:py-3 rounded-lg border flex border-black items-center mb-4">
        <svg className="w-10 mt-2" viewBox="0 0 24 24">
            <CiSearch />
        </svg>
        <input class="w-full px-4 py-2 rounded-lg border-gray-300 bg-transparent focus:outline-none" type="text"/>
        
      </button> 
      </div>

    );
  }

  export default MySearchComponent;

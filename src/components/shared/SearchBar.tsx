import { FiSearch } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';
// import { IoIosArrowDown } from 'react-icons/io';
import Button from '../custom-ui/Button';

const SearchBar = () => {
  return (
    <div className="grid size-full grid-cols-1 gap-10 p-4 md:grid-cols-5">
      <div className="flex items-center gap-3 md:col-span-2">
        <p className="text-lg">
          <FiSearch />
        </p>
        <input
          type="text"
          name=""
          id=""
          className="h-10 w-full border-b-2 border-neutrals-300 bg-transparent outline-none focus:border-neutrals-500"
          placeholder="Job title or keyword"
        />
      </div>
      <div className="flex items-center gap-3 md:col-span-2">
        <p className="text-lg">
          <SlLocationPin />
        </p>
        <input
          type="text"
          name=""
          id=""
          className="h-10 w-full border-b-2 border-neutrals-300 bg-transparent outline-none focus:border-neutrals-500"
          placeholder="Florence, Italy"
        />
      </div>
      <Button size="lg" className="h-full text-lg font-medium">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;

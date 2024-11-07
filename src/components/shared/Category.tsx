import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import DynamicIcon from './DynamicIcon';

const Category = ({ category }: { category: any }) => {
  return (
    <div className="group rounded border p-4 duration-200 ease-linear hover:bg-primary/5">
      <div className="size-12 rounded-full text-4xl duration-200 ease-linear group-hover:text-primary">
        <p>
          <DynamicIcon
            iconFamily={category.iconFamily.trim()}
            icon={category.icon.trim()}
          />
        </p>
      </div>
      <h3 className="mb-3 mt-6 text-xl font-bold group-hover:text-primary">
        {category.name}
      </h3>
      <button className="flex flex-nowrap items-center gap-3 font-medium text-neutrals-600">
        {category.totalJobs} jobs available <HiOutlineArrowNarrowRight />
      </button>
    </div>
  );
};

export default Category;

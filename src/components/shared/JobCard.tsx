import { FaArrowRightLong } from 'react-icons/fa6';
import DynamicIcon from './DynamicIcon';
import { cn } from '@/lib/utils';
import { Skeleton } from '../shadcn-ui/skeleton';

type TCategoryCardProps = {
  category: any;
  className?: string;
  showTotalJob?: boolean;
};
const JobCard = ({
  category,
  className = '',
  showTotalJob = true,
}: TCategoryCardProps) => {
  return (
    <div
      className={cn(
        'group flex cursor-pointer flex-row items-center gap-4 rounded border p-3 duration-200 ease-linear hover:bg-primary/5 md:p-4 lg:flex-col lg:items-start',
        className,
      )}
    >
      <div className="flex size-12 min-w-12 items-center justify-center rounded-full text-4xl duration-200 ease-linear group-hover:text-primary">
        <DynamicIcon
          iconFamily={category.iconFamily.trim()}
          icon={category.icon.trim()}
          fallback={<Skeleton className="size-full" />}
        />
      </div>
      <div className="w-full">
        <h3 className="text-xl font-bold group-hover:text-primary">
          {category.name}
        </h3>
        {showTotalJob && (
          <p className="mt-1 flex w-full flex-nowrap items-center justify-between gap-3 text-sm font-medium text-neutrals-600 lg:mt-3 xl:text-base">
            <span>{category.totalJobs} jobs available</span>{' '}
            <span>
              <FaArrowRightLong className="text-base duration-200 ease-in-out group-hover:-rotate-45" />
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default JobCard;

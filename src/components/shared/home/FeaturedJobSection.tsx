import Button from '@/components/custom-ui/Button';
import Container from '@/components/custom-ui/Container';
import { categories } from '@/constants/categories';
import { FaArrowRightLong } from 'react-icons/fa6';
import JobCard from '../JobCard';

const FeaturedJobSection = () => {
  return (
    <Container className="py-10 md:py-16 xl:py-20">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-extrabold md:text-2xl xl:text-3xl">
          Featured <span className="text-primary">jobs</span>
        </h1>
        <Button
          variant="ghost"
          className="hidden items-center justify-center gap-2 md:flex"
        >
          Show all jobs <FaArrowRightLong />
        </Button>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {categories.slice(0, 15).map((category: any) => (
          <JobCard key={category._id} category={category} />
        ))}
      </div>
      <div className="flex items-center justify-end md:hidden">
        <Button
          variant="ghost"
          className="mt-5 flex items-center justify-center gap-2"
        >
          Show all jobs <FaArrowRightLong />
        </Button>
      </div>
    </Container>
  );
};

export default FeaturedJobSection;

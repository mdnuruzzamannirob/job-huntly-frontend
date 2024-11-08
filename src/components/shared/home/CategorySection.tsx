import Container from '@/components/custom-ui/Container';
import Button from '@/components/custom-ui/Button';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { categories } from '@/constants/categories';
import CategoryCard from '../CategoryCard';

const CategorySection = () => {
  return (
    <Container className="py-10 md:py-16 xl:py-20">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-extrabold md:text-2xl xl:text-3xl">
          Explore by <span className="text-primary">category</span>
        </h1>
        <Button
          variant="ghost"
          className="hidden items-center justify-center gap-2 md:flex"
        >
          Show all category <HiOutlineArrowNarrowRight />
        </Button>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {categories.slice(0, 15).map((category: any) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
      <div className="flex items-center justify-end md:hidden">
        <Button
          variant="ghost"
          className="mt-5 flex items-center justify-center gap-2"
        >
          Show all category <HiOutlineArrowNarrowRight />
        </Button>
      </div>
    </Container>
  );
};

export default CategorySection;

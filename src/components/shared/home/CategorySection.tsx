import Container from '@/components/custom-ui/Container';
import Button from '@/components/custom-ui/Button';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { categories } from '@/constants/categories';
import Category from '../Category';

const CategorySection = () => {
  return (
    <Container className="py-10 md:py-16 xl:py-20">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold">
          Explore by <span className="text-primary">category</span>
        </h1>
        <Button
          variant="ghost"
          className="flex items-center justify-center gap-2"
        >
          Show all category <HiOutlineArrowNarrowRight />
        </Button>
      </div>
      <div className="mt-10 grid grid-cols-5 gap-5">
        {categories.slice(0, 15).map((category: any) => (
          <Category key={category._id} category={category} />
        ))}
      </div>
    </Container>
  );
};

export default CategorySection;

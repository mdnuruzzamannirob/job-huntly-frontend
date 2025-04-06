import BannerSection from '@/components/shared/home/BannerSection';
import CategorySection from '@/components/shared/home/CategorySection';
import CompaniesWeHelpedSection from '@/components/shared/home/CompaniesWeHelpedSection';
import FeaturedJobSection from '@/components/shared/home/FeaturedJobSection';

const HomePage = () => {
  return (
    <>
      <BannerSection />
      <CompaniesWeHelpedSection />
      <CategorySection />
      <FeaturedJobSection />
    </>
  );
};

export default HomePage;

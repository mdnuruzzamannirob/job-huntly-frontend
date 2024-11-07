import BannerSection from '@/components/shared/home/BannerSection';
import CategorySection from '@/components/shared/home/CategorySection';
import CompaniesWeHelpedSection from '@/components/shared/home/CompaniesWeHelpedSection';

const HomePage = () => {
  return (
    <>
      <BannerSection />
      <CompaniesWeHelpedSection />
      <CategorySection />
    </>
  );
};

export default HomePage;

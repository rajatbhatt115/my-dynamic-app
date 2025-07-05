// ✅ About Page — src/pages/About.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchAboutBannerData } from '../features/banner/aboutpagebannerSlice';
import { fetchAboutPageData } from '../features/about/aboutPageSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import AboutPageSection from '../components/AboutPageSection';


const About: React.FC = () => {
  const dispatch = useAppDispatch();
  const { bannerData: aboutbannerData } = useAppSelector((state) => state.aboutbanner);
  const { aboutData } = useAppSelector((state) => state.aboutPage);

  useEffect(() => {
    dispatch(fetchAboutBannerData('about'));
    dispatch(fetchAboutPageData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {aboutbannerData && <Banner {...aboutbannerData} />}
      {aboutData && <AboutPageSection {...aboutData} />}
      <Footer />
    </>
  );
};

export default About;

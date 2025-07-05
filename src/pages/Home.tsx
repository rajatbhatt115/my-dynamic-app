// ✅ src/pages/Home.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchBannerData } from '../features/banner/bannerSlice';
import { fetchHomeAboutData } from '../features/about/homeAboutSlice';
import { fetchTeamData } from '../features/team/teamSlice';
import { fetchFaqData } from '../features/faq/faqSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';
import Team from '../components/Team';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { bannerData } = useAppSelector((state) => state.banner);
  const aboutData = useAppSelector((state) => state.homeAbout);     // ✅ single object
  const teamData = useAppSelector((state) => state.team);           // ✅ single object
  const faqData = useAppSelector((state) => state.faq);             // ✅ single object

  useEffect(() => {
    dispatch(fetchBannerData('home'));
    dispatch(fetchHomeAboutData());
    dispatch(fetchTeamData());
    dispatch(fetchFaqData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {bannerData && <Banner {...bannerData} />}
      {aboutData && <AboutSection {...aboutData} />}
      {teamData && <Team {...teamData} />}                {/* ✅ single object passed */}
      {faqData && <FAQ faqs={faqData.faqs} loading={faqData.loading} />}
      <Footer />
    </>
  );
};

export default Home;

// ✅ 24. src/pages/Contact.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchContactBannerData } from '../features/banner/contactbannerSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const dispatch = useAppDispatch();
  const { bannerData } = useAppSelector((state) => state.contactbanner);

  useEffect(() => {
    dispatch(fetchContactBannerData('contact'));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {bannerData && <Banner {...bannerData} />}
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;

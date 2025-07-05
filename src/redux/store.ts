// ✅ 2. src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import bannerReducer from '../features/banner/bannerSlice';
import homeAboutReducer from '../features/about/homeAboutSlice';
import aboutPageReducer from '../features/about/aboutPageSlice';
import teamReducer from '../features/team/teamSlice';
import faqReducer from '../features/faq/faqSlice';
import contactReducer from '../features/contact/contactSlice';
import aboutbannerReducer from '../features/banner/aboutpagebannerSlice';
import contactbannerReducer from '../features/banner/contactbannerSlice';



export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    homeAbout: homeAboutReducer,
    aboutPage: aboutPageReducer,
    team: teamReducer,
    faq: faqReducer,
    contact: contactReducer,
    aboutbanner: aboutbannerReducer,
    contactbanner: contactbannerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
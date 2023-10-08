import React from 'react';
import OtherNav from '../atoms/OtherNav';
import Footer from '../atoms/Footer';

const MyPageTemplate = () => {
  return (
    <div className="page--layout">
      <OtherNav />
      <div className="text-center">임시 마이페이지입니다</div>
      <Footer />
    </div>
  );
};

export default MyPageTemplate;

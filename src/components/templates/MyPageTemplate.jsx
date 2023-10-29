import React from 'react';
import OtherNav from '../atoms/OtherNav';
import AdminMyPage from './AdminMyPage';
import GuestMyPage from './GuestMyPage';
import StudentMyPage from './StudentMyPage';
import Footer from '../atoms/Footer';

const MyPageTemplate = () => {
  const authority = 3;

  const certification = (author) => {
    /* eslint no-else-return: "error" */
    if (author === 1) {
      return <AdminMyPage />;
    } else if (author === 2) {
      return <StudentMyPage />;
    }
    return <GuestMyPage />;
  };

  return (
    <div className="page--layout">
      <OtherNav />
      <div>{certification(authority)}</div>
      <Footer />
    </div>
  );
};

export default MyPageTemplate;

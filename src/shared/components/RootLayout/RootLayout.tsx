import { Outlet } from 'react-router';

import Footer from 'shared/components/Footer';
import Header from 'shared/components/Header';

import rootLayoutStyles from 'shared/components/RootLayout/RootLayout.module.css';

const RootLayout = () => {
  return (
    <div className={rootLayoutStyles.rootLayout}>
      <Header />
      <main className={rootLayoutStyles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;

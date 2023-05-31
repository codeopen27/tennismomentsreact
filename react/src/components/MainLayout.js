import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet /> {/* Represents children of a route */}
    </>
  );
};

export default MainLayout;
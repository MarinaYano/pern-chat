import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../components/error/ErrorFallback';
import { ErrorInfo } from 'react';

const Layout = () => {
  const onError = (error: Error, info: ErrorInfo) => {
    console.error('Error MEssage: ', error.message);
    console.error('Info Component Stack: ', info.componentStack);
  };
  return (
    <div className="flex">
      {/* <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Navbar />
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <MobileNavbar />
      </Box> */}
      <Navbar />
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError}>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
};

export default Layout;

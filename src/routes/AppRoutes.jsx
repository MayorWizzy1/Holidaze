import { Route, Routes, useLocation } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Layout } from '../components/Layout';
import { useEffect, useState } from 'react';
import { Home } from '../pages/Home';
import { Venue } from '../pages/Venue';
import { AllVenues } from '../pages/AllVenues';
import { TrendingDestination } from '../pages/TrendingDestination';

export function AppRoutes() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="venue/:id" element={<Venue />} />
          <Route path="allVenues" element={<AllVenues />} />
          <Route path="venues/:destination" element={<TrendingDestination />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

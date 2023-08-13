import React, {useState, useEffect} from 'react';
import NavigationPage from './NavigationPage';
import LoadingPage from './LoadingPage';

const MainPage = () => {
  const [component, setComponent] = useState(<LoadingPage />);

  useEffect(() => {
    setTimeout(() => {
      setComponent(<NavigationPage />);
    }, 2000);
  }, []);

  return component;
};

export default MainPage;

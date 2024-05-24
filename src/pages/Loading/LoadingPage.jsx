import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1); // Возвращает пользователя на предыдущую страницу
    }, 200);

    return () => clearTimeout(timer); // Очищает таймер при размонтировании компонента
  }, [navigate]);

  return (
    <div className="loading-page flex justify-center h-screen text-white mt-48">
      <h1 className="text-2xl">Loading...</h1>
    </div>
  );
};

export default LoadingPage;

import { FC, Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
};

import { FC, Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Test } from '../Components/Test';
import { HomePage } from './HomePage/HomePage';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
};

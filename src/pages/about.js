import React from 'react';
import {
  Routes, Link, Route, useLocation,
} from 'react-router-dom';
import SinglePage from './single-page';

const About = () => {
  const { pathname } = useLocation();
  // const { id } = useParams();
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to={`${pathname}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${pathname}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Routes>
        <Route path={`${pathname}/:slug`} element={<SinglePage />} />
      </Routes>
    </div>
  );
};

export default About;

import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { title } = props;
  return (
    <h1 className="text-muted display-2">{title}</h1>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => <h2 className="section-title">{title}</h2>;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;

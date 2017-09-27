import React from 'react';

const Button = ({text, link}) => {
  return <a className="btn btn-default" href={link} role="button">{text}</a>;
}

export default Button;
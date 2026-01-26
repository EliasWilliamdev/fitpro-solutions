import React from 'react';

import logo from './assets/img/FITPRO branco.png';

const FitproLogo: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src={logo} 
    alt="FITPRO Logo" 
    className={className || "h-12 w-auto"} 
    style={{ objectFit: 'contain' }}
  />
);

export default FitproLogo;

import React from 'react';

const FitproLogo: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src="/assets/img/FITPRO%20branco.png" 
    alt="FITPRO Logo" 
    className={className || "h-12 w-auto"} 
    style={{ objectFit: 'contain' }}
  />
);

export default FitproLogo;

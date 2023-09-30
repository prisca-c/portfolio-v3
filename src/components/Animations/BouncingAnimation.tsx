import React from 'react';

type BouncingAnimationProps = {
  children: React.ReactNode;
};

const BouncingAnimation = ({ children }: BouncingAnimationProps) => {
  return <span className={'bouncing-animation'}>{children}</span>;
};

export default BouncingAnimation;

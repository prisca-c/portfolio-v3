import React from 'react';

type BouncingAnimationProps = {
  children: React.ReactNode;
};

const BouncingAnimation = ({ children }: BouncingAnimationProps) => {
  return <div className={'bouncing-animation'}>{children}</div>;
};

export default BouncingAnimation;

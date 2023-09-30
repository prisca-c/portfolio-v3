import React, { useEffect } from 'react';

type FadeInUpAnimationProps = {
  children: React.ReactNode;
  time?: number;
  classKey: string;
};

const FadeInUpAnimation = ({
  children,
  time = 1000,
  classKey,
}: FadeInUpAnimationProps) => {
  const customKey = 'fade-in-up-animation-for--' + classKey;

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(`.${customKey}`);
      elements.forEach((element) => {
        element.classList.add('fade-in-up-animation--active');
      });
    }, time);

    return () => clearTimeout(timer);
  }, [customKey, time]);

  return <div className={'fade-in-up-animation ' + customKey}>{children}</div>;
};

export default FadeInUpAnimation;

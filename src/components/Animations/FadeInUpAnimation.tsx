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
  const customKey = 'fade-in-animation-for--' + classKey;

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(`.${customKey}`);
      elements.forEach((element) => {
        element.classList.add('fade-in-animation--active');
      });
    }, time);
    console.log('fade in up animation');

    return () => clearTimeout(timer);
  }, [time]);

  return <div className={'fade-in-animation ' + customKey}>{children}</div>;
};

export default FadeInUpAnimation;

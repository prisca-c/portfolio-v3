import React, { useEffect } from 'react';

type FadeInAnimationProps = {
  children: React.ReactNode;
  classKey: string;
  time?: number;
};

const FadeInAnimation = ({
  children,
  time = 1000,
  classKey,
}: FadeInAnimationProps) => {
  const customKey = 'fade-in-animation-for--' + classKey;

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(`.${customKey}`);
      elements.forEach((element) => {
        element.classList.add('fade-in-animation--active');
      });
    }, time);

    return () => clearTimeout(timer);
  }, [customKey, time]);

  return <div className={'fade-in-animation ' + customKey}>{children}</div>;
};

export default FadeInAnimation;

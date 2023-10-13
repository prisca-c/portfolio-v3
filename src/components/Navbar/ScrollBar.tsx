import { useEffect } from 'react';

const ScrollBar = () => {
  const sectionsList = document.querySelectorAll<HTMLBaseElement>(
    '.landing-page__section',
  );
  const handleScroll = () => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const gradientPercentage = (scrolled / scrollable) * 100;

    const handle = document.getElementById('handle');
    if (handle) {
      handle.style.background = `linear-gradient(
          to bottom, 
          var(--color-secondary) 0%, 
          var(--color-secondary) ${gradientPercentage}%, 
          #242424 ${gradientPercentage}%, 
          #242424 100%
        )`;
    }
  };

  {
    /*TODO: Handle circle position*/
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="scrollbar">
      <div className="handle" id={'handle'}>
        {[...sectionsList].map((_, index) => {
          return <div className="handle__circle" key={index}></div>;
        })}
      </div>
    </div>
  );
};

export default ScrollBar;

import { useEffect } from 'react';
import sections from '../../datas/sections.json';

const ScrollBar = () => {
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleCircleStyle = (index: number) => {
    return {
      top: `${(index * 100) / (sections.length - 1)}%`,
    };
  };

  const handleCircleOnClick = (name: string) => {
    const section = document.getElementById(name);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="scrollbar">
      <div className="handle" id={'handle'}>
        {sections.map((_, index) => {
          return (
            <div
              className={`handle__circle handle__circle-${index}`}
              key={index}
              style={handleCircleStyle(index)}
              onClick={() => handleCircleOnClick(sections[index].name)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScrollBar;

import HeaderTitle from './HeaderTitle.tsx';
import FadeInAnimation from '../Animations/FadeInAnimation.tsx';
import BouncingAnimation from '../Animations/BouncingAnimation.tsx';

const Header = () => {
  const techResume = [
    'React',
    'Vue',
    'AdonisJS',
    'Laravel',
    'TypeScript',
    '{ . . . }',
  ];

  return (
    <div className={'header'}>
      <HeaderTitle />
      <FadeInAnimation classKey={'resume'} time={3700}>
        <h2 className={'header__resume'}>
          <span className={'header__resume-main'}>
            Full Stack Developer
            <span className={'header__resume-tech'}>
              {techResume.map((tech, index) => {
                return (
                  <span className={'header__resume-tech-item'} key={index}>
                    {tech}
                    {techResume.length - 1 !== index && (
                      <span className={'text-secondary'}> • </span>
                    )}
                  </span>
                );
              })}
            </span>
          </span>

          {/*<span className={'divider'}></span>*/}
        </h2>
        <p className={'header__resume-scroll'}>
          <span className={'header__resume-scroll-sub-1'}>
            Open to new opportunities
          </span>
          <span className={'header__resume-scroll-sub-2'}>Scroll down</span>
          <BouncingAnimation>
            <span className={'header__resume-arrow'}>↓</span>
          </BouncingAnimation>
        </p>
      </FadeInAnimation>
    </div>
  );
};

export default Header;

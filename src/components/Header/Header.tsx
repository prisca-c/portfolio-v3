import HeaderTitle from './HeaderTitle.tsx';
import FadeInAnimation from '../Animations/FadeInAnimation.tsx';
import BouncingAnimation from '../Animations/BouncingAnimation.tsx';

const Header = () => {
  return (
    <div className={'header'}>
      <HeaderTitle />
      <FadeInAnimation classKey={'resume'} time={3700}>
        <h2 className={'header__resume'}>
          <span className={'header__resume-main'}>
            Full Stack Developer
            <span className={'header__resume-tech'}>
              React • Vue • AdonisJS • Laravel • TypeScript • &#123; . . .
              &#125;
            </span>
          </span>

          {/*<span className={'divider'}></span>*/}
        </h2>
        <p className={'header__resume-scroll'}>
          Wanna know more ?
          <br />
          Scroll down
          <br />
          <BouncingAnimation>
            <span className={'header__resume-arrow'}>↓</span>
          </BouncingAnimation>
        </p>
      </FadeInAnimation>
    </div>
  );
};

export default Header;

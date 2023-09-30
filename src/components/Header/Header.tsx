import HeaderText from './HeaderText.tsx';
import FadeInAnimation from '../Animations/FadeInAnimation.tsx';
import BouncingAnimation from '../Animations/BouncingAnimation.tsx';

const Header = () => {
  return (
    <div className={'header'}>
      <HeaderText />
      <FadeInAnimation classKey={'resume'} time={3700}>
        <h2 className={'header__resume'}>
          <span className={'header__resume-main'}>
            Full Stack Developer
            <span className={'header__resume-tech'}>
              React • Vue • AdonisJS • Laravel • TypeScript
            </span>
          </span>

          <span className={'divider'}></span>
          <span className={'header__resume-scroll'}>
            Wanna know more ?
            <br />
            Scroll down
            <br />
            <BouncingAnimation>
              <span className={'header__resume-arrow'}>↓</span>
            </BouncingAnimation>
          </span>
        </h2>
      </FadeInAnimation>
    </div>
  );
};

export default Header;

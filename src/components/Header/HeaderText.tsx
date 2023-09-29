import LetterUpAnimation from '../Animations/LetterUpAnimation.tsx';
import FadeInUpAnimation from '../Animations/FadeInUpAnimation.tsx';

const headerText = () => {
  const words: string[] = ['Prisca', 'CASTANIER'];

  return (
    <h1 className={'header__title'}>
      <FadeInUpAnimation time={800} classKey={'first'}>
        <span className={'header__title__first'}>
          {words[0].split('').map((letter, index) => {
            return <LetterUpAnimation letter={letter} key={letter + index} />;
          })}
        </span>{' '}
      </FadeInUpAnimation>
      <FadeInUpAnimation time={1500} classKey={'second'}>
        <span className={'header__title__second'}>
          {words[1].split('').map((letter, index) => {
            return <LetterUpAnimation letter={letter} key={letter + index} />;
          })}
        </span>
      </FadeInUpAnimation>
    </h1>
  );
};

export default headerText;

import LetterUpAnimation from '../Animations/LetterUpAnimation.tsx';
import FadeInUpAnimation from '../Animations/FadeInUpAnimation.tsx';

const headerText = () => {
  const words: string[] = ['Prisca', 'CASTANIER'];

  return (
    <h1 className={'header__title'}>
      <span className={'header__title__first'}>
        {words[0].split('').map((letter, index) => {
          return (
            <FadeInUpAnimation
              classKey={index + letter}
              key={letter + index}
              time={index * 350}
            >
              <LetterUpAnimation letter={letter} />
            </FadeInUpAnimation>
          );
        })}
      </span>{' '}
      <FadeInUpAnimation time={2800} classKey={'second'}>
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

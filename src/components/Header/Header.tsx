import LetterUpAnimation from './LetterUpAnimation.tsx';

const Header = () => {
  const words: string[] = ['Prisca', 'CASTANIER'];

  return (
    <div className={'header'}>
      <h1 className={'header__title'}>
        <span className={'header__title__first'}>
          {words[0].split('').map((letter, index) => {
            return <LetterUpAnimation letter={letter} key={letter + index} />;
          })}
        </span>{' '}
        <span className={'header__title__second'}>
          {words[1].split('').map((letter, index) => {
            return <LetterUpAnimation letter={letter} key={letter + index} />;
          })}
        </span>
      </h1>
    </div>
  );
};

export default Header;

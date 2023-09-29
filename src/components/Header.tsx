import React from 'react';

const Header = () => {
  const letterMoveUpMouseEnter = (event: React.MouseEvent<HTMLSpanElement>) => {
    const letter = event.currentTarget;
    letter.classList.add('header__title__word--up');

    const index = Array.from(letter.parentElement!.children).indexOf(letter);

    index / 2 === 0
      ? letter.classList.add('header__title__word--rotate-even')
      : letter.classList.add('header__title__word--rotate-odd');
  };

  const letterMoveUpMouseLeave = (event: React.MouseEvent<HTMLSpanElement>) => {
    const letter = event.currentTarget;
    letter.classList.remove('header__title__word--up');

    const index = Array.from(letter.parentElement!.children).indexOf(letter);

    index / 2 === 0
      ? letter.classList.remove('header__title__word--rotate-even')
      : letter.classList.remove('header__title__word--rotate-odd');
  };

  const words: string[] = ['Prisca', 'CASTANIER'];

  return (
    <div className={'header'}>
      <h1 className={'header__title'}>
        <span className={'header__title__first'}>
          {words[0].split('').map((letter, index) => {
            return (
              <span
                className={'header__title__word'}
                key={letter + index}
                onMouseEnter={letterMoveUpMouseEnter}
                onMouseLeave={letterMoveUpMouseLeave}
              >
                {letter}
              </span>
            );
          })}
        </span>{' '}
        <span className={'header__title__second'}>
          {words[1].split('').map((letter, index) => {
            return (
              <span
                className={'header__title__word'}
                key={letter + index}
                onMouseEnter={letterMoveUpMouseEnter}
                onMouseLeave={letterMoveUpMouseLeave}
              >
                {letter}
              </span>
            );
          })}
        </span>
      </h1>
    </div>
  );
};

export default Header;

import React from 'react';

type LetterUpAnimationProps = {
  letter: string;
};

const LetterUpAnimation = ({ letter }: LetterUpAnimationProps) => {
  const letterMoveUpMouseEnter = (event: React.MouseEvent<HTMLSpanElement>) => {
    const letter = event.currentTarget.children[0];
    const letterBox = event.currentTarget;
    letter.classList.add('letter-up__word--up');

    const index = Array.from(letterBox.parentElement!.children).indexOf(
      letterBox,
    );

    index % 2 === 0
      ? letter.classList.add('letter-up__word--rotate-even')
      : letter.classList.add('letter-up__word--rotate-odd');
  };

  const letterMoveUpMouseLeave = (event: React.MouseEvent<HTMLSpanElement>) => {
    const letter = event.currentTarget.children[0];
    const letterBox = event.currentTarget;
    letter.classList.remove('letter-up__word--up');

    const index = Array.from(letterBox.parentElement!.children).indexOf(
      letterBox,
    );

    index % 2 === 0
      ? letter.classList.remove('letter-up__word--rotate-even')
      : letter.classList.remove('letter-up__word--rotate-odd');
  };

  return (
    <span
      className={'letter-up__box'}
      onMouseEnter={letterMoveUpMouseEnter}
      onMouseLeave={letterMoveUpMouseLeave}
    >
      <span className={'letter-up__word'}>{letter}</span>
    </span>
  );
};

export default LetterUpAnimation;

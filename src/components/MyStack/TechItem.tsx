import { TechTypes } from '../../Types/TechTypes.ts';

type TechItemProps = {
  title: string;
  techs: TechTypes[];
};

const TechItem = ({ title, techs }: TechItemProps) => {
  return (
    <div className={'my-stack__list'}>
      <h2 className={'my-stack__list-title'}>{title}</h2>
      <div className={'my-stack__tech'}>
        {techs.map((tech, index) => {
          return (
            <div className={'my-stack__tech__item'} key={index}>
              <article className={'my-stack__tech__item-logo-box'}>
                <img
                  className={'my-stack__tech__item-logo'}
                  src={tech.logo}
                  alt={tech.name}
                />
              </article>
              <p className={'my-stack__tech__item-name'}>{tech.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechItem;

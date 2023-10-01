import techList from '../../datas/tech_list.json';
import TechItem from './TechItem.tsx';
const MyStack = () => {
  const { front, back, languages } = techList;
  const title = {
    front: 'Frontend',
    back: 'Backend',
    languages: 'Languages',
  };

  return (
    <div className={'my-stack'}>
      <h2 className={'my-stack__title'}>I work with</h2>
      <div className={'my-stack__container'}>
        <TechItem title={title.front} techs={front} />
        <TechItem title={title.back} techs={back} />
        <TechItem title={title.languages} techs={languages} />
      </div>
    </div>
  );
};

export default MyStack;

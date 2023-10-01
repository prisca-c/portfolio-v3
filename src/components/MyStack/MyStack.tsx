import techList from '../../datas/tech_list.json';
import TechItem from './TechItem.tsx';
const MyStack = () => {
  const { front, back, languages, css } = techList;
  const title = {
    front: 'Frontend',
    back: 'Backend',
    languages: 'Languages',
    css: 'CSS',
  };

  return (
    <div className={'my-stack'}>
      <h2 className={'my-stack__title'}>My toolbox</h2>
      <div className={'my-stack__container'}>
        <TechItem title={title.front} techs={front} />
        <TechItem title={title.back} techs={back} />
        <TechItem title={title.languages} techs={languages} />
        <TechItem title={title.css} techs={css} />
      </div>
    </div>
  );
};

export default MyStack;

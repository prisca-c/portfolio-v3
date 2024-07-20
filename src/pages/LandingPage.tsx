import Header from '../components/Header/Header.tsx';
import MyStack from '../components/MyStack/MyStack.tsx';
import MyProjects from '../components/MyProjects/MyProjects.tsx';
import ScrollBar from '../components/Navbar/ScrollBar.tsx';
import sections from '../datas/sections.json';

const LandingPage = () => {
  return (
    <div className={'landing-page'}>
      <ScrollBar />
      {sections.map((section, index) => {
        return (
          <section
            className={'landing-page__section'}
            key={index}
            id={section.name}
          >
            {section.class === 'header' && <Header />}
            {section.class === 'my-stack' && <MyStack />}
            {section.class === 'my-projects' && <MyProjects />}
          </section>
        );
      })}
    </div>
  );
};

export default LandingPage;

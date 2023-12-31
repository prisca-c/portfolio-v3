import Header from '../components/Header/Header.tsx';
import MyStack from '../components/MyStack/MyStack.tsx';
import MyProjects from '../components/MyProjects/MyProjects.tsx';
import ScrollBar from '../components/Navbar/ScrollBar.tsx';

const LandingPage = () => {
  return (
    <div className={'landing-page'}>
      <ScrollBar />
      <section className={'landing-page__section'}>
        <Header />
      </section>
      <section className={'landing-page__section'}>
        <MyStack />
      </section>
      <section className={'landing-page__section'}>
        <MyProjects />
      </section>
    </div>
  );
};

export default LandingPage;

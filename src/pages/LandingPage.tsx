import Header from '../components/Header/Header.tsx';
import MyStack from '../components/MyStack/MyStack.tsx';
const LandingPage = () => {
  return (
    <div className={'landing-page'}>
      <section className={'landing-page__section'}>
        <Header />
      </section>
      <section className={'landing-page__section'}>
        <MyStack />
      </section>
    </div>
  );
};

export default LandingPage;

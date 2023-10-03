import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import LandingPage from '../pages/LandingPage.tsx';
import App from '../App.tsx';
import Header from '../components/Header/Header.tsx';
import MyStack from '../components/MyStack/MyStack.tsx';
import TechItem from '../components/MyStack/TechItem.tsx';
import techs from '../datas/tech_list.json';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/MyStack">
        <MyStack />
      </ComponentPreview>
      <ComponentPreview path="/LandingPage">
        <LandingPage />
      </ComponentPreview>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
      <ComponentPreview path="/Header">
        <Header />
      </ComponentPreview>
      <ComponentPreview path="/TechItem">
        <TechItem title={'Front'} techs={techs.front} />
      </ComponentPreview>
      <ComponentPreview path="/ComponentPreviews">
        <ComponentPreviews />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;

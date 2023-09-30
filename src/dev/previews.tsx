import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import LandingPage from '../pages/LandingPage.tsx';
import App from '../App.tsx';

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
    </Previews>
  );
};

export default ComponentPreviews;

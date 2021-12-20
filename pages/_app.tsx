import React from 'react';
import { AppHead } from '@layouts/AppLayout/AppHead';
import { AppContainer } from '@layouts/AppLayout/AppContainer';

interface Prop {
  Component: React.ElementType;
  pageProps: any;
}

const App = ({ Component, pageProps }: Prop) => {
  return (
    <>
      <AppHead />
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </>
  );
};

export default App;

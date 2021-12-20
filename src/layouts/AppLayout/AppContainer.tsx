import React, { ReactElement } from 'react';
import classNames from 'classnames';
import AppHeader from '@layouts/AppLayout/AppHeader';
import AppFooter from '@layouts/AppLayout/AppFooter';
import { AppGutter } from '@layouts/AppStyle/AppGutter';
import { GlobalStyle } from '@layouts/AppStyle/GlobalStyle';

interface Prop {
  children: ReactElement | ReactElement[];
  className?: string;
}
export const AppContainer = ({ children, className }: Prop) => {
  return (
    <div className={classNames('container', className)}>
      <GlobalStyle />
      <AppHeader />
      <AppGutter>{children}</AppGutter>
      <AppFooter />
    </div>
  );
};

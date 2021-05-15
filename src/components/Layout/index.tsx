import { IProps } from 'helper/interfaces';
import Header from '../Header';
import { LayoutWrapper, Footer } from './style';

const Layout = ({ children }: IProps) => (
  <div>
    <Header />
    <LayoutWrapper>
      {children}
      <Footer>© 2021 Suno Movies. All rights reserved.</Footer>
    </LayoutWrapper>
  </div>
);

export default Layout;

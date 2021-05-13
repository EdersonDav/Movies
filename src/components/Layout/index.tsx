import { IProps } from 'helper/interfaces';
import Header from '../Header';
import { LayoutWrapper } from './style';

const Layout = ({ children }: IProps) => (
  <div>
    <Header />
    <LayoutWrapper>{children}</LayoutWrapper>
  </div>
);

export default Layout;

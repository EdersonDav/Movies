import { IProps } from 'helper/interfaces';
import Header from '../Header';

const Layout = ({ children }: IProps) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
);

export default Layout;

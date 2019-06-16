import Head from './Head';
import Navbar from './Navbar';

const Layout = (props) => (
  <div>
    <Head/>
    <Navbar/>
    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Layout;
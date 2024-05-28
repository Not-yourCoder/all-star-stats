import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import { color } from '../constants/colors';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div className="grid grid-cols-[125px_1fr] grid-rows-[auto_1fr] h-screen">
      <div className="row-span-2" style={{ background: color.primary_bg, borderRight: "2px solid #2F3538 " }}>
        <Sidebar />
      </div>
      <div style={{ background: color.primary_bg, borderBottom: "2px solid #2F3538" }}>
        <Header />
      </div>
      <div className="overflow-y-auto p-10" style={{ background: color.primary_bg }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

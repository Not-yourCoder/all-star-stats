import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';

type Props = {}

const Layout = (props: Props) => {
  return (
    <div className="grid grid-cols-[120px_1fr] grid-rows-[auto_1fr] h-screen">
      <div className="row-span-2">
        <Sidebar />
      </div>
      <div className="bg-gray-800">
        <Header />
      </div>
      <div className="overflow-y-auto bg-red-800">
        <Content />

      </div>
    </div>
  );
}

export default Layout;

import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import { color } from '../constants/colors';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const Layout = () => {
  toast.custom((t) => (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 rounded-full"
              src="https://i.pinimg.com/564x/44/db/20/44db207eafac187d37a1f057b7d705e7.jpg"
              alt=""
            />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">
              Arya
            </p>
            <p className="mt-1 text-sm text-gray-500">
              This project is still under development.
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  ))
  return (
    <>
      <Toaster />
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

    </>
  );
}

export default Layout;

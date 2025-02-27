import Navbar from '../shared/Navbar';
import Sidebar from '../shared/Sidebar';

export default function UserLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar userType="patient" />
      <div className="flex">
        <Sidebar userType="patient" />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
import Navbar from '../shared/Navbar';
import Sidebar from '../shared/Sidebar';

export default function HospitalLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar userType="hospital" />
      <div className="flex">
        <Sidebar userType="hospital" />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
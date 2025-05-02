import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-slate-200 justify-center items-center">
    <div className="w-full max-w-md p-6 contianer bg-white rounded-2xl shadow-2xl" >
      <h2 className="mb-6">404 - Page Not Found</h2>
      <Link to="/" className="bg-blue-800 text-white mt-3 w-full p-2 rounded-full hover:bg-blue-900 cursor-pointer" >Go back to the Home Page</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
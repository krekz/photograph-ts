import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold text-center">404 Page Not Found</h1>
      <p>Looks like you navigate to page that doesn't exist !</p>
      <Link to="/" className="bg-blue-500 p-3 text-center rounded-md">
        Back to Home
      </Link>
    </div>
  );
};

export default Error404;

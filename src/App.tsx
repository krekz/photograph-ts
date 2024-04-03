import { RouterProvider } from "react-router-dom";
import { router } from "./routes.js";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

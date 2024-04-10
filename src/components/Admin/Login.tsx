import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DarkTheme, LightTheme } from "../ThemeButton";
import useThemeSwitch from "@/hooks/useThemeSwitch";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { handleThemeSwitch, theme } = useThemeSwitch();

  const handleNoSubmit = (e:React.MouseEvent ) => {
    e.preventDefault();
    toast.error("Action not allowed", {
      position: "top-center",
      hideProgressBar: true,
      autoClose: 1000,
      theme: theme === "light" ? "light" : "dark",
    });
  };

  return (
    <>
      <ToastContainer stacked pauseOnHover={false} />
      <div className="flex flex-col items-center justify-center h-screen bg-background dark:bg-background">
        <div className="relative dark:bg-background border dark:border-border dark:text-primary p-8 rounded-lg  w-96">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            Admin Login
          </h1>
          <div
            className="absolute top-8 right-10 cursor-pointer"
            onClick={(handleThemeSwitch)}
          >
            {theme === "light" ? <DarkTheme /> : <LightTheme />}
          </div>
          <form className="space-y-4">
            <Input type="text" placeholder="Username" required />
            <Input type="password" placeholder="Password" required />
            <Button onClick={handleNoSubmit} className="w-full">Log in</Button>
          </form>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Don't have an account?{" "}
            <button
              className="text-blue-500 hover:underline"
              onClick={handleNoSubmit}
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

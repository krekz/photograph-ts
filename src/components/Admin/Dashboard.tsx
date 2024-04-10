import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col items-center justify-center">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <h1>Dashboard</h1>
          <p>Dashboard content here</p>
        </header>
      </div>
    </div>
  );
};

export default Dashboard;

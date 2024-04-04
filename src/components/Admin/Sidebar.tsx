const Sidebar = () => {
  return (
    <div className="absolute top-0 bg-zinc-500 p-5 min-h-screen w-72">
      <ul className="flex flex-col gap-5 justify-center items-center">
        <li>Upload</li>
        <li>Edit</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;

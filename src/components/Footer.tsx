const Footer = () => {
  return (
    <footer>
      <div className=" bg-zinc-800 p-5 text-white text-center">
        <h6 className="text-lg">
          &copy; {new Date().getFullYear()} Photograph
        </h6>
      </div>
    </footer>
  );
};

export default Footer;

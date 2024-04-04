import { Link } from "react-router-dom";

type BackProps = {
  urlPath: string;
};

const Back = ({ urlPath }: BackProps) => {
  return (
    <Link className="absolute lg:left-64" to={`/${urlPath}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8l-4 4 4 4M16 12H9" />
      </svg>
    </Link>
  );
};

export default Back;

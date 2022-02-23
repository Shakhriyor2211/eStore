import { useResolvedPath } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { Link } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link style={{ color: match ? "lightgray " : "none" }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};
export default CustomLink;

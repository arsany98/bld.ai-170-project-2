import { Link } from "react-router-dom";

export default function getInstructorsNames(instructors, link) {
  let names;
  if (instructors)
    names = instructors.map((i, idx) => (
      <span key={i.url}>
        {link ? (
          <Link to="#" className={link}>
            {i.title}
          </Link>
        ) : (
          i.title
        )}
        {idx < instructors.length - 1 ? ", " : ""}
      </span>
    ));
  return names;
}

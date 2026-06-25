import { NavLink } from "react-router";
import Figure from "./Figure";

function Nav({ data, onChangeMode }) {
  return (
    <nav>
      <ul>
        {data.map(d => (
          <li
            key={d.id}
            onClick={e => {
              e.preventDefault();
              onChangeMode(d.id);
            }}
          >
            <NavLink to={d.id}>{d.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

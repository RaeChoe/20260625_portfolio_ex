import { NavLink } from "react-router";

function Nav({ id, data, onChangeMode }) {
  return (
    <nav>
      <ul className="nav flex-column nav-pills gap-2 p-2">
        {data.map(d => (
          <li key={d.id} className="nav-item">
            <NavLink
              to={`/${d.id}`}
              onClick={e => {
                onChangeMode(d.id);
              }}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {d.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

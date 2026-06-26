import { NavLink } from "react-router";

function Nav({ data, activeId, onChangeMode }) {
  return (
    <nav>
      <ul className="nav nav-pills gap-2 p-2">
        {data.map(d => (
          <li
            key={d.id}
            className="nav-item"
            onClick={e => {
              e.preventDefault();
              onChangeMode(d.id);
            }}
          >
            <button
              className={activeId === d.id ? "nav-link active" : "nav-link"}
              aria-current={activeId === d.id ? true : false}
            >
              {d.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;


import { NavLink } from "react-router";

const links = [
  { path: "/", label: "Dashboard" },
  { path: "/menu", label: "Menu Management" },
  { path: "/orders", label: "Orders" },
  { path: "/tables", label: "Tables" },
  { path: "/reservations", label: "Reservations" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Restaurant MS</h2>

      <nav>
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;

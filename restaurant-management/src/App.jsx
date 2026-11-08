
import { Routes, Route } from "react-router";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Placeholder from "./pages/Placeholder";

function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/menu"
            element={<Placeholder title="Menu Management" />}
          />

          <Route
            path="/orders"
            element={<Placeholder title="Order Management" />}
          />

          <Route
            path="/tables"
            element={<Placeholder title="Table Management" />}
          />

          <Route
            path="/reservations"
            element={<Placeholder title="Reservations" />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import AppRoutes from "@/routes";
import NeonCursor from "./components/ui/NeonCursor";

function App() {
  return (
    <div className="relative">
      <NeonCursor />
      <AppRoutes />
    </div>
  );
}

export default App;

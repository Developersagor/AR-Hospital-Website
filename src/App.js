import "./App.css";
import Home from "./components/Home/Home";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Home></Home>
      </AuthProvider>
    </div>
  );
}

export default App;

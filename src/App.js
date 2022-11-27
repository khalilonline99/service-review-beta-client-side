import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes";

function App() {
  return (
    <div className="App container mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import AIQATool from "./pages/AIQATool";
import Help from "./pages/Help";
import Sent from "./pages/Sentiment";
import TabSec from "./components/Tab";
import Proceed from "./components/Proceed";
import Test from "./components/Test";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="aitool" element={<AIQATool/>} />
          <Route path="help" element = {<Help/>}/>
          <Route path="testpage" element={<TabSec/>}>
            <Route path="proceed" element={<Proceed />} />
            <Route path="test" element={<Test/>} />
            <Route path="hr" element={<Sent/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

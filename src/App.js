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
import EditQuestions from "./components/EditQuestions";
import Dashboard from "./components/Dashboard";
import CheckTests from "./components/CheckTests";
import Notifications from "./components/Notifications";
import HR from "./pages/HR";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AddJobs from "./pages/AddJobs";
import SetQuestions from "./pages/SetQuestions";
import JobAdd from "./components/JobAdd";
import Resume from "./components/Resume";
import Candidates from "./components/Candidates";



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
          <Route path="questions" element = {<EditQuestions/>}/>
          <Route path="admin" element ={<AdminLogin/>}/>
          <Route path="dashboard2" element={<AdminDashboard/>}/>
          <Route path="setquestions" element={<SetQuestions/>}/>
          <Route path="addjobs" element={<AddJobs/>}/>
          <Route path="checktests" element = {<CheckTests/>}/>
          <Route path="notifications" element={<Notifications/>}/>
          <Route path="jobadd" element={<JobAdd/>}/>
          <Route path="dashboard" element = {<Dashboard/>}/>
          <Route path ="resume" element={<Resume/>}/>
          <Route path="showcand" element={<Candidates/>}/>
          <Route path="testpage" element={<TabSec/>}>
            <Route path="proceed" element={<Proceed />} />
            <Route path="test" element={<Test/>} />
            <Route path="apt" element={<Sent/>}/>
            <Route path="hr" element={<HR/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

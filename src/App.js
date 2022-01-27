import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import ShareExperience from './Pages/ShareExperience/ShareExperience';
import SingleBlog from './Pages/SingleBlog/SingleBlog';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import DbLogin from './Pages/DbLogin/DbLogin';
import AddABlog from './Pages/Dashboard/AddABlog/AddABlog';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            
            <Route exact path="/login" element={<Login />}></Route>

              <Route exact path="/db-login" element={<DbLogin />}>
                </Route>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route exact path={`/dashboard/add-article`} element={<AddABlog />}>
                </Route>
                <Route path={`/dashboard/manage-article`} element={<DbLogin />}>
                </Route>
                <Route path={`/dashboard/make-admin`} element={<MakeAdmin />}>
                </Route>
              </Route>
            <Route path={`blogs/:blogId`} element={<SingleBlog />}></Route>
            <Route exact path="/addblog" element={<ShareExperience />}></Route>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
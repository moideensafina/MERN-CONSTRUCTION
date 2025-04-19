
import {Route,BrowserRouter as Router ,Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import './App.css';
import store from './store'
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Login from './components/Login';
import ProtectedRoute from './components/route/ProtectedRoute';
import { loadUser } from './actions/userAction';
import { useEffect } from 'react';
import {ToastContainer} from 'react-toastify';
import UpdateProject from './components/admin/UpdateProject';
import 'react-toastify/dist/ReactToastify.css';
import ProjectList from './components/admin/ProjectList';
import CreateProject from './components/admin/CreateProject';
import { loadPackage } from './actions/projectAction';
import UpdatePackage from './components/admin/UpdatePackage';
function App() {
  useEffect(()=>{

    store.dispatch(loadUser)
    store.dispatch(loadPackage)

  },[])
  return (
    <Router>
      <div className="App">
        <Header/>
        <ToastContainer theme='dark'/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={ <Projects/> }/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/turbo/admin/login' element={<Login/>}/>

          <Route path='/admin/projects' element={<ProtectedRoute ><ProjectList/> </ProtectedRoute> } />
          <Route path='/admin/project/create' element={<ProtectedRoute ><CreateProject/> </ProtectedRoute> } />
          <Route path='/admin/project/:id' element={ <ProtectedRoute ><UpdateProject/> </ProtectedRoute> } />
          <Route path='/admin/package/:id' element={ <ProtectedRoute ><UpdatePackage/> </ProtectedRoute> } />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}


export default App;


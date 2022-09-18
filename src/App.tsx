import { Container } from 'react-bootstrap';
import k8data from "../src/data/K8Data.json"
import dockerData from "../src/data/dockerData.json"
import JsData from "../src/data/JSData.json"

import K8sPage from './pages/K8Page';
import DockerPage from './pages/DockerPage';
import JSCode from './pages/JSCodePage';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import JSCodePage from './pages/JSCodePage';
function App() {
  return (

    <>
      <div className="App">
        <Navbar />
        <Container className='bg-default text-center' id='app'>
          <Routes>
            <Route path='/' element={<K8sPage data={k8data} />}> </Route>
            <Route path='/k8' element={<K8sPage data={k8data} />}> </Route>
            <Route path='/docker' element={<DockerPage data={dockerData} />}> </Route>
            <Route path='/js' element={<JSCodePage data={JsData} />}> </Route>
          </Routes>
        </Container>
      </div>
    </>
  );
}

export default App;

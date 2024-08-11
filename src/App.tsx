import { Container } from 'react-bootstrap';
import k8data from '../src/data/K8Data.json';
import dockerData from '../src/data/dockerData.json';
import { JsData } from './data/JSData';

import K8sPage from './pages/K8Page';
import DockerPage from './pages/DockerPage';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import JSCodePage from './pages/JSCodePage';
import DesignPatternsPage from './pages/DesignPatterns';
import { designPatterns } from './data/designPatterns';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Container className='bg-default text-center' id='app'>
        <Routes>
          <Route path='/' element={<K8sPage data={k8data} />}></Route>
          <Route path='/k8' element={<K8sPage data={k8data} />}></Route>
          <Route
            path='/docker'
            element={<DockerPage data={dockerData} />}
          ></Route>
          <Route path='/js' element={<JSCodePage data={JsData} />}></Route>
          <Route
            path='/design-patterns'
            element={<DesignPatternsPage data={designPatterns} />}
          ></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AddCreator from './pages/AddCreator.jsx';
import EditCreator from './pages/EditCreator.jsx';
import ShowCreators from './pages/ShowCreators.jsx';
import ViewCreator from './pages/ViewCreator.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          
          <Route path="/Home" element={<App />} />

          <Route path="/Create" element={<AddCreator/>}/>

          <Route path="/Creators" element={<ShowCreators/>}/>

          <Route path="/Post/:id" element={<ViewCreator/>} />

          <Route path="/Edit/:id" element={<EditCreator />} />

          <Route path="/View/:id" element={<ViewCreator />} />

          <Route path="/" element={<App />} />

        </Routes>
      </BrowserRouter>
  </StrictMode>,
)

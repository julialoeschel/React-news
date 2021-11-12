import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddThing from './pages/AddThing/AddThing';
import Dashboard from './pages/Dashboard/Dashboard';
import Stuff from './pages/Stuff/Stuff';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="stuff">
          <Route path=":userId" element={<Stuff />} />
        </Route>
        <Route path="/add" element={<AddThing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

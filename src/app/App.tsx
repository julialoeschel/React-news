import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './components/Card/Card';
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

<Card
  title={'Title'}
  description={
    'lorem ipsum und so lalalalala lorem lorem Bum Bum lorem ipsum und so lalalalala lorem lorem Bum Bum'
  }
  TagEntry={['Brunhilde', 'Tilda', 'Wolfgang', 'Lessie']}
/>;

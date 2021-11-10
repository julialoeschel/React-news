import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './components/Card/Card';
import Title from './components/Title/Title';
import Stuff from './pages/Stuff/Stuff';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Title>Überschrift</Title>
      <Card
        title={'Title'}
        description={
          'lorem ipsum und so lalalalala lorem lorem Bum Bum lorem ipsum und so lalalalala lorem lorem Bum Bum'
        }
        showDetail={true}
        TagEntry={['Brunhilde', 'Tilda', 'Wolfgang', 'Lessie']}
      />
      <Routes>
        <Route path="/" element={<p>Main</p>} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/motivation" element={<p>Motivation</p>} />

        <Route path="/stuff">
          <Route path=":userId" element={<Stuff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

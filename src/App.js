import React from 'react';
import DataList from './DataList';

function App() {
  const data = [{ name: 'Birçe' }];

  return (
    <div>
      <DataList title="Veri Listesi" data={data} text="Merhaba, React!" number={26} />
    </div>
  );
}

export default App;

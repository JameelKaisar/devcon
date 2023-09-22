import { useState, useEffect } from 'react';

let base_url = 'http://localhost:3001';
if (process.env.REACT_APP_CODESPACE_NAME) {
  base_url = process.env.REACT_APP_CODESPACE_VISITS_URL;
}
let visits_url = base_url + '/';

function App() {
  const [visits, setVisits] = useState('');

  useEffect(() => {
    fetch(visits_url)
      .then(response => response.json())
      .then(data => setVisits(data.visits))
      .catch(error => console.error('Error fetching visits:', error));
  }, []);

  return (
    <div className="App">
      <p>Visits: {visits}</p>
    </div>
  );
}

export default App;

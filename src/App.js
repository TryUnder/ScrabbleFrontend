import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://liternikbackend.azurewebsites.net/api/test")  // Pobiera JSON z backendu
      .then((response) => setData(response.text()))
      .catch((error) => console.error("Błąd:", error));
  }, []);

  return (
    <div>
      <h1>Test połączenia React ↔ .NET</h1>
      {data ? (
        <div>
          <p><strong>Message from Agusia:</strong> {data}</p>
        </div>
      ) : (
        <p>Ładowanie...</p>
      )}
    </div>
  );
}

export default App;
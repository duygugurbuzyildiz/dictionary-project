import React from "react";
import SearchEngine from "./SearchEngine";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <header className="App-header">
          <SearchEngine />
        </header>
      </div>
    </div>
  );
}

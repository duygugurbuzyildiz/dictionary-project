import React from "react";
import SearchEngine from "./SearchEngine";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <header className="App-header">
          <img src="https://kids.wordsmyth.net/we/images/kids_book.gif" alt="dictionary" className="mb-5" />
          <SearchEngine />
        </header>
        <small ><p className="mt-3">This project was coded by Duygu Gurbuz Yildiz and is <a href="https://github.com/duygugurbuzyildiz/dictionary-project" target="_blank" rel="noreferrer">open-sourced on GitHub</a> and <a href="https://eager-elion-290893.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a></p></small>
      </div>
    </div>
  );
}

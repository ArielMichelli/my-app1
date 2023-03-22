import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a la Clase 7</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container__cat">
          <img className="cat" src="https://media.tenor.com/29Ok5pc0ivAAAAAd/gatinho-gato.gif"></img>
          <img src="https://media.tenor.com/8wBCqZH60U8AAAAC/computer-cat.gif"></img>
          <img src="https://media.licdn.com/dms/image/D4D22AQEbS2NL6ga2ow/feedshare-shrink_2048_1536/0/1674762628320?e=2147483647&v=beta&t=bNHtAfaV62uQxXtrjOw9tUxAIAN2fvtU4l7oWJ2qDng"></img>
        </div>
      </header>
    </div>
  );
}

export default App;

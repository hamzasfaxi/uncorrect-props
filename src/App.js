import Profilecomp from './profil/profilecomp'
import './App.css';

 
 
function App() {
  const bio="i'm a JS full stack student at GOMYCODE "
  const prof="unemployed for the moment"
  const fullName="Hamza Sfaxi"
 
  function handleClick() {
    alert("my name is Hamza")
  }

  return (
    <div className="App" style={{textAlign:'center'}}>
      <header className="App-header">
        <Profilecomp fullName={fullName} bio={bio} prof={prof}  handleClick={handleClick}>
        <img src="/download.png" className="imageprofil" alt="profil"></img>
          </Profilecomp>
      </header>
    </div>
  );
}

export default App;

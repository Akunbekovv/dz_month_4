import './App.css';
function App() {
  return (
    <div className="App">
        <Zero name='Maks'/>
        <Zero name='Bayas'/>
        <Zero name='Akzhol'/>
        <Zero name='Baitik'/>
        <Zero name='Nurs'/>
    </div>
  );
}


const Zero = (props) => {
    return (
        <div>
            <h2>Salam Aleikum,  {props.name}</h2>
        </div>
    );
};


export default App;

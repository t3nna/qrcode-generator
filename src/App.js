// import './styles/styles'
import Navbar from "./components/navbar/Navbar";
import './styles/index.scss'
import ColorPicker from "./components/colorPicker/ColorPicker";
import Main from "./main/Main";


function App() {
  return (
    <div className="app">
      <Navbar/>
        <Main/>
        {/*<ColorPicker/>*/}
    </div>
  );
}

export default App;

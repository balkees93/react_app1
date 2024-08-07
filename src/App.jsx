import "./App.css";

import Hobbies from "./componentes/Hoppies/Hobbies";
import PersonalData from "./componentes/PersonalData/PersonalData";

function App() {
  return (
    <>
      <h1 className="name">Balkees Mohamed Salah</h1>
      <h2 className="title">Front end developer</h2>

      <PersonalData></PersonalData>
      <Hobbies></Hobbies>
    </>
  );
}

export default App;

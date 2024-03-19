import "./App.css";
import LineChart from "./components/LineChart/LineChart";
import DaisyKhalaNav from "./components/NavBar/DaisyKhalaNav";
import MyResponsiveNav from "./components/NavBar/MyResponsiveNav";
import PriceOption from "./components/PriceOption/PriceOption";

function App() {
  return (
    <>
      <DaisyKhalaNav></DaisyKhalaNav>
      <h1>My price option</h1>
      <h1>This is my responsive nav</h1>
      <MyResponsiveNav></MyResponsiveNav>
      <PriceOption></PriceOption>
      <LineChart></LineChart>
    </>
  );
}

export default App;

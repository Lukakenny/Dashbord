import "./App.css";
import DashboardComponent from "./Components/Dashboard/DashboardComponent";
import SideBarComponent from "./Components/SideBar/SideBarComponent";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <SideBarComponent />
        <DashboardComponent />
      </div>
    </>
  );
}

export default App;

import CarForm from "./components/carForm";
import CarList from "./components/carList";
import CarSearch from "./components/carSearch";
import CarTotal from "./components/carTotal";

function App() {
  return <div className="container is-fluid">
          <CarForm />
          <CarSearch />
          <CarList />
          <CarTotal />
        </div>
}

export default App;

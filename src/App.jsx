import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet} from "react-router-dom"
 

function App() {
  return (
      <div className="app">
        
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
  );
}

export default App;

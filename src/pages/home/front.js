// import "./App.css";
// import ApplyJob from "./components/fApplyJob";

import BannerSection from "../../components/front/BannerSection";
import CurrentOpening from "../../components/front/CurrentOpening";
import Footer from "../../components/front/Footer";

import Navbar from "../../components/front/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <BannerSection />
      
        <CurrentOpening />
      <Footer/>

    </div>
  );
}

export default App;
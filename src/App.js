import NavBar from './Components/1NavBar';
import Shipment from './Components/2Shipment';
import ShipmentDetails from './Components/3ShipmentDetails'; 
import 'bootstrap/dist/css/bootstrap.css';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TranslationAR from "./Translation.json";


function App() {

  i18n.use(initReactI18next).init({
    resources: {
      ar: {
        translation: TranslationAR
      }
    },
    lng: "ar",
    fallbackLng: "en"
  });



  return (
    <div className="App">
        <NavBar/>
        <Shipment/>
        <ShipmentDetails/> 
    </div>
  );
}

export default App;

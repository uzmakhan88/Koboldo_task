import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrendingBanner from './components/TrendingBanner/TrendingBanner';
import ThirdBox from './components/ThirdBox/ThirdBox';
import Boxes from './components/Boxes/Boxes';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App" style={{backgroundColor:"#E5E4E2"}}>
      
     <Header />
     <br />
     <TrendingBanner/>
     
     <div className="flex">
      <div className="su">
      <ThirdBox/>
      </div>
      <div className="box">
        <div className="cla">
        <Boxes/>
        </div>
        <div className="cla_00">
          <Footer/>
        </div>
      </div>

     </div>
     
    </div>
  );
}

export default App;

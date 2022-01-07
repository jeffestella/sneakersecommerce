import './App.css';
import Navbar from './Navbar';
import PhotoBox from './PhotoBox';
import ProductInfo from './ProductInfo';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <PhotoBox />
      <ProductInfo 
        manufacturer="Sneaker Company" 
        name="Fall Limited Edition Sneakers" 
        blurb="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
        priceCurrent="$125.00"
        discount="50%"
        priceOriginal="$250.00"
      />
    </div>
  );
}

export default App;

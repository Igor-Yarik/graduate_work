import './App.css';
import Login from './containers/login';
import Products from './containers/products';
import ProductsPrev from './containers/products_prev';
import ProductCard from './containers/product_card';

function App() {
  return (    

    <div className="app">
        <Login />
        <Products />
        <ProductsPrev />
        <ProductCard />
    </div>
  );
}

export default App;

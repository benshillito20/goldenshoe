import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Shop from './components/Shop'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={ <Shop/> }></Route>
          <Route path="products/:product-name"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

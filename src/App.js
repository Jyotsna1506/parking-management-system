import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataBase from './Components/DataBase';
import Add from './Components/Add';

function App() {
  return (


<BrowserRouter>
<Routes>
  <Route path="/" element={<DataBase />} />
    <Route path="/add" element={<Add />} />
</Routes>
</BrowserRouter>
  );
}

export default App;

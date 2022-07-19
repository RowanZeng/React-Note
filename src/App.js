// import Child from "./ex-0712-1/Child";
// import Parent from "./ex-0712-1/Parent";
// import OrderPage from "./ex-0713-1/OrderPage"
// import Controlled from "./ex-0713-2/Controlled"
// import TWZipCode from "./ex-0715-1/TWZipCode"
// import BMIFrom from "./ex-0715-1/BMIFrom"
// import MultipleInput from "./ex-0715-3/MultipleInput"
// import HTML5Form from "./ex-0715-4/HTML5Form"
// import IdForm from "./ex-0715-5/IdForm";
// import RefsForm from "./ex-0715-5/RefsForm";
// import CC from "./ex-0718-1/CC";
// import FC from "./ex-0718-1/FC"
// import BSTest from "./ex-0719-3/BSTest";
// import User from "./ex-0718-2/User";


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

function App() {
    return (
        // <>
        //     {/* <CC /> */}
        //     {/* <FC /> */}
        //     {/* <User/> */}
        //     <BSTest />
        // </>
        <BrowserRouter>
            <Route>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="product" element={<Product />} />
            </Route>
        </BrowserRouter>
    );
}

export default App;

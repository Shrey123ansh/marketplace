// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom";
// import "./style.css";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import Home from "./home";
import Minting from "./minting";
import Roadmap from "./components/Roadmap";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/" element={<Home />} />
        <Route path="/minting" element={<Minting />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
{
  var myElement = document.getElementById("root");
  if (myElement) {
    // Check if the element is not null
    var elementStyle = myElement.style; // Access the style property
  } else {
    console.error('Element with id "myElementId" not found.');
  }
  /* <Route component={Home} exact path="/" />
<Route component={Minting} exact path="/minting" /> */
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Switch>
//         <Route path="/roadmap" element={<Roadmap />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/minting" element={<Minting />} />
//       </Switch>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

{
  /* <Route path="/" element={<Home />} />

<Route path="/marketplace" element={<Marketplace />} />
<Route path="/nftPage/:tokenId" element={<NFTPage />} />
<Route path="/sellNFT" element={<SellNFT />} />
<Route path="/profile" element={<Profile />} /> */
}

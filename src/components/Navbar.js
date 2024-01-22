import logo from "../assets/icons/logo.svg";
import fullLogo from "../full_logo.png";
import {
  BrowserRouter,
  Link,

} from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "../assets/styles/Navbar.css";

function Navbar() {
  const [connected, toggleConnect] = useState(false);
  const location = useLocation();
  const [currAddress, updateAddress] = useState("0x");

  async function getAddress() {
    const ethers = require("ethers");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    updateAddress(addr);
  }

  function updateButton() {
    const ethereumButton = document.querySelector(".enableEthereumButton");
    ethereumButton.textContent = "Connected";
    ethereumButton.classList.remove("hover:bg-blue-70");
    ethereumButton.classList.remove("bg-blue-500");
    ethereumButton.classList.add("hover:bg-green-70");
    ethereumButton.classList.add("bg-green-500");
  }

  async function connectWebsite() {
    const chainId = await window.ethereum.request({
      method: "eth_chainId",
    });
    if (chainId !== "0x13881") {
      //alert('Incorrect network! Switch your metamask network to Polygon Mumbai Testnet');
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x13881" }],
      });
    }
    await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then(() => {
        updateButton();
        console.log("here");
        getAddress();
        window.location.replace(location.pathname);
      });
  }

  useEffect(() => {
    if (window.ethereum == undefined) return;
    let val = window.ethereum.isConnected();
    if (val) {
      console.log("here");
      getAddress();
      toggleConnect(val);
      updateButton();
    }

    window.ethereum.on("accountsChanged", function (accounts) {
      window.location.replace(location.pathname);
    });
  });

  window.addEventListener("scroll", () => {
    const indicatorBar = document.querySelector(".scroll-indicator-bar");

    const pageScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollValue = (pageScroll / height) * 100;

    indicatorBar.style.width = scrollValue + "%";
  });

  return (
    <div className="w-screen">
      {/* <nav className="w-screen bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 fixed z-10"> */}
      <nav className=" bg-white mt-10 mx-[124px] h-14 flex items-center rounded-md justify-center">
        <ul className="flex  w-full items-end justify-between   bg-transparent text-black ">
          <li className=" ">
            <Link to="/">
              <img src={logo} alt="" width={60} height={50} className="" />
              {/* <div className="inline-block font-bold text-xl ml-2">
                NFT Marketplace
              </div> */}
            </Link>
          </li>
          <li className="">
            <ul className="lg:flex justify-between font-bold  text-lg">
              {location.pathname === "/" ? (
                <li className="border-b-2 hover:pb-0 p-2">
                  <Link to="/">Home</Link>
                </li>
              ) : (
                <li className="hover:border-b-2 hover:pb-0 p-2">
                  <Link to="/">Home</Link>
                </li>
              )}
              {location.pathname === "/roadmap" ? (
                <li className="border-b-2 hover:pb-0 p-2">
                  <Link to="/roadmap">Roadmap</Link>
                </li>
              ) : (
                <li className="hover:border-b-2 hover:pb-0 p-2">
                  <Link to="/roadmap">Roadmap</Link>
                </li>
              )}
              {location.pathname === "/marketplace" ? (
                <li className="border-b-2 hover:pb-0 p-2">
                  <Link to="/marketplace">Marketplace</Link>
                </li>
              ) : (
                <li className="hover:border-b-2 hover:pb-0 p-2">
                  <Link to="/marketplace">Marketplace</Link>
                </li>
              )}
              {location.pathname === "/sellNFT" ? (
                <li className="border-b-2 hover:pb-0 p-2">
                  <Link to="/sellNFT">List My NFT</Link>
                </li>
              ) : (
                <li className="hover:border-b-2 hover:pb-0 p-2">
                  <Link to="/sellNFT">List My NFT</Link>
                </li>
              )}
              {location.pathname === "/profile" ? (
                <li className="border-b-2 hover:pb-0 p-2">
                  <Link to="/profile">Profile</Link>
                </li>
              ) : (
                <li className="hover:border-b-2 hover:pb-0 p-2">
                  <Link to="/profile">Profile</Link>
                </li>
              )}
              <li>
                <button
                  className="enableEthereumButton w-52 h-14 text-white bg-gradient-to-br from-yellow-400 to-red-600 rounded-lg backdrop-blur-2xl  hover:from-red-600 hover:to-yellow-400"
                  onClick={connectWebsite}
                >
                  {connected ? "Connected" : "Connect Wallet"}
                </button>
              </li>
            </ul>
          </li>
        </ul>
        {/* <div class="scroll-indicator-container">
          <div class="scroll-indicator-bar"></div>
        </div> */}
      </nav>
      {/* <div className="text-white text-bold text-right mr-10 text-sm">
        {currAddress !== "0x"
          ? "Connected to"
          : "Not Connected. Please login to view NFTs"}{" "}
        {currAddress !== "0x" ? currAddress.substring(0, 15) + "..." : ""}
      </div> */}
    </div>
  );
}

export default Navbar;

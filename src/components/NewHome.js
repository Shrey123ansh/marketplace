import React, { useEffect, useState } from "react";
import Loader2 from "./Loader";
import Navbar from "./Navbar";
import Countdown from "./countdown";
import heroBG from "../assets/images/Hero_bg.png";
import CountdownTimer from "./countdown";
import Footer from "./Footer";
import Ellipse13 from "../assets/images/Ellipse 13.png";
import Rectangle24 from "../assets/images/Rectangle 24.png";
import ramMandir from "../assets/images/ram-mandir.png";
import Rectangle_24_2 from "../assets/images/Rectangle 24 (2).png";
import Rectangle41 from "../assets/images/Rectangle 41.png";

const NewHome = () => {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  // if (loading) {
  //   return <Loader2 />;
  // }

  return (
    <div className="h-full  flex w-screen flex-col ">
      <img src={heroBG} className="absolute w-screen  object-contain -z-10" />
      <Navbar />
      {/* <Countdown /> */}
      <div className=" flex flex-col items-center justify-between min-h-[100vh] h-full w-full px-[124px] bg-main pb-10  ">
        <div className="flex w-full h-full justify-between items-center mt-20 ">
          {/* NFT Card */}
          <div className=" flex relative">
            <div className="NftCard  origin-top-left  rotate-[-31.76deg] w-48 h-60 translate-y-20   ">
              <div className="Rectangle23 flex flex-col items-center justify-evenly w-48 h-60 left-0 top-0  origin-top-left  bg-white bg-opacity-50 rounded-2xl shadow">
                <div>
                  <img
                    className="Ellipse13 w-4 h-4  rounded-full"
                    src={Ellipse13}
                  />
                  <img
                    className="Rectangle24 w-36 h-40  rounded-2xl"
                    src={Rectangle24}
                  />
                </div>
                <div className="flex justify-between gap-4">
                  <div className="LordRamaNft w-16 h-8  text-gray-800 text-xs font-normal font-['Poppins']">
                    Lord Rama NFT
                  </div>
                  <div className="MintNow  h-6 flex justify-center items-center px-2 bg-gray-800 rounded shadow  text-neutral-100 text-xs font-semibold font-['Poppins']">
                    Mint Now
                  </div>
                </div>
              </div>
            </div>
            <div className="NftCard origin-top-left -rotate-3 w-48 h-60 -translate-x-4 -translate-y-4">
              <div className="Rectangle23 flex flex-col items-center justify-evenly w-48 h-60  bg-white bg-opacity-70 rounded-2xl shadow-md">
                <div>
                  <img
                    className="Ellipse13 w-4 h-4  rounded-full"
                    src={Ellipse13}
                  />
                  <img
                    className="Rectangle24 w-36 h-40 rounded-2xl"
                    src={Rectangle24}
                  />
                </div>
                <div className="flex justify-between gap-4">
                  <div className="LordRamaNft w-16 h-8  text-gray-800 text-xs font-normal font-['Poppins']">
                    Lord Rama NFT
                  </div>
                  <div className="MintNow  h-6 flex justify-center items-center px-2 bg-gray-800 rounded shadow  text-neutral-100 text-xs font-semibold font-['Poppins']">
                    Mint Now
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Text Hindi */}
          <div className=" h-full w-2/3 flex flex-col items-end gap-10">
            <div className="text-right flex flex-col gap-10">
              <span className="text-white text-6xl font-semibold font-['Poppins'] uppercase drop-shadow-lg">
                राम की लीला, आधुनिक कला
                <br />
              </span>
              <span className="text-white text-6xl font-semibold font-['Poppins'] uppercase leading-10 drop-shadow-lg">
                भक्ति और तकनीक का संगम
              </span>
            </div>

            <div className="Rectangle6 w-60 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-red-600 rounded-lg backdrop-blur-2xl">
              <div className="  text-white text-xl font-semibold font-['Poppins'] capitalize">
                22 Jan 12:20 PM
              </div>
            </div>
          </div>
        </div>

        {/* Counter */}
        <CountdownTimer endDate={1705926000} />
      </div>

      {/* About rama nft */}
      <div className=" flex items-center justify-between px-[124px] pt-10 bg-white">
        <div className="flex flex-col w-1/2 gap-10 justify-between">
          <div className="text-orange-600 text-3xl font-bold font-['Poppins']">
            About the Ram Lala NFT Collection
          </div>
          <div className="  text-black text-xl font-normal font-['Poppins']">
            Welcome to the divine realm of Audhaya and Ram Lala NFTs, where we
            merge the timeless tradition of Sanatan Dharma with modern
            technology. We believe in spreading the essence of our ancient
            culture to the world, and to celebrate this, we are offering free
            NFTs that encapsulate the spirit of Shri Ram and the legendary
            Ramayana.
          </div>

          <div className="">
            <span className="text-orange-600 text-xl font-bold font-['Poppins']">
              Concept of Creating:
              <br />
            </span>
            <span className="text-black text-xl font-normal font-['Poppins']">
              In our quest to bridge the ancient and the contemporary, we embark
              on a journey to create a unique space where digital art meets
              spirituality. We not only provide free NFTs as tokens of devotion
              but also have exciting plans for the future to enhance this
              digital pilgrimage.
            </span>
          </div>
          <div className="Rectangle6 w-40 h-12 flex items-center justify-center  bg-orange-600 rounded-lg backdrop-blur-2xl">
            <div className="KnowMore w-28 h-9 left-[20px] top-[10.34px]  text-white text-lg font-semibold font-['Poppins'] capitalize">
              KNOW MORE
            </div>
          </div>
        </div>

        <div className="RamMandir w-96 h-96 left-[795px] top-[988px] ">
          <img
            className="ShreeRamAyodhyaTempleDesign1 w-96 h-96 left-[24px] top-[106px] "
            src={ramMandir}
          />
        </div>
      </div>

      {/* feature nft */}
      <div className="featuredNft bg-white flex flex-col items-center justify-between gap-8 px-[124px] py-20 ">
        <div className=" text-orange-600 text-4xl font-bold font-['Poppins']">
          Featured NFT Section
        </div>
        <div className=" text-center text-gray-800 text-lg font-medium font-['Poppins']">
          Mint your nft - Uncover the simple steps to mint your exclusive NFTs
          and become a part of this digital renaissance. Our user-friendly
          minting process allows everyone to participate in this unique
          celebration of art and spirituality.
        </div>

        <div className="flex justify-between w-full">
          <div className=" w-80   bg-white bg-opacity-50 rounded-2xl shadow">
            <img
              className="Rectangle24 w-80 h-80  rounded-tl-2xl rounded-tr-2xl"
              src={Rectangle_24_2}
            />
            <div className="flex flex-col p-2 gap-2">
              <div className="flex">
                <img
                  className="Ellipse13 w-4 h-4 left-[132px] top-[2179px]  rounded-full"
                  src={Ellipse13}
                />
                <div className="Lordrama w-20 h-3.5 left-[157px] top-[2179px]  text-gray-800 text-xs font-normal font-['Poppins']">
                  @lordrama
                </div>
              </div>
              <div className="LastSold w-16 h-3.5 left-[132px] top-[2207px]  text-gray-800 text-sm font-normal font-['Poppins']">
                Last sold
              </div>
              <div className="flex justify-between">
                <div className="10Eth w-16 h-5 left-[132px] top-[2227px]  text-gray-800 text-base font-medium font-['Poppins']">
                  0.10 ETH
                </div>
                <div className="Rectangle25 w-20 h-6 left-[369px] top-[2223px]  bg-gray-800 rounded shadow">
                  <div className="MintNow w-16 h-5 left-[377px] top-[2226px]  text-white text-sm font-semibold font-['Poppins']">
                    Mint Now
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-80   bg-white bg-opacity-50 rounded-2xl shadow">
            <img
              className="Rectangle41 w-80 h-80 left-[546px] top-[1813px]  rounded-tl-2xl rounded-tr-2xl"
              src={Rectangle41}
            />
            <div className="flex flex-col p-2 gap-2">
              <div className="flex">
                <img
                  className="Ellipse13 w-4 h-4 left-[132px] top-[2179px]  rounded-full"
                  src={Ellipse13}
                />
                <div className="Lordrama w-20 h-3.5 left-[157px] top-[2179px]  text-gray-800 text-xs font-normal font-['Poppins']">
                  @lordrama
                </div>
              </div>
              <div className="LastSold w-16 h-3.5 left-[132px] top-[2207px]  text-gray-800 text-sm font-normal font-['Poppins']">
                Last sold
              </div>
              <div className="flex justify-between">
                <div className="10Eth w-16 h-5 left-[132px] top-[2227px]  text-gray-800 text-base font-medium font-['Poppins']">
                  0.10 ETH
                </div>
                <div className="Rectangle25 w-20 h-6 left-[369px] top-[2223px]  bg-gray-800 rounded shadow">
                  <div className="MintNow w-16 h-5 left-[377px] top-[2226px]  text-white text-sm font-semibold font-['Poppins']">
                    Mint Now
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-80   bg-white bg-opacity-50 rounded-2xl shadow">
            <img
              className="Rectangle24 w-80 h-80  rounded-tl-2xl rounded-tr-2xl"
              src={Rectangle_24_2}
            />
            <div className="flex flex-col p-2 gap-2">
              <div className="flex">
                <img
                  className="Ellipse13 w-4 h-4 left-[132px] top-[2179px]  rounded-full"
                  src={Ellipse13}
                />
                <div className="Lordrama w-20 h-3.5 left-[157px] top-[2179px]  text-gray-800 text-xs font-normal font-['Poppins']">
                  @lordrama
                </div>
              </div>
              <div className="LastSold w-16 h-3.5 left-[132px] top-[2207px]  text-gray-800 text-sm font-normal font-['Poppins']">
                Last sold
              </div>
              <div className="flex justify-between">
                <div className="10Eth w-16 h-5 left-[132px] top-[2227px]  text-gray-800 text-base font-medium font-['Poppins']">
                  0.10 ETH
                </div>
                <div className="Rectangle25 w-20 h-6 left-[369px] top-[2223px]  bg-gray-800 rounded shadow">
                  <div className="MintNow w-16 h-5 left-[377px] top-[2226px]  text-white text-sm font-semibold font-['Poppins']">
                    Mint Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Rectangle6 flex items-center justify-center w-44 h-12 left-0 top-0  bg-orange-600 rounded-lg backdrop-blur-2xl">
          <div className="ExploreMore  left-[15px] top-[11px]  text-white text-lg font-semibold font-['Poppins'] capitalize tracking-wider">
            EXPLORE MORE..
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewHome;

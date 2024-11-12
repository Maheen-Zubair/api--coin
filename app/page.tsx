"use client";
import { useState, useEffect } from "react";


interface CoinData {
  rates: {
    [key: string]: number;
  };
}
export default function CoinMarket() {
  const API_KEY = "a9da3d4ae5af956aee06b06016bcdc98";
  const [data, setData] = useState<CoinData|null>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
      });
  }, []);
  return (
    <div >
      <div className="h-full bg-gray-100">
        <div className=" w-5xl sm:mx-auto bg-white shadow-lg rounded-lg p-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-700">CoinLayer</h1>
            <p className="text-gray-500 text-sm mt-2">
              Live cryptocurrency prices fetched from CoinLayer API.
            </p>
          </header>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search coins by name..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm  focus:outline-blue-500 placeholder-gray-400"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute top-3 size-6  right-4 text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>

          <div className=" border-gray-200">
            <table className=" w-full table-fixed text-left text-gray-700">
              <thead className="bg-blue-100">
                <tr className="">
                  <th className="w-1/4 py-3 sm:py-4 font-semibold text-sm sm:text-lg px-2 pl-6 sm:px-6">#</th>
                  <th className=" w-1/4 py-3 sm:py-4 font-semibold text-sm sm:text-lg px-2  pl-5 sm:px-6 ">Name</th>
                  <th className=" w-1/4 py-3 sm:py-4 font-semibold text-sm sm:text-lg px-2  sm:px-6 ">Symbol</th>
                  <th className=" w-1/4 py-3 sm:py-4 font-semibold text-sm sm:text-lg px-2 sm:px-6 ">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-blue-50 transition duration-150">
                  <td className="px-6 py-4 border-b sm:text-lg text-sm"> 01</td>
                  <td className="px-6 py-4 border-b font-medium text-sm sm:text-lg">Bitcoin</td>
                  <td className="px-6 py-4 border-b sm:text-lg text-sm">BTC</td>
                  <td className="px-6 py-4 border-b sm:text-lg text-sm"> {data?.rates?.BTC}
                  </td>

                </tr>
                <tr className="hover:bg-blue-50 transition duration-150">
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> 02</td>
                  <td className="px-6 py-4 border-b font-medium text-sm sm:text-lg">Ethereum</td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg">ETH</td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> {data?.rates?.ETH}
                  </td>
                </tr>
                <tr className="hover:bg-blue-50 transition duration-150">
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> 03</td>
                  <td className="px-6 py-4 border-b font-medium text-sm sm:text-lg">Tether 	</td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg">USDT</td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> {data?.rates?.USDT}
                  </td>

                </tr>
                <tr className="hover:bg-blue-50 transition duration-150">
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> 04</td>
                  <td className="px-6 py-4 border-b font-medium text-sm sm:text-lg">Solana </td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg">SOL</td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> {data?.rates?.SOL}
                  </td>

                </tr>
                <tr className="hover:bg-blue-50 transition duration-150">
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> 05</td>
                  <td className="px-6 py-4 border-b font-medium text-sm sm:text-lg">Binance </td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg">BNB</td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> {data?.rates?.BNB}
                  </td>

                </tr>
                <tr className="hover:bg-blue-50 transition duration-150">
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> 06</td>
                  <td className="px-6 py-4 border-b font-medium text-sm sm:text-lg">Cardano</td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg">ADA</td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> {data?.rates?.ADA}
                  </td>

                </tr>
                <tr className="hover:bg-blue-50 transition duration-150">
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> 07</td>
                  <td className="px-6 py-4 border-b font-medium text-sm sm:text-lg">Ripple </td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg">XRP</td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> {data?.rates?.XRP}
                  </td>

                </tr>
                <tr className="hover:bg-blue-50 transition duration-150">
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> 08</td>
                  <td className="px-6 py-4 border-b font-medium text-sm sm:text-lg">Dogecoin </td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg">DOGE</td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> {data?.rates?.DOGE}
                  </td>

                </tr>
                <tr className="hover:bg-blue-50 transition duration-150">
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> 09</td>
                  <td className="px-6 py-4 border-b font-medium text-sm sm:text-lg">Tether</td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg">USDT</td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> {data?.rates?.USDT}
                  </td>

                </tr>
                <tr className="hover:bg-blue-50 transition duration-150">
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> 10</td>
                  <td className="px-6 py-4 border-b font-medium text-sm sm:text-lg">Litecoin  </td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg">LTC</td>
                  <td className="px-6 py-4 border-b text-sm sm:text-lg"> {data?.rates?.LTC}
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
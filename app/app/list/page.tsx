"use client";

import { useWallet } from "@/hooks/useMetamask";
import { useNavigation } from "@/hooks/useNavigation";
import { UtilMethods } from "@/utils/util";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import Web3 from "web3";
import axios from "axios";

export default function ValidatorListHome() {
  const { goToProfile, goToDetail } = useNavigation();
  const { requestAccount, isConnected, walletAddress } = useWallet();
  const { getShortAddress } = UtilMethods();
  const [addressTxt, setAddressTxt] = useState("");
  const [balanceEth, setBalanceEth] = useState("0");
  const [balanceEthUsd, setBalanceEthUsd] = useState("0");

  const handleBlockdaemonBtn = () => {
    goToDetail();
  };

  const handleChartBtn = () => {
    goToProfile();
  };

  useEffect(() => {
    if (walletAddress) {
      setAddressTxt(getShortAddress(walletAddress));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletAddress]);

  useEffect(() => {
    if (!window.ethereum) return;
    if (isConnected) {
      window.ethereum
        .request({
          method: "eth_getBalance",
          params: [walletAddress, "latest"],
        })
        .then((result: any) => {
          console.log("result", result);
          const web3 = new Web3(window.ethereum);
          const balance = web3.utils.fromWei(result, "ether");

          setBalanceEth(balance.slice(0, 6));
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, [isConnected, walletAddress]);

  useEffect(() => {
    if (balanceEth === "0") {
      setBalanceEthUsd("0");
    }

    const bithumbUrl = "https://api.bithumb.com/public/ticker/ETH_KRW";

    axios
      .get(bithumbUrl)
      .then((response) => {
        const data = response.data;
        const price = data.data.closing_price;
        const balance = (Number(balanceEth) * Number(price)) / 1309;

        setBalanceEthUsd(balance.toFixed(3));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [balanceEth]);

  return (
    <main className="flex flex-col">
      {/* trending & wallet */}
      <div className="flex mx-auto md:mt-[66px] mt-[33px] xl:space-x-[42px] w-full justify-center">
        {/* trending */}
        <div className="xl:flex hidden w-[530px] h-[289px] bg-gradient-to-b from-blue-900 to-40% to-zinc-900 rounded-[15px] border border-slate-500 flex-col">
          <div className="text-blue-100 text-xl font-bold font-['SUIT'] leading-tight my-[20px] ml-[22px]">
            Trending
          </div>
          <div className="w-full h-[1px] bg-slate-500" />
          <button className="w-full h-[45px]" onClick={handleBlockdaemonBtn}>
            <div className="w-full flex justify-between items-center h-full">
              <div className="flex items-center justify-center ml-[22px]">
                <div className="text-white text-xl font-semibold font-['SUIT'] leading-tight">
                  1.
                </div>
                <div className=" ml-[22px]">
                  <Image
                    src="/images/icons/icon_blockdaemon.png"
                    width={25}
                    height={25}
                    alt="network_button"
                  />
                </div>
                <div className="text-white text-xl font-medium font-['SUIT'] leading-none ml-[12px]">
                  Blockdaemon
                </div>
              </div>
              <div className="flex">
                <Image
                  src="/images/icons/icon_ethereum.png"
                  width={25}
                  height={25}
                  alt="network_button"
                />
                <div className="text-white text-base font-medium font-['SUIT'] leading-none flex items-center mx-[22px]">
                  5.3%
                </div>
              </div>
            </div>
          </button>
          <div className="w-full h-[1px] bg-slate-500" />
        </div>
        {/* wallet */}
        {isConnected && walletAddress ? (
          <div className="relative flex xl:w-[530px] w-[80%] md:h-[289px] h-[144px] bg-gradient-to-b from-blue-900 to-40% to-zinc-900 rounded-[15px] border border-slate-500 justify-center items-center">
            <div className="absolute top-0 w-full flex justify-between">
              <div className="md:ml-[24px] ml-[12px] md:mt-[24px] mt-[12px] flex items-center">
                <div className="bg-white rounded-full p-1 mr-2">
                  <Image
                    src="/images/icons/icon_metamask.png"
                    width={32}
                    height={32}
                    alt="wallet"
                    className="md:block hidden"
                  />
                  <Image
                    src="/images/icons/icon_metamask.png"
                    width={20}
                    height={20}
                    alt="wallet"
                    className="md:hidden block"
                  />
                </div>
                <div className="text-blue-100 md:text-[21px] text-[12px] font-medium font-['SUIT']">
                  {addressTxt}
                </div>
              </div>
              <button className="mr-[15px]" onClick={handleChartBtn}>
                <Image
                  src="/images/icons/icon_chart.png"
                  width={32}
                  height={32}
                  alt="portfolio_button"
                  className="md:block hidden"
                />
                <Image
                  src="/images/icons/icon_chart.png"
                  width={20}
                  height={20}
                  alt="portfolio_button"
                  className="md:hidden block mt-[10px]"
                />
              </button>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex justify-between items-end w-full">
                <div className="text-center text-white md:text-4xl text-lg font-semibold font-['SUIT']">
                  {balanceEth}
                </div>
                <div className="text-blue-100 md:text-xl text-xs font-medium font-['SUIT'] ml-[21px]">
                  ETH
                </div>
              </div>
              <div className="flex justify-between items-end w-full md:mt-[23px]">
                <div className="text-center text-white md:text-4xl text-lg font-semibold font-['SUIT']">
                  $ {balanceEthUsd}
                </div>
                <div className="text-blue-100 md:text-xl text-xs font-medium font-['SUIT'] ml-[21px]">
                  USD
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative flex xl:w-[530px] w-[80%] md:h-[289px] h-[144px] bg-gradient-to-b from-blue-900 to-40% to-zinc-900 rounded-[15px] border border-slate-500 justify-center items-center">
            <button
              onClick={requestAccount}
              className="w-[161px] h-[53px] bg-blue-600 rounded-[41px] flex justify-center items-center text-center text-white text-xl font-bold"
            >
              Connect
            </button>
          </div>
        )}
      </div>
      {/* all validators */}
      <div className="md:mt-[80px] mt-[40px] w-full flex flex-col items-center">
        <div className="text-white md:text-4xl text-lg font-semibold font-['SUIT'] leading-9 xl:w-[1102px] w-[80%] flex md:justify-start justify-center">
          All validators
        </div>
        <div className="md:mt-[20px] mt-[10px] flex xl:w-[1102px] w-[80%] md:h-[500px] h-[250px] bg-gradient-to-b from-blue-900 to-20% to-zinc-900 rounded-[15px] border border-slate-500 flex-col">
          {/* subjects */}
          <div className="flex justify-between items-center md:h-[100px] h-[50px]">
            <div className="text-indigo-200 md:text-xl text-[12px] font-bold font-['SUIT'] leading-tight md:ml-[42px] ml-[21px]">
              validators
            </div>
            <div className="flex md:space-x-[56px] space-x-[10px] md:mr-[42px] mr-[21px]">
              <div className="text-center text-indigo-200 md:text-xl text-[12px] font-bold font-['SUIT'] leading-tight">
                Network
              </div>
              <div className="text-center text-indigo-200 md:text-xl text-[12px] font-bold font-['SUIT'] leading-tight">
                APY
              </div>
              <div className="text-center text-indigo-200 md:text-xl text-[12px] font-bold font-['SUIT'] leading-tight">
                Detail
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-slate-500" />
          {/* list */}
          <button
            className="flex justify-between items-center md:h-[100px] h-[50px]"
            onClick={handleBlockdaemonBtn}
          >
            <div className="text-indigo-200 md:text-xl text-[12px] font-normal font-['SUIT'] leading-tight md:ml-[42px] ml-[21px] flex items-center">
              <div className="mr-2">
                <Image
                  src="/images/icons/icon_blockdaemon.png"
                  width={25}
                  height={25}
                  alt="network_button"
                />
              </div>
              Blockdaemon
            </div>
            <div className="flex md:space-x-[56px] space-x-[10px] md:mr-[42px] mr-[21px]">
              <div className="text-center text-indigo-200 md:text-xl text-[12px] font-bold font-['SUIT'] leading-tight md:mr-[20px] mr-[10px] flex items-center justify-center">
                <Image
                  src="/images/icons/icon_ethereum.png"
                  width={25}
                  height={25}
                  alt="network_button"
                />
              </div>
              <div className="text-center text-indigo-200 md:text-xl text-[12px] font-normal font-['SUIT'] leading-tight flex items-center justify-center">
                5.3%
              </div>
              <div className="text-center text-indigo-200 md:text-xl text-[12px] font-normal font-['SUIT'] leading-tight flex items-center justify-center">
                <Image
                  src="/images/icons/icon_detail.png"
                  width={50}
                  height={25}
                  alt="detail_button"
                  className="md:block hidden"
                />
                <Image
                  src="/images/icons/icon_detail.png"
                  width={25}
                  height={12}
                  alt="detail_button"
                  className="md:hidden block"
                />
              </div>
            </div>
          </button>
          <div className="w-full h-[1px] bg-slate-500" />
        </div>
        {/* index */}
        <Image
          src="/images/index.png"
          width={228}
          height={28}
          alt="index_button"
          className="mt-[20px]"
        />
      </div>
    </main>
  );
}

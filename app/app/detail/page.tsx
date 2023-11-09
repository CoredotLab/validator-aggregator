"use client";

import { useNavigation } from "@/hooks/useNavigation";
import Image from "next/image";
import { useState } from "react";

export default function DetailHome() {
  const { goToApp } = useNavigation();
  const [isStaking, setIsStaking] = useState(true);

  const handleBackBtn = () => {
    goToApp();
  };

  const handleStakingBtn = () => {
    setIsStaking(true);
  };

  const handleWithdrawBtn = () => {
    setIsStaking(false);
  };

  const handleRequestStakingBtn = () => {
    console.log("staking");
  };

  const handleRequestWithdrawBtn = () => {
    console.log("staking");
  };

  return (
    <main className="xl:w-[1200px] w-[90%] mx-auto">
      {/* backbtn */}
      <button
        onClick={handleBackBtn}
        className="flex items-center md:mt-[170px] mt-[10px]"
      >
        <Image
          src="/images/icons/icon_arrow_left.png"
          width={32}
          height={32}
          alt="back_btn"
          className="md:block hidden"
        />
        <Image
          src="/images/icons/icon_arrow_left.png"
          width={16}
          height={16}
          alt="back_btn"
          className="md:hidden block"
        />
        <div className="text-blue-100 text-opacity-80 md:text-[20px] text-[12px] font-semibold font-['SUIT'] leading-tight">
          Validators
        </div>
      </button>
      {/* upper component */}
      <div className="flex flex-col md:mt-[42px] mt-[20px]">
        <div className="text-white md:text-[24px] text-[12px] font-semibold font-['SUIT'] leading-normal flex items-center">
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
        <div className="flex md:mt-[40px] mt-[20px] md:flex-row flex-col">
          {/* chart */}
          <Image
            src="/images/eth_chart.png"
            width={689}
            height={522}
            alt="chart_btn"
            className="xl:block hidden"
          />
          <Image
            src="/images/eth_chart.png"
            width={450}
            height={300}
            alt="chart_btn"
            className="md:block xl:hidden hidden"
          />
          <Image
            src="/images/eth_chart.png"
            width={689}
            height={522}
            alt="chart_btn"
            className="md:hidden block"
          />
          {/* staking */}
          <div
            className={
              `flex flex-col mt-[10px] md:mt-0 w-full md:w-[472px] h-[222px] md:h-[450px] xl:h-[522px] md:ml-[34px] bg-gradient-to-b to-40% to-zinc-900 rounded-[15px] border border-slate-500` +
              (!isStaking ? " from-purple-900" : " from-blue-900")
            }
          >
            {/* staking <-> withdraw */}
            <div className="w-full h-[10%] flex">
              <button
                className="w-[50%] h-full flex justify-center items-center bg-blue-900 rounded-tl-[15px]"
                onClick={handleStakingBtn}
              >
                <div
                  className={
                    `text-base font-semibold font-['SUIT'] leading-none` +
                    (isStaking ? " text-white" : " text-gray-400")
                  }
                >
                  Staking
                </div>
              </button>
              <button
                className="w-[50%] h-full flex justify-center items-center bg-purple-900 rounded-tr-[15px]"
                onClick={handleWithdrawBtn}
              >
                <div
                  className={
                    `text-base font-semibold font-['SUIT'] leading-none` +
                    (isStaking ? " text-gray-400" : " text-white")
                  }
                >
                  Withdraw
                </div>
              </button>
            </div>
            <div className="flex flex-col md:p-[36px] p-[10px]">
              {/* staked */}
              <div className="flex justify-between items-end">
                <div className="text-white md:text-xl text-[12px] font-bold font-['SUIT']">
                  Asset Staked
                </div>
                <div className="flex items-end">
                  <div className="text-center text-white md:text-3xl text-[14px] font-medium font-['SUIT']">
                    3.0123
                  </div>
                  <div className="text-blue-100 md:text-xl text-[12px] font-semibold font-['SUIT'] ml-2">
                    ETH
                  </div>
                </div>
              </div>
              {/* input form */}
              <div className="w-full md:h-[54px] h-[27px] bg-blue-800 bg-opacity-50 mt-4 flex justify-between items-center px-5">
                <div className="text-white text-[15px] font-bold font-['SUIT'] leading-[15px]">
                  0
                </div>
                <div className="text-blue-100 text-opacity-50 text-[15px] font-semibold font-['SUIT'] leading-[15px]">
                  ETH
                </div>
              </div>
              {/* balance */}
              <div className="opacity-60 text-blue-100 md:text-[15px] text-[12px] font-semibold font-['SUIT'] leading-[15px] mt-2">
                Balance: 1.23
              </div>
              {/* 구분선 */}
              <div className="w-full h-[1px] bg-slate-500 mt-2" />
              {/* infos */}
              <div className="flex justify-between items-center xl:mt-5">
                <div className="opacity-60 text-blue-100 md:text-[15px] text-[12px] font-bold font-['SUIT'] leading-[15px]">
                  APR
                </div>
                <div className="text-right text-white md:text-xl text-[13px] font-bold font-['SUIT']">
                  5.32 %
                </div>
              </div>
              <div className="flex justify-between items-center xl:mt-5">
                <div className="opacity-60 text-blue-100 md:text-[15px] text-[12px] font-bold font-['SUIT'] leading-[15px]">
                  Staking Volume
                </div>
                <div className="text-right text-white md:text-xl text-[13px] font-bold font-['SUIT']">
                  $ 197.29 b{" "}
                </div>
              </div>
              <div className="flex justify-between items-center xl:mt-5">
                <div className="opacity-60 text-blue-100 md:text-[15px] text-[12px] font-bold font-['SUIT'] leading-[15px]">
                  Commission fee
                </div>
                <div className="text-right text-white md:text-xl text-[13px] font-bold font-['SUIT']">
                  4 %{" "}
                </div>
              </div>
              {/* button */}
              {isStaking ? (
                <button
                  onClick={handleRequestStakingBtn}
                  className="mx-auto xl:mt-[50px] md:mt-[30px] md:w-[158px] w-[100px] md:h-[49px] h-[30px] bg-gradient-to-b from-blue-600 to-indigo-700 flex items-center justify-center"
                >
                  STAKING
                </button>
              ) : (
                <button
                  onClick={handleRequestWithdrawBtn}
                  className="mx-auto xl:mt-[50px] md:mt-[30px] md:w-[158px] w-[100px] md:h-[49px] h-[30px] bg-gradient-to-b from-purple-600 to-indigo-700 flex items-center justify-center"
                >
                  WITHDRAW
                </button>
              )}
            </div>
          </div>
        </div>
        {/* statistics */}
        <div className="xl:w-[1195px] w-full bg-zinc-900 rounded-[15px] border border-slate-500 md:mt-[80px] mt-[10px] flex flex-col md:p-[30px] p-[10px]">
          <div className="text-white md:text-[30px] text-[15px] font-semibold font-['SUIT'] leading-9">
            Statistics
          </div>
          <div className="flex md:mt-[10px] md:flex-row flex-col md:space-x-[31px] md:space-y-0 space-y-2">
            <div className="xl:w-[346px] md:w-[300px] w-full md:h-[191px] h-[80px] origin-top-left bg-neutral-700 flex flex-col justify-between md:p-[30px] p-[10px]">
              <div className="text-blue-100 text-[15px] font-medium font-['SUIT'] leading-[18px]">
                Staked Tokens Trend 24h
              </div>
              <div className="flex items-end">
                <div className="text-green-500 text-[40px] font-bold font-['SUIT'] leading-[48px]">
                  +64.05
                </div>
                <div className="opacity-50 text-blue-100 text-[32px] font-medium font-['SUIT'] leading-[38.40px]">
                  %
                </div>
              </div>
            </div>
            <div className="xl:w-[346px] md:w-[300px] w-full md:h-[191px] h-[80px] origin-top-left bg-neutral-700 flex flex-col justify-between md:p-[30px] p-[10px]">
              <div className="text-blue-100 text-[15px] font-medium font-['SUIT'] leading-[18px]">
                Trading Volume Trend 24h{" "}
              </div>
              <div className="flex items-end">
                <div className="text-red-500 text-[40px] font-bold font-['SUIT'] leading-[48px]">
                  -4.54{" "}
                </div>
                <div className="opacity-50 text-blue-100 text-[32px] font-medium font-['SUIT'] leading-[38.40px]">
                  %
                </div>
              </div>
            </div>
            <div className="xl:w-[346px] md:w-[300px] w-full md:h-[191px] h-[80px] origin-top-left bg-neutral-700 flex flex-col justify-between md:p-[30px] p-[10px]">
              <div className="text-blue-100 text-[15px] font-medium font-['SUIT'] leading-[18px]">
                Page View Trend 24h{" "}
              </div>
              <div className="flex items-end">
                <div className="text-red-500 text-[40px] font-bold font-['SUIT'] leading-[48px]">
                  -58.14{" "}
                </div>
                <div className="opacity-50 text-blue-100 text-[32px] font-medium font-['SUIT'] leading-[38.40px]">
                  %
                </div>
              </div>
            </div>
          </div>
          <div className="text-white md:text-[30px] text-[15px] font-semibold font-['SUIT'] leading-9 md:mt-[30px]">
            Information
          </div>
          <div className="xl:w-[1100px] w-full text-white md:text-xl text-[12px] font-medium font-['SUIT'] md:leading-[30px]">
            DeFi is a set of existing financial tools based on blockchain,
            specifically Ethereum. They are largely premised on modularized
            frameworks or open-source protocols for creating and issuing digital
            assets, and are designed to offer the salient benefits of operating
            on a public blockchain, such as resistance to censorship and
            increased access to financial services.
            <br />
            <br />
            Decentralizing everything is not a prudent move and many DeFi
            services take this into account by offering hybrid digital
            asset/traditional financial services, such as BlockFi. An
            alternative term to encompass the ongoing interest in financial
            products is open finance, which incorporates an ecosystem of digital
            assets, blockchains, and open protocols that suffer from traditional
            financial structures.
            <br />
            <br />A noticeable shift in Ethereum&apos;s application narrative
            has coincided with the popularity of open finance tools for the
            product. For example, according to a report by Bloqboard on public
            lending protocols, active lending across four public lending
            protocols - MakerDAO, Dharma, dYdX, and Compound Finance - increased
            by $12 million in 2018, reaching $72 million..
          </div>
        </div>
      </div>
    </main>
  );
}

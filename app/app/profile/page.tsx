"use client";

import { useWallet } from "@/hooks/useMetamask";
import { useNavigation } from "@/hooks/useNavigation";
import { UtilMethods } from "@/utils/util";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProfileHome() {
  const { goToApp } = useNavigation();
  const { requestAccount, isConnected, walletAddress } = useWallet();
  const { getShortAddress } = UtilMethods();
  const [addressTxt, setAddressTxt] = useState("");

  const handleBackBtn = () => {
    goToApp();
  };

  useEffect(() => {
    if (walletAddress) {
      setAddressTxt(getShortAddress(walletAddress));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletAddress]);

  useEffect(() => {
    requestAccount();
  }, []);

  return (
    <main className="xl:w-[1200px] w-[90%] mx-auto">
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
              src="/images/icons/icon_metamask.png"
              width={25}
              height={25}
              alt="profile_avatar"
            />
          </div>
          {addressTxt}
        </div>
        {/* cards */}
        <div className="flex md:mt-[20px] mt-[20px] md:flex-row flex-col md:justify-end md:space-y-0 space-y-4">
          {/* assets */}
          <div className="md:w-[55%] md:mr-[5%] to-30% h-[285px] bg-gradient-to-b from-blue-900 to-zinc-900 rounded-[15px] border border-slate-500 flex justify-center items-center flex md:flex-row flex-col md:space-x-[40px] xl:space-x-[80px] md:space-y-0 space-y-[40px]">
            {/* asset staked */}
            <div className="flex flex-col justify-center items-center">
              <div className="text-center text-white text-2xl font-bold font-['SUIT'] leading-normal">
                Asset Staked
              </div>
              <div className="flex">
                <div className="text-center text-white text-xl font-semibold font-['SUIT'] leading-tight">
                  0
                </div>
                <div className="text-center text-blue-100 text-xl font-medium font-['SUIT'] leading-tight">
                  ETH
                </div>
              </div>
            </div>
            {/* total yields */}
            <div className="flex flex-col justify-center items-center">
              <div className="text-center text-white text-2xl font-bold font-['SUIT'] leading-normal">
                Total Yields
              </div>
              <div className="flex">
                <div className="text-center text-white text-xl font-semibold font-['SUIT'] leading-tight">
                  0
                </div>
                <div className="text-center text-blue-100 text-xl font-medium font-['SUIT'] leading-tight">
                  ETH
                </div>
              </div>
            </div>
          </div>
          {/* green claim */}
          <div className="md:w-[40%] to-30% h-[285px] bg-gradient-to-b from-teal-900 to-neutral-800 rounded-[15px] shadow border border-slate-500 flex flex-col items-center justify-center space-y-[10px]">
            <div className="text-center text-white text-2xl font-bold font-['SUIT'] leading-normal">
              Green Claim
            </div>
            <div className="opacity-70 text-center text-white text-[15px] font-semibold font-['SUIT'] leading-[15px]">
              claim control
            </div>
            <div>
              <span className="text-emerald-500 text-2xl font-bold font-['SUIT'] leading-normal">
                20
              </span>
              <span className="text-white text-2xl font-bold font-['SUIT'] leading-normal">
                {" "}
                %
              </span>
            </div>
            <div className="opacity-70 text-center text-white text-[15px] font-semibold font-['SUIT'] leading-[15px]">
              total claimed
            </div>
            <div>
              <span className="text-emerald-500 text-2xl font-bold font-['SUIT'] leading-normal">
                0
              </span>
              <span className="text-white text-2xl font-bold font-['SUIT'] leading-normal">
                {" "}
                $
              </span>
            </div>
          </div>
        </div>
        {/* 구분선 */}
        <div className="w-full h-[1px] bg-slate-500 my-[20px]" />
      </div>
      {/* Staking Status */}
      <div className="w-full flex flex-col md:items-start items-center">
        <div className="text-white md:text-4xl text-lg font-semibold font-['SUIT'] leading-9 flex md:justify-start justify-center">
          Staking status
        </div>
        <div className="md:mt-[20px] mt-[10px] flex w-full md:h-[500px] h-[250px] bg-gradient-to-b from-blue-900 to-20% to-zinc-900 rounded-[15px] border border-slate-500 flex-col">
          {/* subjects */}
          <div className="flex justify-between items-center md:h-[100px] h-[50px]">
            <div className="text-indigo-200 md:text-xl text-[12px] font-bold font-['SUIT'] leading-tight md:ml-[42px] ml-[21px]">
              validators
            </div>
            <div className="flex md:space-x-[26px] space-x-[4px] md:mr-[42px] mr-[21px]">
              <div className="text-center text-indigo-200 md:text-xl text-[12px] font-bold font-['SUIT'] mr-[10px] leading-tight">
                Staked
              </div>
              <div className="text-center text-indigo-200 md:text-xl text-[12px] font-bold font-['SUIT'] leading-tight">
                Claim
              </div>
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
          <div className="flex justify-between items-center md:h-[100px] h-[50px]">
            <div className="text-indigo-200 md:text-xl text-[12px] font-normal font-['SUIT'] leading-tight md:ml-[42px] ml-[21px] flex items-center">
              <div className="md:mr-2">
                <Image
                  src="/images/icons/icon_blockdaemon.png"
                  width={25}
                  height={25}
                  alt="network_button"
                  className="md:block hidden"
                />
              </div>
              Blockdaemon
            </div>
            <div className="flex md:mr-[42px] mr-[21px]">
              <div className="text-center text-indigo-200 md:text-xl text-[12px] font-bold font-['SUIT'] leading-tight md:mr-[20px] mr-[5px] flex items-center justify-center">
                0.0 ETH
              </div>
              <div className="text-center text-red-500 md:text-xl text-[12px] font-bold font-['SUIT'] leading-tight md:mr-[30px] mr-[15px] flex items-center justify-center flex flex-col">
                <button>
                  <Image
                    src="/images/icons/icon_claim.png"
                    width={90}
                    height={30}
                    alt="claim_button"
                    className="md:block hidden"
                  />
                </button>
                <button>
                  <Image
                    src="/images/icons/icon_claim.png"
                    width={45}
                    height={15}
                    alt="claim_button"
                    className="md:hidden block"
                  />
                </button>
                0.00 ETH
              </div>
              <div className="text-center text-indigo-200 md:text-xl text-[12px] font-bold font-['SUIT'] leading-tight md:mr-[50px] mr-[15px] flex items-center justify-center">
                <Image
                  src="/images/icons/icon_ethereum.png"
                  width={25}
                  height={25}
                  alt="network_button"
                  className="md:block hidden"
                />
                <Image
                  src="/images/icons/icon_ethereum.png"
                  width={15}
                  height={15}
                  alt="network_button"
                  className="md:hidden block"
                />
              </div>
              <div className="text-center text-indigo-200 md:text-xl text-[12px] font-normal font-['SUIT'] leading-tight flex items-center justify-center md:mr-[22px] mr-[2px]">
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
          </div>
          <div className="w-full h-[1px] bg-slate-500" />
        </div>
        {/* index */}
        <div className="w-full flex justify-center">
          <Image
            src="/images/index.png"
            width={228}
            height={28}
            alt="index_button"
            className="mt-[20px]"
          />
        </div>
      </div>
    </main>
  );
}

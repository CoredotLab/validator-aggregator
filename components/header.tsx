"use client";

import { usePathname } from "next/navigation";
import { useNavigation } from "@/hooks/useNavigation";
import { useWallet } from "@/hooks/useMetamask";
import Image from "next/image";
import { UtilMethods } from "@/utils/util";
import { useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main className="md:block hidden">
      <header className="absolute w-full top-0 h-[110px] flex items-center justify-center">
        {isHome ? <HomeHeader /> : <AppHeader />}
      </header>
      <div className="absolute top-[110px] w-full h-[1px] bg-blue-600 bg-opacity-50" />
    </main>
  );
}

const HomeHeader = () => {
  const { goToApp } = useNavigation();
  return (
    <main className="w-full flex md:justify-between justify-center">
      <div className="text-transparent md:block hidden">LOGO</div>
      <button
        onClick={goToApp}
        className="w-[161px] h-[53px] bg-blue-600 rounded-[41px] md:mr-[75px] flex justify-center items-center text-center text-white text-xl font-bold"
      >
        Launch App
      </button>
    </main>
  );
};

const AppHeader = () => {
  const { goToProfile } = useNavigation();
  const { requestAccount, isConnected, walletAddress } = useWallet();
  const { getShortAddress } = UtilMethods();

  const handleChartBtn = () => {
    goToProfile();
  };

  const handleNetworkBtn = () => {
    console.log("connect");
  };

  const handleConnectBtn = () => {
    console.log("connect");
    requestAccount();
  };

  useEffect(() => {
    console.log("HH");
  }, []);

  useEffect(() => {
    console.log("HHwalletAddress", walletAddress);
    console.log("HHisConnected", isConnected);
  }, [walletAddress, isConnected]);

  return (
    <main className="w-full flex justify-end">
      <button className="mr-[15px]" onClick={handleChartBtn}>
        <Image
          src="/images/icons/icon_chart.png"
          width={32}
          height={32}
          alt="portfolio_button"
        />
      </button>
      <button className="mr-[15px]" onClick={handleNetworkBtn}>
        <Image
          src="/images/icons/icon_ethereum.png"
          width={32}
          height={32}
          alt="network_button"
        />
      </button>

      <button
        onClick={handleConnectBtn}
        className="w-[161px] h-[53px] bg-blue-600 rounded-[41px] md:mr-[75px] flex justify-center items-center text-center text-white text-xl font-bold"
      >
        {isConnected && walletAddress
          ? getShortAddress(walletAddress)
          : "Connect"}
      </button>
    </main>
  );
};

"use client";

import { usePathname } from "next/navigation";
import { useNavigation } from "@/hooks/useNavigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main className="md:block hidden">
      <header className="absolute w-full top-0 h-[110px] flex items-center justify-center">
        {isHome ? <HomeHeader /> : <h1>Not Home</h1>}
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

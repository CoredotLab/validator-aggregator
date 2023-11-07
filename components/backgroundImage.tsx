"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BackgroundImage() {
  const pathname = usePathname();

  const getImagePath = () => {
    switch (pathname) {
      case "/":
        return "/images/background/background_home.png";
      default:
        return undefined;
    }
  };

  const imagePath = getImagePath();

  if (!imagePath) {
    return null;
  }

  return (
    <Image
      alt="background image"
      src={imagePath}
      fill
      objectFit="cover"
      quality={100}
      priority={true}
      className="z-[-100]"
    />
  );
}

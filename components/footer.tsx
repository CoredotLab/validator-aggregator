import React from "react";

export default function Footer() {
  return (
    <>
      <div className="mt-[165px] w-full h-[1px] bg-blue-600 bg-opacity-50" />
      <footer className="hidden py-[38px] pl-[75px] md:block bottom-0 left-0 w-full bg-transparent">
        <div className="container px-4 py-2">
          <p className="text-blue-100 text-opacity-80 text-xl font-thin font-['SUIT'] leading-tight">
            COREDOT @2022 Coredotlab Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

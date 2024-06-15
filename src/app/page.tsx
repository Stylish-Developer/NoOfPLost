"use client";

import { useProfileStore } from "@/store";
import { FC } from "react";

const Home: FC = () => {
  const name = useProfileStore((state) => state.name);

  return (
    <>
      <div className="h-screen">
        <div className="h-2/6 w-full bg-neutral-900"></div>
        <div className="h-4/6 w-full flex bg-white justify-center items-center">
          <h1 className="text-[20px] font-semibold text-purple-600">
            Hello {name}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;

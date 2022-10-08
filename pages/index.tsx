import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "../assets/logo.svg";

const Home: NextPage = () => {
  return (
    <div className="container px-5 pt-5 mx-auto">
      <Head>
        <title>pod3</title>
      </Head>

      <Image alt="pod3 logo" src={logo} />
      <p className="font-inter font-semibold text-3xl font-bold mt-6">
        Welcome
      </p>
      <p className="font-inter text-[20px] mt-8">
        <span className="text-[#FF0000]">Listen.</span>{" "}
        <span className="text-black">Mint.</span>{" "}
        <span className="text-[#0029FF]">Own.</span>
      </p>
      <p className="mt-1.5 text-[#8D8D8D]">
        Pod3 is the home for crypto-native audio creators. Our mission is to
        strengthen the relationship between creators and listners in a live
        format.
      </p>
      <p className="mt-16 font-inter text-[#8D8D8D]">
        To enter, sign in with your wallet.
      </p>
      <button className="hover:brightness-95 mt-4 w-full py-3 bg-[#DDE2F8] text-[#0029FF]">
        Wallet Connect
      </button>
    </div>
  );
};

export default Home;

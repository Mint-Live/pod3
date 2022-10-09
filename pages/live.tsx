import { FC, useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import bell from "../assets/bell.svg";
import Image from "next/image";
import { useAccount, useEnsAvatar } from "wagmi";
import avatar1 from "../assets/avatar1.png";

const Bar: FC<{ height: number }> = ({ height }) => {
  return (
    <div
      className="w-1.5 rounded-full transition-all bg-[#276FDB]"
      style={{ height: `${height}px` }}
    ></div>
  );
};

const LivePage: FC = () => {
  const { address } = useAccount();
  const { data } = useEnsAvatar({
    addressOrName: address,
  });
  const [avatar, setAvatar] = useState<string>();
  const [dynamicHeight, setDynamicHeight] = useState(16);

  useEffect(() => {
    if (window !== undefined) {
      const id = window.setInterval(() => {
        setDynamicHeight(Math.random() * 16);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (typeof data === "string") {
      setAvatar(data);
    }
  }, [data]);

  // const onMessage = useCallback((message) => {
  //   console.log(message);
  // }, []);

  // useSubscription(
  //   {
  //     stream: "0x5b3d38803237fa28fbd3df0ddb14009651c83709/pod3",
  //     // For more options see
  //     // https://github.com/streamr-dev/streamr-client-javascript#subscription-options
  //   },
  //   onMessage
  // );
  // useEffect(() => {
  //   const start = async () => {
  //     console.log("setting up subscription");
  //     // Subscribe to a stream
  //     client.subscribe("streamr.eth/demos/helsinki-trams", (a, b) => {
  //       // This function will be called when new messages occur
  //       console.log("message", a, b);
  //     });

  //     // setInterval(() => {
  //     //   console.log(subscription.length);
  //     // }, 2000);
  //   };

  //   start();
  // }, []);

  // useEffect(() => {
  //   // Or subscribe to a stream of messages
  //   const socket = new WebSocket(
  //     `ws://my-streamr-node:7170/streams/0x5b3d38803237fa28fbd3df0ddb14009651c83709/pod3/subscribe`
  //   );
  //   socket.addEventListener("message", console.log);
  // }, []);

  return (
    <div className="bg-white min-h-[100vh]">
      <div className="w-full bg-gray-100">
        <div className="flex ml-5 py-5 justify-between">
          <Image alt="pod3 logo" src={logo} width={75} />
          <div className="flex gap-x-2 items-center">
            <Image alt="pod3 logo" src={bell} width={27} />
            <div className="h-8 w-0.5 bg-gray-400"></div>
            {avatar ? (
              <Image
                className="rounded-full"
                alt="pod3 logo"
                src={avatar}
                width={36}
                height={36}
              />
            ) : (
              <div className="w-4 h-4 rounded-full"></div>
            )}
          </div>
        </div>
      </div>
      <div className="px-5 mt-6">
        <div className="flex">
          <div className="font-inter font-semibold flex bg-red-200 h-6 rounded-full text-red-500 px-3">
            LIVE
          </div>
          <div className="font-inter text-[#8D8D8D] font-bold ml-4">
            MINT PODCAST • S6E1
          </div>
        </div>
        <h1 className="font-inter font-bold text-[30px] leading-tight mt-4">
          Music NFT Monday: Industry Deep Dive
        </h1>
        <div className="mt-5">
          <p className="font-inter font-medium text-[#8D8D8D]">Adam Levy</p>
          <div className="flex items-center mt-2">
            <Image src={avatar1} />
            <div className="flex ml-4 scale-y-[-1]">
              {new Array(16).fill(undefined).map((_, index) => (
                <Bar key={index} height={4 + 12 * Math.random()} />
              ))}
              <div
                className="w-1.5 rounded-full transition-all bg-[#276FDB]"
                style={{ height: `${dynamicHeight}px` }}
              ></div>
              <div
                className="w-1.5 rounded-full transition-all bg-[#276FDB]"
                style={{ height: `${dynamicHeight}px` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// <div className="invisible">
//   <iframe
//     src="https://lvpr.tv?v=8f9arlimtarch97i"
//     // frameborder="0"
//     // allowfullscreen
//     allow="autoplay; encrypted-media; picture-in-picture"
//     sandbox="allow-scripts"
//   ></iframe>
// </div>
export default LivePage;


import React from "react";
import image1 from "@/../../public/image/istockphoto-1298192529-612x612.webp"
import Image from "next/image";

const Flex = () => {
    return (
        <div className="w-[1920px] mx-auto  mt-10 px-10">
            <div className=" flex justify-between h-[800px]">
                <div className="w-[345px] h-[800px] ">
                    <div className="w-full h-[49%] bg-yellow-200">
                        <Image src={image1} alt="1" width={100} height={100} className=" w-full h-full object-contain"/>
                    </div>
                    <div className="w-full h-[49%] bg-yellow-200 mt-2"></div>
                </div>
                <div className="w-[455px] h-[800px] bg-red-400 ">
                    <div className="flex justify-between">
                        <div className="w-[49%] h-14 bg-green-600"></div>
                        <div className="w-[49%] h-14 bg-green-600"></div>
                    </div>
                    <div className=" w-full h-[600px] bg-red-500 mt-10"></div>
                </div>
                <div className="w-[345px] h-[800px] bg-red-400">
                    <div className="w-full h-[350px] bg-orange-600"></div>
                    <div className="w-full h-[350px] bg-orange-600 mt-2"></div>
                </div>
                <div className="w-[455px] h-[800px]  bg-green-600">
                   <div className="w-[257px] h-[300px] bg-red-950"></div>
                    <div className=" w-full h-[200px] bg-black flex justify-between">
                        <div className="w-[49%] h-[100px] bg-red-500"></div>
                        <div className="w-[49%] h-[100px] bg-red-500"></div>
                    </div>
                </div>
                <div className="w-[230px] h-[800px] bg-red-400">
                    <div className="w-full h-[200px] bg-green-400"></div>
                    <div className="w-full h-[200px] bg-green-400 mt-3"></div>
                    <div className="w-full h-[200px] bg-green-400 mt-3"></div>
                </div>
              
            </div>

            {/* <div className=" flex justify-between mt-10">
              <div className="w-[15%] h-[300px] bg-red-400"></div>
              <div className="w-[15%] h-[300px] bg-red-400"></div>
              <div className="w-[15%] h-[300px] bg-red-400"></div>
              <div className="w-[15%] h-[300px] bg-red-400"></div>
              <div className="w-[15%] h-[300px] bg-red-400 flex justify-between">
                  <div className="w-[48%] h-full bg-green-400"></div>
                  <div className="w-[48%] h-full bg-green-400"></div>
              </div>
              <div className="w-[15%] h-[300px] bg-red-400"></div>
          </div> */}
        </div>
    );
};

export default Flex;

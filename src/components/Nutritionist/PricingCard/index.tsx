import React from "react";

export interface Price_Card {
  header:string;
  description:string;
  salary:string;
}

export const PriceCard: React.FC<Price_Card> = (props) => {
  return (
    <div className="justify-between flex p-[30px] flex-col items-start gap-[24px] self-stretch rounded-[10px] border-[1px] border-solid border-[#EEF8D3] bg-[#F6FBE9] sm:self-auto sm:flex-1 sm:p-[40px] sm:gap-[30px] md:p-[50px] md:gap-[40px] rounded-[12px]">
        <div className="flex flex-col items-start self-stretch md:gap-[2px]">
            <h1 className="self-stretch text-[#262626] font-Urbanist text-[22px] not-italic font-semibold leading-[150%] sm:text-[24px] md:text-[30px]">{props.header}</h1>
            <p className="self-stretch text-[#4C4C4D] font-Urbanist text-[14px] not-italic font-medium leading-[150%] sm:text-[16px] md:text-[18px]">
            Up to 50% off on Yearly Plan
            </p>
        </div>
        <p className="self-stretch text-[#262626] font-Urbanist text-[14px] not-italic font-medium leading-[150%] sm:text-[16px] md:text-[18px]">{props.description}</p>
        <div className="flex flex-col items-start gap-[24px] self-stretch md:gap-[33px]">
            <div className="flex justify-center items-center gap-[2px] md:gap-[4px]">
                <h1 className="text-[#2C5446] font-Urbanist text-[40px] not-italic font-bold leading-[87.5%] md:text-[50px]">{props.salary}</h1>
                <p className="text-[#333] font-Urbanist text-[16px] not-italic font-medium leading-[150%] md:text-[18px]">/month</p>
            </div>
            <button className="text-[#262626] font-Urbanist text-[14px] not-italic font-semibold leading-normal md:text-[18px] flex px-[24px] py-[14px] justify-center items-center gap-[10px] self-stretch rounded-[6px] bg-[#CBEA7B] md:px-[41px] md:py-[18px] rounded-[8px]">Choose Plan</button>
        </div>
    </div>
  );
};

import React from "react";

export interface Test_Card {
  icon:any;
  descriptions:string;
  img:string;
  name:string;
}

export const TestCard: React.FC<Test_Card> = (props) => {
  return (
    <div className="flex-1 flex flex-col justify-between self-stretch rounded-[10px] border-[1px] border-solid border-[#EEF8D3] bg-[#FAFDF2] sm:self-auto md:rounded-[12px]">
        <div className="flex p-[24px] flex-col items-start gap-[40px] self-stretch rounded-[16px] sm:p-[30px] md:p-[40px]">
            {props.icon}
            <p className="self-stretch text-[#333] font-Urbanist text-[14px] not-italic font-medium leading-[150%] sm:text-[16px] md:text-[18px]">{props.descriptions}</p>
        </div>
        <div className="flex px-[24px] py-[18px] items-center gap-[10px] self-stretch bg-[#F6FBE9] sm:px-[30px] sm:py-[20px] md:px-[40px] md:py-[30px] gap-[12px]">
            <img src={props.img} style={{background: "url(<path-to-image>), lightgray 50% / cover no-repeat"}} className="w-[40px] h-[40px] rounded-[6px] object-cover sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] md:rounded-[8px]" />
            <p className="flex-1 text-[#1A3129] font-Urbanist text-[16px] not-italic font-semibold leading-[150%] md:text-[18px]">{props.name}</p>
        </div>
    </div>
  );
};

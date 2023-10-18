import React from "react";

export interface Blog_Card {
  img: any;
  purpose: string;
  title: string;
  description: string;
  imgPartner: any;
  partnerName: string;
  partnerTime: string;
  iconLove: any;
  iconBook: any;
}

// export const BlogCard: React.FC<Blog_Card> = ({
//   img,
//   purpose,
//   title,
//   description,
//   imgPartner,
//   partnerName,
//   partnerTime,
//   iconLove,
//   iconBook,
// }: Blog_Card) => {
//   return <div className=""></div>;
// };
export const BlogCard: React.FC<Blog_Card> = (props) => {
  return (
    <div className="flex-1 flex p-[24px] flex-col items-start gap-[20px] self-stretch rounded-[10px] md:rounded-[12px] border-[1px] border-solid border-[#EEF8D3] bg-[#F6FBE9] sm:gap-[40px] sm:p-[30px] md:p-[40px]">
        <img src={props.img} className="object-cover sm:h-[336px] md:h-[428px] self-stretch rounded-[10px] sm:rounded-[12px]" style={{background: "url(<path-to-image>), lightgray 50% / cover no-repeat"}} />
        <div className="flex flex-col gap-[18px] items-start self-stretch sm:gap-[20px] md:gap-[30px]">
            <div className="flex flex-col items-start self-stretch sm:gap-[2px] md:gap-[4px]">
                <p className="self-stretch text-[#333] font-Urbanist text-[14px] not-italic font-medium leading-[150%] sm:text-[16px] md:text-[18px]">{props.purpose}</p>
                <p className="self-stretch text-[#262626] font-Urbanist text-[20px] not-italic font-semibold leading-[150%] md:text-[26px] sm:text-[22px]">{props.title}</p>
            </div>
            <p className="self-stretch text-[#4C4C4D] font-Urbanist text-[14px] not-italic font-medium leading-[150%] sm:text-[16px] md:text-[18px]">
                {props.description}
            </p>
            <div className="flex py-[16px] pr-[16px] pl-[14px] flex-col justify-center items-end gap-[20px] self-stretch rounded-[10px] border-[1px] border-solid border-[#EEF8D3] bg-[#FAFDF2] sm:flex-row sm:items-center sm:justify-normal md:py-[20px] md:pr-[16px] md:pl-[20px]">
                <div className=" flex-wrap flex items-center gap-[10px] self-stretch sm:gap-[14px] sm:self-auto sm:flex-1 md:gap-[16px]">
                    <img style={{background: "url(<path-to-image>), lightgray 50% / cover no-repeat"}} src={props.imgPartner} className="object-cover w-40px roumded-[6px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] md:rounded-[8px]"/>
                    <div className="flex flex-col items-start flex-1">
                        <p className="self-stretch text-[#1A3129] font-Urbanist text-[16px] not-italic font-semibold leading-[150%] sm:text-[18px] md:text-[20px]">{props.partnerName}</p>
                        <p className="self-stretch text-[#59595A] font-Urbanist text-[14px] not-italic font-medium leading-[150%] sm:text-[16px] md:text-[18px]">{props.partnerTime}</p>
                    </div>
                </div>
                <div className="flex items-start gap-[8px] md:gap-[10px] flex-wrap">
                    <div className="flex p-[14px] items-start gap-[10px] rounded-[6px] border-[1px] border-solid border-[#EEF8D3] bg-[#F6FBE9] md:rounded-[8px]">{props.iconBook}</div>
                    <div className="flex p-[14px] items-start gap-[10px] rounded-[6px] border-[1px] border-solid border-[#EEF8D3] bg-[#F6FBE9] md:rounded-[8px]">{props.iconLove}</div>
                </div>
            </div>
        </div>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Nutritionist: React.FC = () => {
  return (
    <div>
    <div className="flex flex-col justify-center items-start gap-[-28px] sm:flex-row sm:jusitfy-normal sm:items-stretch sm:gap-[40px] md:gap-[50px]">
      <img
        src="./src/img/homepage-1.png"
        style={{
          background:
            "url(<path-to-image>), lightgray 50% / cover no-repeat, url(<path-to-image>), lightgray 0% 0% / 80.0000011920929px 80.0000011920929px repeat, #DCF1A7",
        }}
        className="self-stretch h-[374px] object-cover rounded-br-[50px] sm:self-auto sm:w-[50vw] sm:h-[712px] md:h-[832px]"
      />
      <div className="relative sm:static md:static flex px-[16px] flex-col items-center gap-[30px] self-stretch sm:p-[0px] items-start gap-[50px] flex-1 md:gap-[70px]">
        <div className="mt-[110px] sm:mt-0 md:mt-0 order-2 sm:order-1 md:order-1 flex flex-col items-center gap-[30px] self-stretch sm:items-start sm:gap-[40px] md:gap-[50px]">          
          <div className="flex flex-col items-center gap-[16px] self-stretch sm:items-start md:gap-[20px]">
            <div className="flex flex-col items-center gap-[10px] self-stretch sm:items-start  md:gap-[14px]">
              <div className="flex py-[8px] items-center gap-[10px] border-b-[3px] border-solid border-[#CBEA7B] md:py-[10px]">
                <p className="text-[#1A3129] font-Urbanist text-[18px] not-italic font-semibold leading-normal sm:text-[22px] md:text-[28px]">Transform Your ❤️ Health with</p>
              </div>
              <p className="self-stretch text-[#1A3129] text-center font-Urbanist text-[38px] not-italic font-bold leading-normal sm:text-left sm:text-[48px] md:text-[58px]">Personalized Nutrition Coaching</p>
            </div>
            <p className="self-stretch text-[#333] text-center font-Urbanist text-[14px] not-italic font-medium leading-[150%] sm:text-[16px] sm:text-left md:text-[18px]">
              Welcome to Nutritionist, your partner in achieving optimal health
              through personalized nutrition coaching. Our certified
              nutritionists are here to guide you on your weight loss journey,
              providing customized plans and ongoing support. Start your
              transformation today and experience the power of personalized
              nutrition coaching.
            </p>
          </div>
          <div className="flex items-start gap-[14px] md:gap-[20px]">
            <button className="hover:bg-[#d8eea2] flex px-[16px] py-[14px] items-center gap-[8px] rounded-[6px] bg-[#CBEA7B] text-[#262626] font-Urbanist text-[14px] not-italic font-semibold leading-[150%] md:text-[18px] md:px-[20px] md:py-[16px] md:rounded-[8px]">
            Get Starter Today
            </button>
            <button className="hover:bg-[#d8eea2] flex border-[1px] border-solid border-[#E5F5BD] bg-[#F6FBE9] px-[20px] py-[14px] items-center gap-[8px] rounded-[6px] bg-[#CBEA7B] text-[#262626] font-Urbanist text-[14px] not-italic font-semibold leading-[150%] md:text-[18px] md:px-[24px] md:py-[16px] md:rounded-[8px]">
            Book a Demo
            </button>
          </div>
        </div>
        <div className="absolute top-[-26px] left-[calc(50%-81px)] w-[162px] sm:static md:static order-1 flex flex-col justify-center items-center gap-[4px] self-stretch sm:order-2 md:order-2 sm:flex-row sm:gap-[6px] sm:justify-normal md:gap-[8px]">
          <div className="relative w-[102px] shrink-0 h-[52px] md:h-[66px] md:w-[130px] flex px-[8px] py-[6px] items-center gap-[-17px] rounded-[58px] border-[1px] border-solid border-[#CBEA7B] bg-[#FAFDF2] sm:bg-transparent md:px-[10px] md:py-[8px] gap-[-20px]">
            <img
              src="./src/img/homepage-2.png"
              className="absolute left-[8px] md:left-[10px] w-[40px] h-[40px] rounded-[53px] md:w-[50px] md:h-[50px]"
            />
            <img
              src="./src/img/homepage-3.png"
              className="absolute left-[31px] md:left-[40px] w-[40px] h-[40px] rounded-[53px] md:w-[50px] md:h-[50px]"
            />
            <img
              src="./src/img/homepage-4.png"
              className="absolute left-[54px] md:left-[70px] w-[40px] h-[40px] rounded-[53px] md:w-[50px] md:h-[50px]"
            />
          </div>
          <div className="flex">
          <p className="text-[#468671] font-Urbanist text-[16px] not-italic font-bold leading-[150%] sm:text-[18px] md:text-[20px]">
            430+
          </p>
          <p className="text-[#234338] font-Urbanist text-[16px] not-italic font-semibold leading-[150%] sm:text-[18px] md:text-[20px]">
            Happy Customers
          </p>
          </div>
        </div>
      </div>
    </div>
    {/* <div>dw</div>       */}
    </div>
  );
};

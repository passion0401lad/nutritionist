import { PATH } from "consts";
import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Log_In {
  userInfo: {email: string, password: string};
  onChange: (e:ChangeEvent<HTMLInputElement>)=>void;
  onSubmit: ()=>void
}

export const LogIn: React.FC<Log_In> = (props) => {
    const navigate = useNavigate();

  return (
    <div className="overflow-auto h-[calc(100vh-153px-249px)] gap-[12px] px-[24px] py-[30px] flex flex-col items-center">
      <h1 className="text-[#1A3129] font-Urbanist text-[58px] not-italic font-bold leading-[150%] uppercase">
        Log In
      </h1>
      <p className="text-[#1A3129] text-center font-Urbanist text-[18px] not-italic font-medium leading-[150%] uppercase">
        Create a developer profile/portfolio, share posts and get help from
        other developers
      </p>
      <div className="flex flex-col items-stretch mt-[20px]">
        <div className="gap-[5px] flex flex-col items-stretch px-[8px] py-[12px]">
          <p className="pl-[16px] text-[#468671] font-Urbanist text-[12px] not-italic font-medium leading-[14px] uppercase">
            EMAIL*
          </p>
          <input
            type="email"
            name="email"
            value={props.userInfo.email}
            className="border-[#CBEA7B] border-solid border-[1px] bg-[#F6FBE9] w-[50vw] flex-shrink rounded-[5px] py-[16px] pl-[22px] text-[#468671] font-Urbanist text-[14px] not-italic font-medium leading-[14px]"
            placeholder="passion0401lad@gmail.com"
            onChange={props.onChange}
          />
        </div>
        <div className="gap-[5px] flex flex-col items-stretch px-[8px] py-[12px]">
          <p className="pl-[16px] text-[#468671] font-Urbanist text-[12px] not-italic font-medium leading-[14px] uppercase">
            PASSWORD
          </p>
          <input
            type="password"
            name="password"
            value={props.userInfo.password}
            className="border-[#CBEA7B] border-solid border-[1px] bg-[#F6FBE9] w-[50vw] flex-shrink rounded-[5px] py-[16px] pl-[22px] text-[#468671] font-Urbanist text-[14px] not-italic font-medium leading-[14px]"
            placeholder="password"
            onChange={props.onChange}
          />
        </div>
      </div>
      <p className="text-[#1A3129] text-center font-Urbanist text-[12px] not-italic font-medium leading-[150%] uppercase">
        If you are not registered, please click Sign Up button.
      </p>
      <div className="flex w-[25vw] justify-between px-[24px]">
        <button onClick={props.onSubmit} className="w-[100px] rounded-[8px] bg-[#CBEA7B] hover:bg-[#a5c25b] px-[16px] py-[12px] md:px-[24px] md:py-[14px] font-Urbanist text-[14px] not-italic font-semibold leading-[150%]">
          Log In
        </button>
        {/* <Link to="/signup"> */}
          <button onClick={()=>navigate(PATH.SIGNUP)} className="w-[100px] rounded-[8px] bg-[#CBEA7B] hover:bg-[#a5c25b] px-[16px] py-[12px] md:px-[24px] md:py-[14px] font-Urbanist text-[14px] not-italic font-semibold leading-[150%]">
            Sign Up
          </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

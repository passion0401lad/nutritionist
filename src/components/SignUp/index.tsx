import dayjs, { Dayjs } from "dayjs";
import DatePickerValue from "../DatePickerValue";
import React, { ChangeEvent, useState } from "react";
import { UserModel } from "models";

interface Sign_Up {
  userInfo: UserModel;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  setGender: () => void;
  birthdayChange: (date: Dayjs | null) => void;
  selectedFile: Record<number, File> | null;
  onChangeFile: (e: any) => void;
  // fileUpload: (e:any) => void;
}

export const SignUp: React.FC<Sign_Up> = (props) => {
  const {userInfo, onChange, onSubmit, onChangeFile, setGender, birthdayChange, selectedFile} = props;

  return (
    <div className="overflow-auto h-[calc(100vh-153px-249px)] gap-[12px] px-[24px] py-[30px] flex flex-col items-center">
      <h1 className="text-[#1A3129] font-Urbanist text-[58px] not-italic font-bold leading-[150%] uppercase">
        Sign Up
      </h1>
      <p className="text-[#1A3129] text-center font-Urbanist text-[18px] not-italic font-medium leading-[150%] uppercase">
        Create a developer profile/portfolio, share posts and get help from
        other developers
      </p>
      <div className="flex flex-col items-stretch mt-[20px]">
        <div className="gap-[5px] flex flex-col items-stretch px-[8px] py-[12px]">
          <p className="pl-[16px] text-[#468671] font-Urbanist text-[12px] not-italic font-medium leading-[14px] uppercase">
            NAME*
          </p>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={onChange}
            className="border-[#CBEA7B] border-solid border-[1px] bg-[#F6FBE9] w-[50vw] flex-shrink rounded-[5px] py-[16px] pl-[22px] text-[#468671] font-Urbanist text-[14px] not-italic font-medium leading-[14px]"
            placeholder="passion0401lad"
          />
        </div>
        <div className="gap-[5px] flex flex-col items-stretch px-[8px] py-[12px]">
          <p className="pl-[16px] text-[#468671] font-Urbanist text-[12px] not-italic font-medium leading-[14px] uppercase">
            EMAIL*
          </p>
          <input
            type="text"
            name="email"
            value={userInfo.email}
            onChange={onChange}
            className="border-[#CBEA7B] border-solid border-[1px] bg-[#F6FBE9] w-[50vw] flex-shrink rounded-[5px] py-[16px] pl-[22px] text-[#468671] font-Urbanist text-[14px] not-italic font-medium leading-[14px]"
            placeholder="passion0401lad@gmail.com"
          />
        </div>
        <div className="flex justify-between">
          <div className="w-[30vw] h-[100%] ml-[8px] flex p-[10px] items-center justify-between rounded-[8px] border-[1px] border-solid border-[#DCF1A7]">
            <div className="flex flex-col gap-[5px] ml-[10px]">
              <p className="text-center text-[#468671] font-Urbanist text-[12px] not-italic font-medium leading-[14px] uppercase">
                GENDER
              </p>
              <div className="flex gap-[3px]">
                <button
                  onClick={setGender}
                  className={
                    (userInfo.sex
                      ? "hover:bg-[#386b59] bg-[#234338] text-[#fff] "
                      : "hover:bg-[#57a387] hover:text-[#fff] text-[#4C4C4C] ") +
                    "h-[29px] w-[60px] hidden min-[270px]:flex font-Urbanist text-[10px] not-italic font-semibold leading-[150%] flex px-[24px] py-[10px] justify-center items-center gap-[10px] rounded-[6px]"
                  }
                >
                  Male
                </button>
                <button
                  onClick={setGender}
                  className={
                    (!userInfo.sex
                      ? "hover:bg-[#386b59] bg-[#234338] text-[#fff] "
                      : "hover:bg-[#57a387] hover:text-[#fff] text-[#4C4C4C] ") +
                    "h-[29px] w-[60px] hidden min-[270px]:flex font-Urbanist text-[10px] not-italic font-semibold leading-[150%] flex px-[24px] py-[10px] justify-center items-center gap-[10px] rounded-[6px]"
                  }
                >
                  Female
                </button>
              </div>
            </div>
            <DatePickerValue
              className=""
              label="Birthday*"
              value={userInfo.birthday}
              onChange={birthdayChange}
            />
          </div>
          <div className="flex justify-between items-center gap-[10px] pl-[16px] pr-[24px]">
            <p className="text-center text-[#468671] font-Urbanist text-[12px] not-italic font-medium leading-[14px] uppercase">
              AVATAR
            </p>
            <label className="flex h-[36px] md:h-[44px] p-[12px] md:p-[14px] flex-col items-start gap-[10px] rounded-[73px] bg-[#234338] hover:bg-[#2e5548]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="w-[12px] h-[12px] md:w-[16px] md:h-[16px]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0002 18C11.5031 18 11.1002 17.5971 11.1002 17.1L11.1002 9.1345L8.74895 11.7238C8.40443 12.0821 7.83469 12.0933 7.4764 11.7487C7.1181 11.4042 7.10693 10.8345 7.45145 10.4762L11.3514 6.2762C11.5211 6.09973 11.7554 6 12.0002 6C12.245 6 12.4793 6.09973 12.6489 6.2762L16.5489 10.4762C16.8935 10.8345 16.8823 11.4042 16.524 11.7487C16.1657 12.0933 15.596 12.0821 15.2514 11.7238L12.9002 9.1345V17.1C12.9002 17.5971 12.4973 18 12.0002 18Z"
                  fill="white"
                />
              </svg>
              <input
                type="file"
                onChange={onChangeFile}
                multiple
                className="hidden"
              />
            </label>
            {selectedFile && (
              <img
                src={URL.createObjectURL(selectedFile[0])}
                className="w-[50px] h-[50px] rounded-[50%] md:w-[60px] md:h-[60px]"
              />
            )}
          </div>
        </div>
        <div className="gap-[5px] flex flex-col items-stretch px-[8px] py-[12px]">
          <p className="pl-[16px] text-[#468671] font-Urbanist text-[12px] not-italic font-medium leading-[14px] uppercase">
            PASSWORD
          </p>
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={onChange}
            className="border-[#CBEA7B] border-solid border-[1px] bg-[#F6FBE9] w-[50vw] flex-shrink rounded-[5px] py-[16px] pl-[22px] text-[#468671] font-Urbanist text-[14px] not-italic font-medium leading-[14px]"
            placeholder="password"
          />
        </div>
        <div className="gap-[5px] flex flex-col items-stretch px-[8px] py-[12px]">
          <p className="pl-[16px] text-[#468671] font-Urbanist text-[12px] not-italic font-medium leading-[14px] uppercase">
            CONFIRM PASSWORD
          </p>
          <input
            type="password"
            name="confirmPassword"
            value={userInfo.confirmPassword}
            onChange={onChange}
            className="border-[#CBEA7B] border-solid border-[1px] bg-[#F6FBE9] w-[50vw] flex-shrink rounded-[5px] py-[16px] pl-[22px] text-[#468671] font-Urbanist text-[14px] not-italic font-medium leading-[14px]"
            placeholder="confirm password"
          />
        </div>
      </div>
      <button
        onClick={onSubmit}
        className="w-[100px] rounded-[8px] bg-[#CBEA7B] hover:bg-[#a5c25b] px-[16px] py-[12px] md:px-[24px] md:py-[14px] font-Urbanist text-[14px] not-italic font-semibold leading-[150%]"
      >
        Sign Up
      </button>
    </div>
  );
};

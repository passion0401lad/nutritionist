import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
      <div
        style={{
          borderBottom: "1px solid var(--dark-green-20, #234338)",
          background: "var(--dark-green-15, #1A3129)",
        }}
        className="flex flex-col items-start gap-[10px] self-stretch pt-[40px] pb-[14px] px-[16px] sm:px-[80px] sm:py-[14px] relative md:px-[162px] md:py-[14px]"
      >
        <div
          style={{
            borderRadius: "6px",
            border: "1px solid var(--dark-green-25, #2C5446)",
            background: "var(--dark-green-20, #234338)",
          }}
          className="z-10 sm:relative md:relative flex px-[20px] py-[10px] justify-center items-center gap-[14px] self-stretch md:gap-[20px]"
        >
          <div className="flex items-center gap-[6px] ">
            <div className="flex justify-center items-center pt-[1.429px] pl-[1.496px] pb-[1.487px] pr-[1.429px] w-[20px] h-[20px] md:w-[24px] md:h-[24px] md:pt-[1.714px] md:pl-[1.795px] md:pb-[1.785px] md:pr-[1.714px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="hover:animate-pulse w-[17.076px] h-[17.084px] shrink-0 md:w-[20.491px] h-[20.491px]"
              >
                <path
                  d="M0.428711 8.96664C0.428711 10.3646 0.771903 11.6787 1.39133 12.8506L2.83943 11.4025C3.03195 11.21 3.32492 11.21 3.51744 11.4025C3.70996 11.595 3.71833 11.888 3.51744 12.0889L1.89355 13.7128C2.10282 14.0057 2.31208 14.2903 2.55483 14.5498L14.5581 2.55483C14.2903 2.31208 13.9974 2.09445 13.7128 1.89355L12.0721 3.53418C11.8796 3.7267 11.5783 3.71833 11.3857 3.53418C11.1932 3.34165 11.1932 3.04869 11.3857 2.8478L12.8422 1.3997C11.6787 0.771903 10.3561 0.428711 8.95828 0.428711C4.2959 0.428711 0.428711 4.2959 0.428711 8.96664ZM10.7914 4.81487L9.64464 5.96163C9.45214 6.15415 9.15078 6.14579 8.95828 5.96163C8.77414 5.76911 8.76578 5.4594 8.95828 5.27525L10.1134 4.12849C10.3059 3.94434 10.6073 3.93597 10.7914 4.12849C10.9839 4.32101 10.9839 4.62235 10.7914 4.81487ZM8.37235 7.24233L7.21722 8.38907C7.03306 8.57321 6.73173 8.57321 6.5392 8.38907C6.34668 8.19657 6.34668 7.89521 6.5392 7.70271L7.686 6.55594C7.8785 6.36342 8.17985 6.36342 8.37235 6.55594C8.5565 6.7401 8.56485 7.05818 8.37235 7.24233ZM5.9449 9.66143L4.8065 10.8081C4.60561 11.0007 4.31264 10.9924 4.12012 10.8081C3.9276 10.6156 3.9276 10.3227 4.12012 10.1301L5.25851 8.975C5.45103 8.7825 5.75237 8.79085 5.9449 8.975C6.12905 9.16757 6.14579 9.46885 5.9449 9.66143ZM8.96664 17.5046C13.6374 17.5046 17.5046 13.6291 17.5046 8.96664C17.5046 7.57714 17.1614 6.2546 16.542 5.0911L15.0939 6.53083C14.893 6.73173 14.6084 6.72335 14.4159 6.53083C14.2317 6.33831 14.215 6.04534 14.4159 5.84445L16.0398 4.22893C15.8389 3.93597 15.6296 3.65137 15.3869 3.39188L3.38351 15.3869C3.65137 15.6212 3.93597 15.8389 4.22056 16.0398L5.86119 14.3991C6.06208 14.1899 6.35505 14.2066 6.54758 14.3991C6.7401 14.5916 6.74847 14.8763 6.54758 15.0771L5.08273 16.542C6.2546 17.1531 7.56878 17.5046 8.96664 17.5046ZM13.8132 7.80314L12.6748 8.95828C12.4823 9.15078 12.1809 9.14243 11.9884 8.95828C11.8043 8.75743 11.7959 8.46443 11.9884 8.27193L13.1352 7.12514C13.3277 6.93262 13.6207 6.93262 13.8132 7.12514C14.0141 7.30929 14.0057 7.61064 13.8132 7.80314ZM11.3941 10.2306L10.2474 11.369C10.0549 11.5699 9.7535 11.5699 9.561 11.369C9.37678 11.1849 9.36843 10.8751 9.561 10.6826L10.7161 9.54421C10.9003 9.36007 11.21 9.36007 11.3941 9.54421C11.5866 9.73671 11.5866 10.0297 11.3941 10.2306ZM8.975 12.6497L7.81993 13.7964C7.62735 13.9806 7.3344 13.989 7.14188 13.7964C6.94936 13.6039 6.94936 13.3026 7.14188 13.1101L8.28864 11.9633C8.48114 11.7708 8.7825 11.7875 8.975 11.9633C9.15921 12.1642 9.16757 12.4656 8.975 12.6497Z"
                  fill="#CBEA7B"
                />
              </svg>
            </div>
            <p
              className="font-Urbanist text-[14px] w-[100%] not-italic font-medium leading-normal sm:text-[16px] md:text-[18px]"
              style={{ color: "var(--absolute-white, #FFF)" }}
            >
              Join Our Personalized Nutrition Demo For Free
            </p>
          </div>
          <button className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="hover:animate-ping w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.6001 12.0002C3.6001 11.5031 4.00304 11.1002 4.5001 11.1002L17.2656 11.1002L12.2763 6.34894C11.918 6.00443 11.9068 5.43469 12.2513 5.0764C12.5959 4.7181 13.1656 4.70693 13.5239 5.05144L20.1239 11.3514C20.3004 11.5211 20.4001 11.7554 20.4001 12.0002C20.4001 12.245 20.3004 12.4793 20.1239 12.6489L13.5239 18.9489C13.1656 19.2935 12.5959 19.2823 12.2513 18.924C11.9068 18.5657 11.918 17.996 12.2763 17.6514L17.2656 12.9002L4.5001 12.9002C4.00304 12.9002 3.6001 12.4973 3.6001 12.0002Z"
                fill="white"
              />
            </svg>
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="196"
            height="44"
            viewBox="0 0 196 44"
            fill="none"
            className="hidden absolute min-[950px]:block sm:w-[144px] md:block left-[40px] sm:absolute sm:top-[0px] md:w-[194.175px] md:h-[48px] md:bottom-[-32px]"
          >
            <path
              d="M115.457 -24L46.1803 6.28571L115.457 -10.9524L48.9915 18.0952L158.629 -13.2381L1 48.7619L195.175 -8.38095L46.1803 47.0476L158.629 20.381L67.2644 57.4286L152.002 34.4762L97.3846 76"
              stroke="#CBEA7B"
              stroke-width="4.11765"
              stroke-dasharray="0.35 0.35"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="196"
            height="44"
            viewBox="0 0 196 44"
            fill="none"
            className="hidden absolute min-[950px]:block md:block sm:w-[144px] sm:right-[65px] sm:absolute sm:bottom-[0px] md:w-[194.175px] md:h-[48px] md:right-[39.825px]"
          >
            <path
              d="M80.7181 -24L149.995 6.28571L80.7181 -10.9524L147.183 18.0952L37.5459 -13.2381L195.175 48.7619L1.00005 -8.38095L149.995 47.0476L37.5459 20.381L128.91 57.4286L44.1723 34.4762L98.7902 76"
              stroke="#CBEA7B"
              stroke-width="4.11765"
              stroke-dasharray="0.35 0.35"
            />
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="76"
          viewBox="0 0 60 76"
          fill="none"
          className="z-0 absolute left-[0px] bottom-[-26px] sm:hidden md:hidden"
        >
          <path
            d="M-0.302062 1L-51.5666 23.4114L-0.302062 10.6552L-49.4863 32.1505L31.6454 8.96381L-85 54.8438L58.6893 12.5581L-51.5666 53.5752L31.6454 33.8419L-35.9644 61.2571L26.7418 44.2724L-13.6754 75"
            stroke="#CBEA7B"
            stroke-width="2"
            stroke-dasharray="0.35 0.35"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="73"
          height="76"
          viewBox="0 0 73 76"
          fill="none"
          className="z-0 absolute right-[0px] bottom-[-43px] sm:hidden md:hidden"
        >
          <path
            d="M60.1189 1L111.494 23.4114L60.1189 10.6552L109.41 32.1505L28.1024 8.96381L145 54.8438L0.999994 12.5581L111.494 53.5752L28.1024 33.8419L95.8583 61.2571L33.0165 44.2724L73.5212 75"
            stroke="#CBEA7B"
            stroke-width="2"
            stroke-dasharray="0.35 0.35"
          />
        </svg>
      </div>
  );
};

interface Menu_Type {
  onSubmit:()=>void;
  token: string | null
}

export const Menu: React.FC<Menu_Type> = (props) => {
  return (
      <div
        style={{
          borderBottom: "1px solid var(--green-90, #EEF8D3)",
          background: "var(--dark-green-15, #1A3129)",
        }}
        className="sticky top-0 z-10 flex justify-between items-center self-stretch px-[16px] py-[20px] sm:px-[80px] sm:py-[16px] md:px-[162px] md:py-[20px]"
      >
        <div className="flex w-[147px] justify-center items-center gap-[6px] md:w-[193px] md:gap-[8px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            className="w-[34px] h-[34px] md:w-[45px] md:h-[45px]"
          >
            <path
              d="M16.8986 13.7498C11.7463 8.73683 15.2954 0 22.4839 0C29.6725 0 33.2215 8.73684 28.0693 13.7498L22.4839 19.1842L16.8986 13.7498Z"
              fill="#CBEA7B"
            />
            <path
              d="M16.9308 31.2502C11.7786 36.2632 15.3276 45 22.5162 45C29.7047 45 33.2537 36.2632 28.1015 31.2502L22.5162 25.8158L16.9308 31.2502Z"
              fill="#CBEA7B"
            />
            <path
              d="M13.7498 28.1014C8.73683 33.2537 0 29.7046 0 22.5161C0 15.3275 8.73684 11.7785 13.7498 16.9307L19.1842 22.5161L13.7498 28.1014Z"
              fill="#CBEA7B"
            />
            <path
              d="M31.2502 28.0692C36.2632 33.2214 45 29.6724 45 22.4838C45 15.2953 36.2632 11.7463 31.2502 16.8985L25.8158 22.4838L31.2502 28.0692Z"
              fill="#CBEA7B"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="108"
            height="13"
            viewBox="0 0 108 13"
            fill="none"
            className="w-[106px] h-[13px] shrink-0 md:w-[140px] md:h-[16.5px]"
            style={{ fill: "#fff" }}
          >
            <path
              d="M10.1099 9.60077V1.04977H12.6939V12.9498H8.97091L3.75191 4.41577H3.46291V12.9498H0.878906V1.04977H4.36391V1.06677H4.60191L9.80391 9.60077H10.1099Z"
              fill="white"
            />
            <path
              d="M22.0949 3.41277H24.6789V12.9498H22.0949V11.5558H21.9759C21.3639 12.4058 20.4969 12.9498 18.7799 12.9498C14.7509 12.9498 14.6489 9.58377 14.6489 8.18977V3.41277H17.2159V8.18977C17.2159 8.93777 17.0459 10.7398 19.5279 10.7398C21.7549 10.7398 22.0949 9.31177 22.0949 8.01977V3.41277Z"
              fill="white"
            />
            <path
              d="M30.1529 5.62277V9.00577V9.20977C30.1529 10.5868 30.7649 10.3998 33.2469 10.2638V12.7798C33.2469 12.7798 32.7369 12.9498 30.1529 12.9498C27.5519 12.9498 27.5519 10.8248 27.5519 9.44777V5.62277H26.2939V3.44677H27.5519V0.69277H30.1529V3.44677H33.2469V5.62277H30.1529Z"
              fill="white"
            />
            <path
              d="M40.525 3.41277C41.205 3.41277 41.766 3.56577 42.208 3.66777L41.8 6.09877C41.562 6.03077 40.899 5.89477 40.083 5.89477C38.162 5.89477 37.601 7.39077 37.601 8.68277V12.9498H35.017V3.41277H37.601V4.82377H37.754C38.298 3.90577 38.876 3.41277 40.525 3.41277Z"
              fill="white"
            />
            <path
              d="M46.1577 12.9498H43.5907V3.48077H46.1577V12.9498ZM46.1577 2.80077H43.5907V0.48877H46.1577V2.80077Z"
              fill="white"
            />
            <path
              d="M51.7901 5.62277V9.00577V9.20977C51.7901 10.5868 52.4021 10.3998 54.8841 10.2638V12.7798C54.8841 12.7798 54.3741 12.9498 51.7901 12.9498C49.1891 12.9498 49.1891 10.8248 49.1891 9.44777V5.62277H47.9311V3.44677H49.1891V0.69277H51.7901V3.44677H54.8841V5.62277H51.7901Z"
              fill="white"
            />
            <path
              d="M59.1714 12.9498H56.6044V3.48077H59.1714V12.9498ZM59.1714 2.80077H56.6044V0.48877H59.1714V2.80077Z"
              fill="white"
            />
            <path
              d="M66.2487 3.24277C69.1557 3.24277 71.5697 4.78977 71.5697 8.10477C71.5697 11.4538 69.1557 12.9498 66.2487 12.9498C63.3587 12.9498 60.9447 11.4028 60.9447 8.10477C60.9447 4.82377 63.3587 3.24277 66.2487 3.24277ZM66.2487 10.6038C67.8807 10.6038 69.0367 9.82177 69.0367 8.10477C69.0367 6.33677 67.8807 5.60577 66.2487 5.60577C64.6337 5.60577 63.4777 6.30277 63.4777 8.10477C63.4777 9.88977 64.6337 10.6038 66.2487 10.6038Z"
              fill="white"
            />
            <path
              d="M79.2026 3.41277C83.2316 3.41277 83.3335 6.79577 83.3335 8.18977V12.9498H80.7665V8.18977C80.7665 7.44177 80.9195 5.63977 78.4546 5.63977C76.2105 5.63977 75.8876 7.06777 75.8876 8.35977V12.9498H73.3036V3.41277H75.8876V4.82377H76.0066C76.6186 3.97377 77.4855 3.41277 79.2026 3.41277Z"
              fill="white"
            />
            <path
              d="M87.8476 12.9498H85.2806V3.48077H87.8476V12.9498ZM87.8476 2.80077H85.2806V0.48877H87.8476V2.80077Z"
              fill="white"
            />
            <path
              d="M94.5209 7.16977C96.6799 7.49277 99.1279 7.86677 99.1279 10.1278C99.1279 12.4908 97.4279 12.9498 94.5039 12.9498C92.3449 12.9498 90.8659 12.5588 90.1009 11.7938C89.4379 11.1308 89.4379 10.3318 89.4549 9.83877V9.65177H92.1069V9.73677C92.1069 10.5528 92.7189 10.9268 94.4359 10.9268C95.4729 10.9268 96.4589 10.7908 96.4589 10.1618C96.4589 9.44777 95.5409 9.31177 94.5039 9.19277C94.3679 9.17577 94.2319 9.15877 94.0959 9.14177C91.3589 8.78477 89.6589 8.17277 89.6589 6.26877C89.6589 4.94277 90.4239 3.36177 94.0959 3.36177C98.0399 3.36177 98.8729 5.11277 98.8729 6.57477V6.65977H96.2379V6.57477C96.2379 5.82677 95.5919 5.41877 94.0959 5.41877C92.6509 5.41877 92.3449 5.94577 92.3449 6.23477C92.3449 6.65977 92.6339 6.89777 94.2999 7.15277L94.5209 7.16977Z"
              fill="white"
            />
            <path
              d="M104.179 5.62277V9.00577V9.20977C104.179 10.5868 104.791 10.3998 107.273 10.2638V12.7798C107.273 12.7798 106.763 12.9498 104.179 12.9498C101.578 12.9498 101.578 10.8248 101.578 9.44777V5.62277H100.32V3.44677H101.578V0.69277H104.179V3.44677H107.273V5.62277H104.179Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex justify-end items-center gap-[30px] hidden sm:flex md:flex md:gap-[40px] flex-wrap">
          <div className="flex items-center gap-[20px] md:gap-[26px]">
            <Link
              to="#"
              className="text-[#CBEA7B] hover:text-[#daeea6] font-Urbanist text-[14px] not-italic font-semibold leading-[150%] md:text-[18px]"
            >
              Home
            </Link>
            <Link
              to="#"
              className="text-[#FAFDF2] hover:text-[#daeea6] font-Urbanist text-[14px] not-italic font-semibold leading-[150%] md:text-[18px]"
            >
              About
            </Link>
            <Link
              to="#"
              className="text-[#FAFDF2] hover:text-[#daeea6] font-Urbanist text-[14px] not-italic font-semibold leading-[150%] md:text-[18px]"
            >
              Team
            </Link>
            <Link
              to="#"
              className="text-[#FAFDF2] hover:text-[#daeea6] font-Urbanist text-[14px] not-italic font-semibold leading-[150%] md:text-[18px]"
            >
              Process
            </Link>
            <Link
              to="#"
              className="text-[#FAFDF2] hover:text-[#daeea6] font-Urbanist text-[14px] not-italic font-semibold leading-[150%] md:text-[18px]"
            >
              Pricing
            </Link>
            <Link
              to="#"
              className="text-[#FAFDF2] hover:text-[#daeea6] font-Urbanist text-[14px] not-italic font-semibold leading-[150%] md:text-[18px]"
            >
              Blog
            </Link>
          </div>
          {!props.token ?
          <Link to="/login">
            <button className="w-[80px] md:w-[120px] rounded-[8px] bg-[#CBEA7B] hover:bg-[#a5c25b] px-[12px] py-[12px] md:px-[20px] md:py-[14px] font-Urbanist text-[14px] not-italic font-semibold leading-[150%] md:text-[18px]">
              LogIn
            </button>
          </Link> : 
            <button onClick={props.onSubmit} className="w-[80px] md:w-[120px] rounded-[8px] bg-[#CBEA7B] hover:bg-[#a5c25b] px-[12px] py-[12px] md:px-[20px] md:py-[14px] font-Urbanist text-[14px] not-italic font-semibold leading-[150%] md:text-[18px]">
              LogOut
            </button> }
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          className="sm:hidden md:hidden w-[34px] h-[34px]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.25 9.5625C4.25 8.9757 4.7257 8.5 5.3125 8.5H28.6875C29.2743 8.5 29.75 8.9757 29.75 9.5625C29.75 10.1493 29.2743 10.625 28.6875 10.625H5.3125C4.7257 10.625 4.25 10.1493 4.25 9.5625ZM4.25 17C4.25 16.4132 4.7257 15.9375 5.3125 15.9375H28.6875C29.2743 15.9375 29.75 16.4132 29.75 17C29.75 17.5868 29.2743 18.0625 28.6875 18.0625H5.3125C4.7257 18.0625 4.25 17.5868 4.25 17ZM15.9375 24.4375C15.9375 23.8507 16.4132 23.375 17 23.375H28.6875C29.2743 23.375 29.75 23.8507 29.75 24.4375C29.75 25.0243 29.2743 25.5 28.6875 25.5H17C16.4132 25.5 15.9375 25.0243 15.9375 24.4375Z"
            fill="#CBEA7B"
          />
        </svg>
      </div>
  );
};

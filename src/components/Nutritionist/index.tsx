import React, { useState } from "react";
import { BlogCard, Blog_Card } from "./BlogCard";
import { Link } from "react-router-dom";
import "./styles.css";
import { Test_Card, TestCard } from "./Testimonial";
import { Price_Card, PriceCard } from "./PricingCard";

export const Nutritionist: React.FC = () => {
  const [state, setState] = useState<{ numTest: number , salPrice:Boolean }>({
    numTest: 1,
    salPrice: true
  });

  function setTestPage(index: number): void {
    if (state.numTest === 1 && index === -1) {
      setState({ ...state, numTest: 5 });
    } else if (state.numTest === 5 && index === 1) {
      setState({ ...state, numTest: 1 });
    } else setState({ ...state, numTest: state.numTest + index });
  };

  function setPriceSalary():void {
    setState({...state, salPrice:!state.salPrice})
  };

  const featureCards1: { icon: any; header: string; text: string } = {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="23"
        viewBox="0 0 24 23"
        fill="none"
        className="w-[23px] h-[22px] shrink-0 sm:w-[29px] sm:h-[27px] md:w-[39px] md:h-[36px]"
      >
        <g clip-path="url(#clip0_141_1960)">
          <path
            d="M5.73661 1.62019C5.24442 2.75523 5.01339 3.89027 5.01339 4.99518C5.01339 8.66148 7.60491 11.6649 11.6428 11.6649C15.6808 11.6649 18.2723 8.66148 18.2723 4.99518C18.2723 3.89027 18.0413 2.75523 17.5592 1.62019C17.3382 1.13804 16.7656 1.06773 16.3839 1.45947L14.1339 3.74965L12.2154 1.26862C11.904 0.866839 11.3817 0.866839 11.0804 1.26862L9.16183 3.74965L6.90178 1.45947C6.52009 1.06773 5.94754 1.13804 5.73661 1.62019ZM10.8393 21.8903C10.8393 22.3423 11.1909 22.6437 11.6428 22.6437C16.8359 22.6437 21.6071 19.4394 23.1741 14.9394C23.3951 14.3266 23.164 13.9349 22.5111 13.9349C17.3783 13.9349 13.6819 16.9483 12.1953 20.7552L12.4565 21.0968V10.6503H10.8393V21.8903ZM9.4632 18.0532C7.57478 15.6023 4.55133 13.9349 0.744419 13.9349C0.091517 13.9349 -0.13951 14.3266 0.0814722 14.9394C1.42745 18.8367 5.16406 21.7697 9.54351 22.4628C9.49329 22.2921 9.4632 22.0911 9.4632 21.8903V18.0532Z"
            fill="#262626"
          />
        </g>
        <defs>
          <clipPath id="clip0_141_1960">
            <rect
              width="23.2556"
              height="21.7869"
              fill="white"
              transform="translate(0 0.856934)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    header: "Personalized Nutrition Plans",
    text: "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.",
  };
  const featureCards2: { icon: any; header: string; text: string } = {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="38"
        viewBox="0 0 37 38"
        fill="none"
        className="w-[22px] h-[23px] shrink-0 sm:w-[27px] sm:h-[29px] md:w-[36px] md:h-[38.5px]"
      >
        <path
          d="M35.2504 11.7807L22.24 5.82702C20.8844 5.2157 19.7813 4.92332 18.6783 4.9499C17.5885 4.92332 16.4855 5.2157 15.1167 5.82702L2.11945 11.7807C1.26891 12.1662 0.856934 12.8439 0.856934 13.5217C0.856934 14.1994 1.26891 14.864 2.11945 15.2627L7.59477 17.7611L16.0071 13.8141C15.9274 13.7211 15.9007 13.6147 15.9007 13.5217C15.9007 12.6844 17.3095 12.0465 18.7314 12.0465C20.1667 12.0465 21.5489 12.6844 21.5489 13.5217C21.5489 14.3855 20.1667 15.0367 18.7314 15.0367C18.2929 15.0367 17.8544 14.9702 17.4689 14.864L9.44202 18.6249L15.1167 21.2297C16.4855 21.8542 17.5885 22.1201 18.6783 22.1068C19.7813 22.1201 20.8844 21.8542 22.24 21.2297L35.2504 15.2627C36.101 14.864 36.513 14.1994 36.513 13.5217C36.513 12.8439 36.101 12.1662 35.2504 11.7807ZM9.38887 20.5918V28.6719C11.6215 30.0274 14.811 30.8513 18.6783 30.8513C26.5192 30.8513 31.5692 27.4891 31.5692 23.5155V18.9438L22.9974 22.8643C21.4425 23.582 20.0339 23.9408 18.6783 23.9275C17.336 23.9408 15.914 23.582 14.3591 22.8643L9.38887 20.5918ZM5.80067 18.9438V23.5155C5.80067 24.6717 6.46515 26.1069 7.66121 27.3296V19.8077L5.80067 18.9438ZM7.66121 31.755H9.38887V28.6719C8.72438 28.2732 8.13965 27.8214 7.66121 27.3296V31.755ZM6.61134 31.8481V35.3433C6.61134 36.3932 7.28911 37.0709 8.33899 37.0709H8.6978C9.74768 37.0709 10.4255 36.3932 10.4255 35.3433V31.8481C10.4255 30.7982 9.74768 30.1204 8.6978 30.1204H8.33899C7.28911 30.1204 6.61134 30.7982 6.61134 31.8481Z"
          fill="#262626"
        />
      </svg>
    ),
    header: "Guidance from Certified Nutritionists",
    text: "Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.",
  };
  const featureCards3: { icon: any; header: string; text: string } = {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="25"
        viewBox="0 0 14 25"
        fill="none"
        className="w-[14px] h-[25px] shrink-0 sm:w-[17px] sm:h-[31px] md:w-[23px] md:h-[41px]"
      >
        <path
          d="M3.58524 23.2935C4.42899 23.2935 4.95131 22.8214 4.94127 21.9978L4.74038 10.7176C4.74038 10.3661 4.89105 10.1049 5.20243 9.96429C6.52832 9.38169 7.10086 8.769 7.03055 7.01116L6.74931 0.84375C6.72922 0.401786 6.46805 0.150669 6.05622 0.150669C5.66448 0.150669 5.42341 0.411831 5.42341 0.863837L5.49372 6.86049C5.49372 7.21205 5.27274 7.43304 4.94127 7.43304C4.59975 7.43304 4.35868 7.2221 4.35868 6.89062L4.25824 0.683036C4.24819 0.251116 3.99707 0 3.58524 0C3.17341 0 2.93234 0.251116 2.92229 0.683036L2.82184 6.89062C2.82184 7.2221 2.58077 7.43304 2.23926 7.43304C1.90779 7.43304 1.67676 7.21205 1.67676 6.86049L1.74707 0.863837C1.74707 0.411831 1.51605 0.150669 1.11426 0.150669C0.702428 0.150669 0.441267 0.401786 0.421178 0.84375L0.149972 7.01116C0.0696153 8.769 0.64216 9.38169 1.96805 9.96429C2.27944 10.1049 2.4301 10.3661 2.4301 10.7176L2.23926 21.9978C2.22922 22.8214 2.74149 23.2935 3.58524 23.2935ZM11.4401 14.5346L11.2292 21.9476C11.1991 22.8214 11.7314 23.2935 12.5651 23.2935C13.419 23.2935 13.9413 22.8616 13.9413 22.0581V0.753348C13.9413 0.241071 13.5897 0 13.2281 0C12.8464 0 12.5953 0.200893 12.2739 0.672991C10.6566 2.94308 9.59198 7.19196 9.59198 11.2098V11.702C9.59198 12.3951 9.84304 12.9074 10.3453 13.2388L10.9379 13.6407C11.2995 13.8917 11.4602 14.173 11.4401 14.5346Z"
          fill="#262626"
        />
      </svg>
    ),
    header: "Food Tracking and Analysis",
    text: "Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.",
  };
  const featureCards4: { icon: any; header: string; text: string } = {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="37"
        viewBox="0 0 29 37"
        fill="none"
        className="w-[17px] h-[22px] shrink-0 sm:w-[21px] sm:h-[27px] md:w-[28px] md:h-[36px]"
      >
        <path
          d="M5.90408 36.3216H23.6831C27.1318 36.3216 28.8728 34.5637 28.8728 31.0816V5.68541C28.8728 2.18653 27.1485 0.428711 23.6831 0.428711H19.4309C18.8616 0.428711 18.4766 0.830497 18.4766 1.43318C18.4766 1.51688 18.4766 1.60059 18.4766 1.66755C18.4766 3.84388 17.0034 5.1497 14.7936 5.1497C12.5838 5.1497 11.1106 3.84388 11.1106 1.66755C11.1106 1.60059 11.1106 1.51688 11.1106 1.43318C11.1106 0.830497 10.7255 0.428711 10.1563 0.428711H5.90408C2.43868 0.428711 0.714355 2.18653 0.714355 5.68541V31.0816C0.714355 34.5637 2.45543 36.3216 5.90408 36.3216ZM8.44873 12.9008C7.84606 12.9008 7.41078 12.4488 7.41078 11.8461C7.41078 11.2769 7.84606 10.8249 8.44873 10.8249H21.1552C21.7412 10.8249 22.1764 11.2769 22.1764 11.8461C22.1764 12.4488 21.7412 12.9008 21.1552 12.9008H8.44873ZM8.44873 18.8439C7.84606 18.8439 7.41078 18.3919 7.41078 17.8227C7.41078 17.2367 7.84606 16.7847 8.44873 16.7847H14.4588C15.0615 16.7847 15.4968 17.2367 15.4968 17.8227C15.4968 18.3919 15.0615 18.8439 14.4588 18.8439H8.44873Z"
          fill="#262626"
        />
      </svg>
    ),
    header: "Meal Planning and Recipes",
    text: "Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.",
  };
  const featureCards5: { icon: any; header: string; text: string } = {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="14"
        viewBox="0 0 24 14"
        fill="none"
        className="w-[22.5px] h-[13px] shrink-0 sm:w-[28px] sm:h-[16.5px] md:w-[37.5px] md:h-[22px]"
      >
        <path
          d="M2.11976 11.3352C2.83983 11.3352 3.39099 10.784 3.39099 10.0818V3.36115C3.39099 2.64997 2.83983 2.08992 2.11976 2.08992C1.40858 2.08992 0.857422 2.64997 0.857422 3.36115V10.0818C0.857422 10.784 1.40858 11.3352 2.11976 11.3352ZM6.34239 13.2999C7.52472 13.2999 8.35147 12.5087 8.35147 11.3886V2.06325C8.35147 0.934253 7.52472 0.143066 6.34239 0.143066C5.16894 0.143066 4.3422 0.934253 4.3422 2.06325V11.3886C4.3422 12.5087 5.16894 13.2999 6.34239 13.2999ZM9.38269 8.43719H14.9032V5.00575H9.38269V8.43719ZM17.9435 13.2999C19.1258 13.2999 19.9526 12.5087 19.9526 11.3886V2.06325C19.9526 0.934253 19.1258 0.143066 17.9435 0.143066C16.7701 0.143066 15.9433 0.934253 15.9433 2.06325V11.3886C15.9433 12.5087 16.7701 13.2999 17.9435 13.2999ZM22.0772 11.3352C22.7884 11.3352 23.3484 10.784 23.3484 10.0818V3.36115C23.3484 2.64997 22.7884 2.08992 22.0772 2.08992C21.3661 2.08992 20.8149 2.64997 20.8149 3.36115V10.0818C20.8149 10.784 21.3661 11.3352 22.0772 11.3352Z"
          fill="#262626"
        />
      </svg>
    ),
    header: "Lifestyle and Behavior Coaching",
    text: "Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.",
  };
  const featureCards6: { icon: any; header: string; text: string } = {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="45"
        viewBox="0 0 29 45"
        fill="none"
        className="w-[16.5px] h-[26px] shrink-0 sm:w-[21px] sm:h-[33px] md:w-[28px] md:h-[44px]"
      >
        <path
          d="M9.37014 42.5579H19.5989C25.4248 42.5579 28.3044 39.6114 28.2541 33.7186C28.1871 26.9887 28.1536 22.1003 27.9862 18.434C27.5008 7.65276 24.4706 4.4887 14.4929 4.4887C4.51523 4.4887 1.46835 7.65276 0.982858 18.434C0.815448 22.1003 0.781965 26.9887 0.715001 33.7186C0.664778 39.6114 3.54424 42.5579 9.37014 42.5579ZM8.88464 35.9117C7.44491 35.9117 6.52416 34.9741 6.52416 33.568V24.9296C6.52416 23.5066 7.44491 22.569 8.88464 22.569H20.1012C21.5242 22.569 22.4449 23.5066 22.4449 24.9296V33.568C22.4449 34.9741 21.5242 35.9117 20.1012 35.9117H8.88464ZM6.52416 29.0144H22.4449V27.0221H6.52416V29.0144ZM14.4929 0.571289C11.2786 0.571289 9.01857 2.74763 9.01857 5.7108H11.3791C11.3791 4.08692 12.6514 2.93177 14.4929 2.93177C16.3176 2.93177 17.6068 4.08692 17.6068 5.7108H19.9672C19.9672 2.74763 17.6905 0.571289 14.4929 0.571289Z"
          fill="#262626"
        />
      </svg>
    ),
    header: "Nutritional Education and Workshops",
    text: "Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.",
  };
  const featureCards: { icon: any; header: string; text: string }[] = [
    featureCards1,
    featureCards2,
    featureCards3,
    featureCards4,
    featureCards5,
    featureCards6,
  ];
  // interface Blog_Card {
  //   img: any;
  //   purpose: string;
  //   title: string;
  //   description: string;
  //   imgPartner: any;
  //   partnerName: string;
  //   partnerTime: string;
  //   iconLove: any;
  //   iconBook: any;
  // }
  const blogCard1: Blog_Card = {
    img: "./src/img/blog-1-1.png",
    purpose: "Weight Loss",
    title: "The Benefits of Hydration for Weight Loss",
    description:
      "Discover how staying hydrated can support your weight loss goals and improve overall health.",
    imgPartner: "./src/img/blog-1-2.png",
    partnerName: "Emily Johnson",
    partnerTime: "23 May 2023 - 5 min read",
    iconLove: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="w-[24px] h-[24px]"
      >
        <path
          d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z"
          stroke="#4C4C4C"
          stroke-width="2"
          stroke-linejoin="round"
        />
      </svg>
    ),
    iconBook: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="w-[24px] h-[24px]"
      >
        <path
          d="M5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L13.0815 17.1953C12.4227 16.7717 11.5773 16.7717 10.9185 17.1953L5 21Z"
          stroke="#4C4C4C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  };
  const blogCard2: Blog_Card = {
    img: "./src/img/blog-2-1.png",
    purpose: "Mindful Eating",
    title: "Cultivating a Healthy Relationship with Food",
    description:
      "Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.",
    imgPartner: "./src/img/blog-2-2.png",
    partnerName: "Sarah Thompson",
    partnerTime: "23 May 2023 - 5 min read",
    iconLove: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="w-[24px] h-[24px]"
      >
        <path
          d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z"
          stroke="#4C4C4C"
          stroke-width="2"
          stroke-linejoin="round"
        />
      </svg>
    ),
    iconBook: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="w-[24px] h-[24px]"
      >
        <path
          d="M5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L13.0815 17.1953C12.4227 16.7717 11.5773 16.7717 10.9185 17.1953L5 21Z"
          stroke="#4C4C4C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  };
  const blogCard3: Blog_Card = {
    img: "./src/img/blog-3-1.png",
    purpose: "Understanding Macronutrients",
    title: "Carbohydrates, Proteins, and Fats",
    description:
      "Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
    imgPartner: "./src/img/blog-3-2.png",
    partnerName: "Mark Wilson",
    partnerTime: "23 May 2023 - 5 min read",
    iconLove: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="w-[24px] h-[24px]"
      >
        <path
          d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z"
          stroke="#4C4C4C"
          stroke-width="2"
          stroke-linejoin="round"
        />
      </svg>
    ),
    iconBook: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="w-[24px] h-[24px]"
      >
        <path
          d="M5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L13.0815 17.1953C12.4227 16.7717 11.5773 16.7717 10.9185 17.1953L5 21Z"
          stroke="#4C4C4C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  };
  const blogCard4: Blog_Card = {
    img: "./src/img/blog-4-1.png",
    purpose: "Healthy Snacks on the Go",
    title: "Quick and Nutritious Options",
    description:
      "Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.",
    imgPartner: "./src/img/blog-4-2.png",
    partnerName: "Emily Johnson",
    partnerTime: "23 May 2023 - 5 min read",
    iconLove: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="w-[24px] h-[24px]"
      >
        <path
          d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z"
          stroke="#4C4C4C"
          stroke-width="2"
          stroke-linejoin="round"
        />
      </svg>
    ),
    iconBook: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="w-[24px] h-[24px]"
      >
        <path
          d="M5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L13.0815 17.1953C12.4227 16.7717 11.5773 16.7717 10.9185 17.1953L5 21Z"
          stroke="#4C4C4C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  };
  const testCard1: Test_Card = {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="w-[34px] h-[34px] md:w-[40px] md:h-[40px]"
      >
        <path
          d="M3.5293 32.9409V25.5356C3.5293 23.406 3.91809 21.1916 4.69567 18.8926C5.49681 16.5694 6.58071 14.3792 7.94737 12.3222C9.33759 10.241 10.8928 8.48642 12.6129 7.05859L18.5508 11.0154C17.1605 13.1692 15.9942 15.4198 15.0516 17.7673C14.1327 20.0905 13.685 22.6558 13.7085 25.463V32.9409H3.5293ZM21.449 32.9409V25.5356C21.449 23.406 21.8378 21.1916 22.6154 18.8926C23.4165 16.5694 24.5004 14.3792 25.8671 12.3222C27.2573 10.241 28.8125 8.48642 30.5326 7.05859L36.4705 11.0154C35.0803 13.1692 33.9139 15.4198 32.9714 17.7673C32.0524 20.0905 31.6047 22.6558 31.6283 25.463V32.9409H21.449Z"
          fill="#356554"
        />
      </svg>
    ),
    descriptions:
      "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
    img: "./src/img/test-1.png",
    name: "Jennifer Anderson",
  };
  const testCard2: Test_Card = {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="w-[34px] h-[34px] md:w-[40px] md:h-[40px]"
      >
        <path
          d="M3.5293 32.9409V25.5356C3.5293 23.406 3.91809 21.1916 4.69567 18.8926C5.49681 16.5694 6.58071 14.3792 7.94737 12.3222C9.33759 10.241 10.8928 8.48642 12.6129 7.05859L18.5508 11.0154C17.1605 13.1692 15.9942 15.4198 15.0516 17.7673C14.1327 20.0905 13.685 22.6558 13.7085 25.463V32.9409H3.5293ZM21.449 32.9409V25.5356C21.449 23.406 21.8378 21.1916 22.6154 18.8926C23.4165 16.5694 24.5004 14.3792 25.8671 12.3222C27.2573 10.241 28.8125 8.48642 30.5326 7.05859L36.4705 11.0154C35.0803 13.1692 33.9139 15.4198 32.9714 17.7673C32.0524 20.0905 31.6047 22.6558 31.6283 25.463V32.9409H21.449Z"
          fill="#356554"
        />
      </svg>
    ),
    descriptions:
      "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
    img: "./src/img/test-2.png",
    name: "Robert Johnson",
  };
  const testCard3: Test_Card = {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="w-[34px] h-[34px] md:w-[40px] md:h-[40px]"
      >
        <path
          d="M3.5293 32.9409V25.5356C3.5293 23.406 3.91809 21.1916 4.69567 18.8926C5.49681 16.5694 6.58071 14.3792 7.94737 12.3222C9.33759 10.241 10.8928 8.48642 12.6129 7.05859L18.5508 11.0154C17.1605 13.1692 15.9942 15.4198 15.0516 17.7673C14.1327 20.0905 13.685 22.6558 13.7085 25.463V32.9409H3.5293ZM21.449 32.9409V25.5356C21.449 23.406 21.8378 21.1916 22.6154 18.8926C23.4165 16.5694 24.5004 14.3792 25.8671 12.3222C27.2573 10.241 28.8125 8.48642 30.5326 7.05859L36.4705 11.0154C35.0803 13.1692 33.9139 15.4198 32.9714 17.7673C32.0524 20.0905 31.6047 22.6558 31.6283 25.463V32.9409H21.449Z"
          fill="#356554"
        />
      </svg>
    ),
    descriptions:
      "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
    img: "./src/img/test-3.png",
    name: "Emily Davis",
  };
  const priceCard1: Price_Card = {
    header: "Basic Plan",
    description:
      "Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.",
    salary: "$49",
  };
  const priceCard2: Price_Card = {
    header: "Premium Plan",
    description:
      "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
    salary: "$79",
  };
  const priceCard3: Price_Card = {
    header: "Ultimate Plan",
    description:
      "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
    salary: "$99",
  };
  const testToggleChecked: any = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      className="w-[7px] h-[7px]"
    >
      <circle cx="4" cy="4" r="3.5" fill="#356554" />
    </svg>
  );
  const testToggleUnchecked: any = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      className="w-[7px] h-[7px] fill-[#E5F5BD]"
    >
      <circle cx="4" cy="4" r="3.5" fill="#E5F5BD" />
    </svg>
  );
  return (
    // <div className="overflow-auto h-[100vh] flex flex-col gap-[50px] sm:gap-[100px] md:gap-[150px]">
    <div className="flex flex-col gap-[50px] sm:gap-[100px] md:gap-[150px]">
      <div className="flex flex-col justify-center items-start sm:flex-row sm:jusitfy-normal sm:items-stretch sm:gap-[40px] md:gap-[50px] sm:pr-[20px]">
        <img
          src="./src/img/homepage-1.png"
          style={{
            background:
              "url(<path-to-image>), lightgray 50% / cover no-repeat, url(<path-to-image>), lightgray 0% 0% / 80.0000011920929px 80.0000011920929px repeat, #DCF1A7",
          }}
          className="self-stretch h-[374px] object-cover rounded-br-[50px] rounded-bl-[50px] sm:rounded-bl-none sm:self-auto sm:w-[50vw] sm:h-[712px] md:h-[832px]"
        />
        <div className="relative sm:static md:static flex px-[16px] flex-col items-center gap-[30px] self-stretch sm:p-[0px] items-start gap-[50px] flex-1 md:gap-[70px]">
          <div className="mt-[110px] sm:mt-0 md:mt-0 order-2 sm:order-1 md:order-1 flex flex-col items-center gap-[30px] self-stretch sm:items-start sm:gap-[40px] md:gap-[50px]">
            <div className="flex flex-col items-center gap-[16px] self-stretch sm:items-start md:gap-[20px]">
              <div className="flex flex-col items-center gap-[10px] self-stretch sm:items-start  md:gap-[14px]">
                <div className="flex py-[8px] items-center gap-[10px] border-b-[3px] border-solid border-[#CBEA7B] md:py-[10px]">
                  <p className="text-[#1A3129] text-center font-Urbanist text-[18px] not-italic font-semibold leading-normal sm:text-[22px] md:text-[28px]">
                    Transform Your ❤️ Health with
                  </p>
                </div>
                <p className="self-stretch text-[#1A3129] text-center font-Urbanist text-[30px] min-[250px]:text-[38px] not-italic font-bold leading-normal sm:text-left sm:text-[48px] md:text-[58px]">
                  Personalized Nutrition Coaching
                </p>
              </div>
              <p className="self-stretch text-[#333] text-center font-Urbanist text-[14px] not-italic font-medium leading-[150%] sm:text-[16px] sm:text-left md:text-[18px]">
                Welcome to Nutritionist, your partner in achieving optimal
                health through personalized nutrition coaching. Our certified
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
          <div className="absolute top-[-26px] left-[calc(50%-81px)] sm:static md:static order-1 flex flex-col justify-center items-center gap-[4px] self-stretch sm:order-2 md:order-2 sm:flex-row sm:gap-[6px] sm:justify-normal md:gap-[8px]">
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
            <div className="flex flex-wrap justify-center">
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
      <div className="flex flex-col px-[16px] sm:px-[80px] md:px-[162px] items-start gap-[50px] sm:gap-[60px] md:gap-[80px]">
        <div className="flex flex-col gap-[6px] items-center self-stretch sm:px-[100px] min-[1000px]:px-[250px] md:px-[300px] gap-[10px]">
          <h1 className="self-stretch text-center text-[#262626] font-Urbanist text-[28px] not-italic font-bold leading-[150%] sm:text-[38px] md:text-[48px]">
            Features
          </h1>
          <p className="self-stretch text-center text-[#333] font-Urbanist text-[14px] not-italic font-medium leading-[150%] sm:text-[16px] md:text-[18px]">
            Welcome to the Feature Section of Nutritionist, your ultimate
            destination for all things nutrition and wellness.
          </p>
        </div>
        <div className="flex flex-col items-start gap-[20px] self-stretch md:gap-[30px]">
          <div className="items-stretch hidden sm:flex sm:gap-[20px] sm:self-stretch md:gap-[30px]">
            {[featureCards1, featureCards2].map((item) => (
              <div className="flex md:px-[50px] p-[40px] flex-col items-start md:gap-[24px] gap-[20px] flex-1 rounded-[10px] md:rounded-[12px] border-[1px] border-solid border-[#E5F5BD] bg-[#F6FBE9]">
                <div className="flex items-center gap-[10px] self-stretch md:gap-[14px]">
                  <div className="flex h-[54px] md:h-[68px] p-[12px] items-center gap-[10px] rounded-[6px] bg-[#CBEA7B] md:p-[14px]">
                    <div className="flex w-[30px] pr-[1.12px] pl-[1.115px] justify-center items-center md:w-[40px] md:pr-[1.49px] md:pl-[2.86px]">
                      {item.icon}
                    </div>
                  </div>
                  <p className="flex-1 text-[#262626] font-Urbanist text-[20px] not-italic font-semibold leading-[150%] md:text-[24px]">
                    {item.header}
                  </p>
                </div>
                <p className="self-stretch text-[#333] font-Urbanist text-[16px] not-italic font-medium leading-[150%] md:text-[18px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="items-stretch hidden sm:flex sm:gap-[20px] sm:self-stretch md:gap-[30px]">
            {[featureCards3, featureCards4].map((item) => (
              <div className="flex md:px-[50px] p-[40px] flex-col items-start md:gap-[24px] gap-[20px] flex-1 rounded-[10px] md:rounded-[12px] border-[1px] border-solid border-[#E5F5BD] bg-[#F6FBE9]">
                <div className="flex items-center gap-[10px] self-stretch md:gap-[14px]">
                  <div className="flex h-[54px] md:h-[68px] p-[12px] items-center gap-[10px] rounded-[6px] bg-[#CBEA7B] md:p-[14px]">
                    <div className="flex w-[30px] pr-[1.12px] pl-[1.115px] justify-center items-center md:w-[40px] md:pr-[1.49px] md:pl-[2.86px]">
                      {item.icon}
                    </div>
                  </div>
                  <p className="flex-1 text-[#262626] font-Urbanist text-[20px] not-italic font-semibold leading-[150%] md:text-[24px]">
                    {item.header}
                  </p>
                </div>
                <p className="self-stretch text-[#333] font-Urbanist text-[16px] not-italic font-medium leading-[150%] md:text-[18px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="items-stretch hidden sm:flex sm:gap-[20px] sm:self-stretch md:gap-[30px]">
            {[featureCards5, featureCards6].map((item) => (
              <div className="flex md:px-[50px] p-[40px] flex-col items-start md:gap-[24px] gap-[20px] flex-1 rounded-[10px] md:rounded-[12px] border-[1px] border-solid border-[#E5F5BD] bg-[#F6FBE9]">
                <div className="flex items-center gap-[10px] self-stretch md:gap-[14px]">
                  <div className="flex h-[54px] md:h-[68px] p-[12px] items-center gap-[10px] rounded-[6px] bg-[#CBEA7B] md:p-[14px]">
                    <div className="flex w-[30px] pr-[1.12px] pl-[1.115px] justify-center items-center md:w-[40px] md:pr-[1.49px] md:pl-[2.86px]">
                      {item.icon}
                    </div>
                  </div>
                  <p className="flex-1 text-[#262626] font-Urbanist text-[20px] not-italic font-semibold leading-[150%] md:text-[24px]">
                    {item.header}
                  </p>
                </div>
                <p className="self-stretch text-[#333] font-Urbanist text-[16px] not-italic font-medium leading-[150%] md:text-[18px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          {featureCards.map((item) => (
            <div className="sm:hidden md:hidden flex p-[30px] flex-col items-start gap-[16px] self-stretch rounded-[10px] border-[1px] border-solid border-[#E5F5BD] bg-[#F6FBE9]">
              <div className="flex items-center gap-[10px] self-stretch">
                <div className="flex p-[12px] items-start gap-[10px] rounded-[6px] bg-[#CBEA7B] h-[48px]">
                  <div className="flex w-[24px] h-[24px] justify-center items-center">
                    {item.icon}
                  </div>
                </div>
                <p className="flex-1 text-[#262626] font-Urbanist text-[18px] not-italic font-semibold leading-[150%] md:text-[24px]">
                  {item.header}
                </p>
              </div>
              <p className="self-stretch text-[#333] font-Urbanist text-[14px] not-italic font-medium leading-[150%]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col px-[16px] sm:px-[80px] md:px-[162px] items-start gap-[50px] sm:gap-[60px] md:gap-[80px]">
        <div className="flex flex-col gap-[6px] items-center self-stretch sm:px-[100px] min-[1000px]:px-[250px] md:px-[300px] gap-[10px]">
          <h1 className="self-stretch text-center text-[#262626] font-Urbanist text-[28px] not-italic font-bold leading-[150%] sm:text-[38px] md:text-[48px]">
            Our Blogs
          </h1>
          <p className="self-stretch text-center text-[#333] font-Urbanist text-[14px] not-italic font-medium leading-[150%] sm:text-[16px] md:text-[18px]">
            Our blog is a treasure trove of informative and engaging articles
            written by our team of nutritionists, dietitians, and wellness
            experts. Here's what you can expect from our blog.
          </p>
        </div>
        <div className="flex flex-col items-start gap-[20px] self-stretch md:gap-[30px]">
          <div className="hidden items-start gap-[20px] sm:flex md:gap-[30px]">
            <BlogCard {...blogCard1} />
            <BlogCard {...blogCard2} />
          </div>
          <div className="hidden items-start gap-[20px] sm:flex md:gap-[30px]">
            <BlogCard {...blogCard3} />
            <BlogCard {...blogCard4} />
          </div>
          <div className="sm:hidden md:hidden">
            <BlogCard {...blogCard1} />
            <BlogCard {...blogCard2} />
            <BlogCard {...blogCard3} />
            <BlogCard {...blogCard4} />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-[16px] sm:px-[80px] md:px-[162px] items-start gap-[50px] sm:gap-[60px] md:gap-[80px]">
        <div className="flex flex-col gap-[6px] items-center self-stretch sm:px-[100px] min-[1000px]:px-[250px] md:px-[300px] gap-[10px]">
          <h1 className="self-stretch text-center text-[#262626] font-Urbanist text-[28px] not-italic font-bold leading-[150%] sm:text-[38px] md:text-[48px]">
            Our Testimonials
          </h1>
          <p className="self-stretch text-center text-[#333] font-Urbanist text-[14px] not-italic font-medium leading-[150%] sm:text-[16px] md:text-[18px]">
            Our satisfied clients share their success stories and experiences on
            their journey to better health and well-being.
          </p>
        </div>
        <div className="flex flex-col items-start gap-[30px] self-stretch sm:gap-[40px] md:gap-[50px]">
          <div className="hidden sm:flex md:flex items-stretch gap-[20px] self-stretch">
            <TestCard {...testCard1} />
            <TestCard {...testCard2} />
            <TestCard {...testCard3} />
          </div>
          <div className="sm:hidden md:hidden">
            <TestCard {...testCard1} />
          </div>
          <div className="flex justify-center items-center gap-[20px] self-stretch md:gap-[30px] flex-wrap">
            <button
              onClick={() => setTestPage(-1)}
              className="flex p-[10px] items-start gap-[10px] rounded-[6px] border-[1px] border-solid border-[#EEF8D3] bg-[#F6FBE9] md:p-[12px] hover:bg-[#eef7d9]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                className="w-[28px] h-[28px] md:w-[34px] md:h-[34px]"
              >
                <path
                  d="M21.25 8.5L12.75 17L21.25 25.5"
                  stroke="#333333"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div className="flex items-start gap-[4px]">
              {state.numTest === 1 ? testToggleChecked : testToggleUnchecked}
              {state.numTest === 2 ? testToggleChecked : testToggleUnchecked}
              {state.numTest === 3 ? testToggleChecked : testToggleUnchecked}
              {state.numTest === 4 ? testToggleChecked : testToggleUnchecked}
              {state.numTest === 5 ? testToggleChecked : testToggleUnchecked}
            </div>
            <button
              onClick={() => setTestPage(1)}
              className="flex p-[10px] items-start gap-[10px] rounded-[6px] border-[1px] border-solid border-[#EEF8D3] bg-[#F6FBE9] md:p-[12px] hover:bg-[#eef7d9]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                className="w-[28px] h-[28px] md:w-[34px] md:h-[34px]"
              >
                <path
                  d="M12.75 8.5L21.25 17L12.75 25.5"
                  stroke="#333333"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mb-[50px] sm:mb-[100px] md:mb-[150px] flex flex-col px-[16px] sm:px-[80px] md:px-[162px] items-start gap-[50px] sm:gap-[60px] md:gap-[80px]">
        <div className="flex flex-col gap-[6px] items-center self-stretch sm:px-[100px] min-[1000px]:px-[250px] md:px-[300px] gap-[10px]">
          <h1 className="self-stretch text-center text-[#262626] font-Urbanist text-[28px] not-italic font-bold leading-[150%] sm:text-[38px] md:text-[48px]">
            Our Pricing
          </h1>
          <p className="self-stretch text-center text-[#333] font-Urbanist text-[14px] not-italic font-medium leading-[150%] sm:text-[16px] md:text-[18px]">
            We outline our flexible and affordable options to support you on
            your journey to optimal health and nutrition. We believe that
            everyone deserves access to personalized nutrition guidance and
            resources
          </p>
        </div>
        <div className="flex flex-col items-center gap-[30px] self-stretch sm:gap-[40px] md:gap-[50px]">
          <div className="flex flex-col items-center gap-[10px]">
            <div className="flex p-[10px] items-center rounded-[8px] border-[1px] border-solid border-[#DCF1A7]">
              <button onClick={setPriceSalary} className={(state.salPrice ? "hover:bg-[#386b59] bg-[#234338] text-[#fff] " : "hover:bg-[#57a387] hover:text-[#fff] text-[#4C4C4C] ")+ "hidden min-[270px]:flex font-Urbanist text-[14px] not-italic font-semibold leading-[150%] flex px-[24px] py-[10px] justify-center items-center gap-[10px] rounded-[6px]"}>
                Monthly
              </button>
              <button onClick={setPriceSalary} className={(state.salPrice ? "hover:bg-[#386b59] bg-[#234338] text-[#fff] " : "hover:bg-[#57a387] hover:text-[#fff] text-[#4C4C4C] ")+ "min-[270px]:hidden font-Urbanist text-[14px] not-italic font-semibold leading-[150%] flex px-[24px] py-[10px] justify-center items-center gap-[10px] rounded-[6px]"}>
                M
              </button>
              <button onClick={setPriceSalary} className={(!state.salPrice ? "hover:bg-[#386b59] bg-[#234338] text-[#fff] " : "hover:bg-[#57a387] hover:text-[#fff] text-[#4C4C4C] ")+ "hidden min-[270px]:flex font-Urbanist text-[14px] not-italic font-semibold leading-[150%] flex px-[24px] py-[10px] justify-center items-center gap-[10px] rounded-[6px]"}>
                Yearly
              </button>
              <button onClick={setPriceSalary} className={(!state.salPrice ? "hover:bg-[#386b59] bg-[#234338] text-[#fff] " : "hover:bg-[#57a387] hover:text-[#fff] text-[#4C4C4C] ")+ "min-[270px]:hidden font-Urbanist text-[14px] not-italic font-semibold leading-[150%] flex px-[24px] py-[10px] justify-center items-center gap-[10px] rounded-[6px]"}>
                Y
              </button>
            </div>
            <p className="self-stretch text-[#4C4C4D] text-center font-Urbanist text-[16px] not-italic font-medium leading-[150%]">
              Save 50% on Yearly
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-[20px] self-stretch min-[800px]:flex-row md:gap-[30px]">
            <PriceCard {...priceCard1} />
            <PriceCard {...priceCard2} />
            <PriceCard {...priceCard3} />
          </div>
        </div>
      </div>
    </div>
  );
};

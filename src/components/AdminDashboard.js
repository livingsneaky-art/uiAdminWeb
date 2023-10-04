import React from 'react';
import OrderStatsContainer from './OrderStatsContainer';
import MostOrderedContainer from './MostOrderedContainer';
import FormContainer1 from './FormContainer1';
import EmploymentPercentageForm from './EmploymentPercentageForm';
import DashboardMenuContainer from './DashboardMenuContainer';
import DashboardContainer1 from './DashboardContainer1';

const AdminDashboard = () => {
  return (
    <a className="[text-decoration:none] relative bg-white1 w-full h-[960px] overflow-hidden text-left text-[40px] text-darkslategray-300 font-poppins">
      <OrderStatsContainer />
      <MostOrderedContainer />
      <FormContainer1 />
      <EmploymentPercentageForm />
      <div className="absolute top-[calc(50%_-_344px)] left-[19.44%] tracking-[0.5px] leading-[23px] font-medium">
        Dashboard
      </div>
      <div className="absolute top-[22px] left-[1243px] w-[166px] h-[17px] text-xs">
        <div className="absolute top-[calc(50%_-_6.5px)] left-[0%] tracking-[0.5px] leading-[13px]">
          Leah Joyce G. Bancale
        </div>
        <img
          className="absolute top-[0px] left-[149px] rounded-31xl w-[17px] h-[17px] object-cover"
          alt=""
          src="/image-7@2x.png"
        />
      </div>
      <div className="absolute top-[0px] left-[0px] bg-midnightblue w-60 h-[960px]">
        <DashboardMenuContainer />
      </div>
      <div className="absolute top-[63.75px] left-[-0.25px] box-border w-[1440.5px] h-[0.5px] border-t-[0.5px] border-solid border-lightgray" />
      <div className="absolute top-[14px] left-[33px] w-[130px] h-[42px] flex flex-row items-center justify-start gap-[18px] text-5xl text-white font-inter">
        <img
          className="relative rounded-195xl w-[42px] h-[38.53px] object-cover"
          alt=""
          src="/image-12@2x.png"
        />
        <div className="relative font-extrabold">ACES</div>
      </div>
      <DashboardContainer1 />
      <img
        className="absolute top-[167px] left-[997.75px] w-[0.5px] h-[724px]"
        alt=""
        src="/separator.svg"
      />
      <img
        className="absolute top-[529px] left-[638.75px] w-[0.5px] h-[362px]"
        alt=""
        src="/separator1.svg"
      />
      <div className="absolute top-[528.75px] left-[279.75px] box-border w-[1120.5px] h-[0.5px] border-t-[0.5px] border-solid border-lightgray" />
    </a>
  );
};

export default AdminDashboard;

import { useMemo } from "react";

const DashboardContainer = ({
  dimensionCode,
  dimensionCodeText,
  dimensionCodeImageUrl,
  dimensionCodeText2,
  dimensionCodeImageUrl2,
  dimensionCodeImageUrl3,
  dimensionCodeTextImageUrl,
  iconlyBoldProfileLeft,
  jobListingTop,
  manageMenuRight,
  manageMenuLeft,
  manageMenuRight1,
  manageMenuLeft1,
  manageMenuRight2,
  manageMenuLeft2,
  manageMenuRight3,
  manageMenuLeft3,
  customerReviewRight,
  customerReviewLeft,
  manageMenuRight4,
  manageMenuLeft4,
  foodOrderRight,
  foodOrderLeft,
  dashboardRight,
  dashboardLeft,
  propRight,
  propLeft,
  propLeft1,
}) => {
  const menuStyle = useMemo(() => {
    return {
      left: iconlyBoldProfileLeft,
    };
  }, [iconlyBoldProfileLeft]);

  const activeBackgroundIconStyle = useMemo(() => {
    return {
      top: jobListingTop,
    };
  }, [jobListingTop]);

  const accountsStyle = useMemo(() => {
    return {
      right: manageMenuRight,
      left: manageMenuLeft,
    };
  }, [manageMenuRight, manageMenuLeft]);

  const jobListingStyle = useMemo(() => {
    return {
      right: manageMenuRight1,
      left: manageMenuLeft1,
    };
  }, [manageMenuRight1, manageMenuLeft1]);

  const alumniStyle = useMemo(() => {
    return {
      right: manageMenuRight2,
      left: manageMenuLeft2,
    };
  }, [manageMenuRight2, manageMenuLeft2]);

  const eventsStyle = useMemo(() => {
    return {
      right: manageMenuRight3,
      left: manageMenuLeft3,
    };
  }, [manageMenuRight3, manageMenuLeft3]);

  const announcementStyle = useMemo(() => {
    return {
      right: customerReviewRight,
      left: customerReviewLeft,
    };
  }, [customerReviewRight, customerReviewLeft]);

  const pendingJobsStyle = useMemo(() => {
    return {
      right: manageMenuRight4,
      left: manageMenuLeft4,
    };
  }, [manageMenuRight4, manageMenuLeft4]);

  const companiesStyle = useMemo(() => {
    return {
      right: foodOrderRight,
      left: foodOrderLeft,
    };
  }, [foodOrderRight, foodOrderLeft]);

  const verificationStyle = useMemo(() => {
    return {
      right: dashboardRight,
      left: dashboardLeft,
    };
  }, [dashboardRight, dashboardLeft]);

  const dashboardStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const aDMINMENUStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className="absolute top-[0px] left-[0px] w-60 h-[960px] text-left text-xs text-white1 font-poppins">
      <div className="absolute top-[0px] left-[0px] bg-midnightblue w-60 h-[960px]" />
      <div
        className="absolute top-[109px] left-[8px] w-[217px] h-[743.44px]"
        style={menuStyle}
      >
        <img
          className="absolute top-[381px] left-[0px] rounded-8xs w-[217px] h-[68.42px] opacity-[0.1]"
          alt=""
          src="/active-background.svg"
          style={activeBackgroundIconStyle}
        />
        <div
          className="absolute w-[45%] top-[calc(50%_+_347.28px)] right-[28.73%] left-[26.27%] h-[24.44px] opacity-[0.6]"
          style={accountsStyle}
        >
          <b className="absolute w-[66.67%] top-[calc(50%_-_7.33px)] left-[33.33%] tracking-[0.5px] leading-[12px] inline-block h-[19.55px]">
            Logout
          </b>
          <img
            className="absolute h-[98.21%] w-[26.63%] top-[0%] right-[73.37%] bottom-[1.79%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={dimensionCode}
          />
        </div>
        <div
          className="absolute w-[49%] top-[calc(50%_-_41px)] right-[39.12%] left-[11.88%] h-[24.44px] opacity-[0.6]"
          style={jobListingStyle}
        >
          <div className="absolute w-[69.39%] top-[calc(50%_-_7.33px)] left-[30.61%] tracking-[0.5px] leading-[12px] inline-block h-[19.55px]">
            Job Listing
          </div>
          <img
            className="absolute h-[73.66%] w-[16.93%] top-[0%] right-[83.07%] bottom-[26.34%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/iconlybolddocument1.svg"
          />
        </div>
        <div
          className="absolute w-[37.5%] top-[calc(50%_+_27.43px)] right-[50.12%] left-[12.38%] h-[24.44px] opacity-[0.6]"
          style={alumniStyle}
        >
          <div className="absolute w-3/5 top-[calc(50%_-_7.33px)] left-[40%] tracking-[0.5px] leading-[12px] inline-block h-[19.55px]">
            Alumni
          </div>
          <img
            className="absolute h-[73.66%] w-[22.12%] top-[0%] right-[77.88%] bottom-[26.34%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={dimensionCodeText}
          />
        </div>
        <div
          className="absolute w-[36%] top-[calc(50%_+_95.85px)] right-[52.62%] left-[11.38%] h-[24.44px] opacity-[0.6]"
          style={eventsStyle}
        >
          <div className="absolute w-[58.33%] top-[calc(50%_-_7.33px)] left-[41.67%] tracking-[0.5px] leading-[12px] inline-block h-[19.55px]">
            Events
          </div>
          <img
            className="absolute h-[73.66%] w-[23.04%] top-[0%] right-[76.96%] bottom-[26.34%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={dimensionCodeImageUrl}
          />
        </div>
        <div
          className="absolute w-[68%] top-[calc(50%_+_164.28px)] right-[19.62%] left-[12.38%] h-[24.44px] opacity-[0.6]"
          style={announcementStyle}
        >
          <div className="absolute w-[77.94%] top-[calc(50%_-_7.33px)] left-[22.06%] tracking-[0.5px] leading-[12px] inline-block h-[19.55px]">
            Announcements
          </div>
          <img
            className="absolute h-[73.66%] w-[12.2%] top-[0%] right-[87.8%] bottom-[26.34%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={dimensionCodeText2}
          />
        </div>
        <div
          className="absolute w-[58%] top-[calc(50%_-_109.42px)] right-[30.12%] left-[11.88%] h-[29.32px] opacity-[0.6]"
          style={pendingJobsStyle}
        >
          <div className="absolute w-9/12 top-[calc(50%_-_9.77px)] left-[25%] tracking-[0.5px] leading-[12px] inline-block h-[19.55px]">
            Pending Jobs
          </div>
          <img
            className="absolute h-full w-[15.52%] top-[0%] right-[84.48%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={dimensionCodeImageUrl2}
          />
        </div>
        <div
          className="absolute w-[52%] top-[calc(50%_-_177.85px)] right-[36.62%] left-[11.38%] h-[24.44px] opacity-[0.6]"
          style={companiesStyle}
        >
          <div className="absolute w-[71.15%] top-[calc(50%_-_7.33px)] left-[28.85%] tracking-[0.5px] leading-[12px] inline-block h-[19.55px]">
            Companies
          </div>
          <img
            className="absolute h-[73.66%] w-[15.95%] top-[0%] right-[84.05%] bottom-[26.34%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/iconlybolddocument5.svg"
          />
        </div>
        <div
          className="absolute w-[52%] top-[calc(50%_-_246.27px)] right-[36.62%] left-[11.38%] h-[29.32px] opacity-[0.6] text-black-lighter"
          style={verificationStyle}
        >
          <div className="absolute w-[71.15%] top-[calc(50%_-_9.77px)] left-[28.85%] tracking-[0.5px] leading-[12px] font-medium inline-block h-[19.55px]">
            Verification
          </div>
          <img
            className="absolute h-full w-[17.31%] top-[0%] right-[82.69%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={dimensionCodeImageUrl3}
          />
        </div>
        <div
          className="absolute w-[51%] top-[calc(50%_-_314.7px)] right-[37.62%] left-[11.38%] h-[29.32px]"
          style={dashboardStyle}
        >
          <div className="absolute w-[70.59%] top-[calc(50%_-_9.78px)] left-[29.41%] tracking-[0.5px] leading-[12px] font-medium inline-block h-[19.55px]">
            Dashboard
          </div>
          <img
            className="absolute h-full w-[17.65%] top-[0%] right-[82.35%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={dimensionCodeTextImageUrl}
          />
        </div>
        <div
          className="absolute top-[0px] left-[24.7px] text-2xs tracking-[1px] leading-[11px] inline-block w-[84.63px] h-[17.92px]"
          style={aDMINMENUStyle}
        >
          ADMIN MENU
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;

import DashboardContainer from "./DashboardContainer";
import EditProfileFormContainer from "./EditProfileFormContainer";

const AdminProfile = () => {
  return (
    <div className="relative bg-white1 w-full h-[960px] overflow-hidden text-left text-xs text-darkslategray-300 font-poppins">
      <div className="absolute top-[22px] left-[1140px] flex flex-row items-center justify-start">
        <div className="relative tracking-[0.5px] leading-[13px] inline-block w-[155px] h-[13px] shrink-0">
          Leah Joyce G. Bancale
        </div>
        <img
          className="relative rounded-31xl w-[17px] h-[17px] object-cover"
          alt=""
          src="/image-7@2x.png"
        />
      </div>
      <DashboardContainer
        dimensionCode="/iconlyboldprofile1.svg"
        dimensionCodeText="/iconlybolddocument2.svg"
        dimensionCodeImageUrl="/iconlybolddocument3.svg"
        dimensionCodeText2="/iconlybolddocument4.svg"
        dimensionCodeImageUrl2="/iconlyboldchat1.svg"
        dimensionCodeImageUrl3="/iconlybolddocument6.svg"
        dimensionCodeTextImageUrl="/iconlyboldchart1.svg"
        iconlyBoldProfileLeft="8px"
        jobListingTop="381px"
        manageMenuRight="28.73%"
        manageMenuLeft="26.27%"
        manageMenuRight1="39.12%"
        manageMenuLeft1="11.88%"
        manageMenuRight2="50.12%"
        manageMenuLeft2="12.38%"
        manageMenuRight3="52.62%"
        manageMenuLeft3="11.38%"
        customerReviewRight="19.62%"
        customerReviewLeft="12.38%"
        manageMenuRight4="30.12%"
        manageMenuLeft4="11.88%"
        foodOrderRight="36.62%"
        foodOrderLeft="11.38%"
        dashboardRight="36.62%"
        dashboardLeft="11.38%"
        propRight="37.62%"
        propLeft="11.38%"
        propLeft1="24.7px"
      />
      <div className="absolute top-[63.75px] left-[-0.25px] box-border w-[1440.5px] h-[0.5px] border-t-[0.5px] border-solid border-lightgray" />
      <div className="absolute top-[94px] left-[307px] text-3xl tracking-[-0.01em] font-semibold text-black inline-block w-[187.44px]">
        Profile Page
      </div>
      <div className="absolute top-[159px] left-[302px] w-[750px] h-[485px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-3xs w-[750px] h-[485px]"
          alt=""
          src="/rectangle-64.svg"
        />
        <EditProfileFormContainer />
      </div>
      <div className="absolute top-[11px] left-[33px] w-[130px] h-[42px] flex flex-row items-center justify-start gap-[18px] text-5xl text-white font-inter">
        <div className="relative w-[42px] h-[38.53px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-195xl w-[42px] h-[38.53px] object-cover"
            alt=""
            src="/image-12@2x.png"
          />
        </div>
        <div className="relative font-extrabold">ACES</div>
      </div>
    </div>
  );
};

export default AdminProfile;

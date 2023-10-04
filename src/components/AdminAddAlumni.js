import DashboardContainer from "./DashboardContainer";
import InactiveCardContainer from "./InactiveCardContainer";
import AddAlumniForm from "./AddAlumniForm";

const AdminAddAlumni = () => {
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
      />
      <div className="absolute top-[63.75px] left-[-0.25px] box-border w-[1440.5px] h-[0.5px] border-t-[0.5px] border-solid border-lightgray" />
      <div className="absolute top-[95px] left-[281px] w-[1099px] h-[819px] text-silver-100">
        <img
          className="absolute top-[-50px] left-[-60px] rounded-11xl w-[1219px] h-[915px]"
          alt=""
          src="/rectangle-30.svg"
        />
        <div className="absolute top-[758.41px] left-[42.4px] text-sm tracking-[-0.01em] font-medium inline-block w-[271.12px] h-[20.52px]">
          Showing data 1 to 8 of 256K entries
        </div>
        <div className="absolute top-[54.73px] left-[42.4px] text-3xl tracking-[-0.01em] font-semibold text-black inline-block w-[124.96px] h-[32.25px]">
          All Alumni
        </div>
        <div className="absolute top-[93.82px] left-[42.4px] text-sm tracking-[-0.01em] text-mediumaquamarine-100 inline-block w-[123.84px] h-[20.52px]">
          Active Members
        </div>
        <InactiveCardContainer />
        <div className="absolute top-[68.41px] left-[311px] w-[240.99px] h-[37.14px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-ghostwhite w-[240.99px] h-[37.14px]" />
          <div className="absolute top-[9.77px] left-[44.63px] tracking-[-0.01em] inline-block w-[46.86px] h-[17.59px]">
            Search
          </div>
          <img
            className="absolute top-[6.84px] left-[8.93px] w-[26.78px] h-[23.46px] overflow-hidden"
            alt=""
            src="/search-1.svg"
          />
        </div>
        <div className="absolute top-[68.41px] left-[859.09px] w-[171.82px] h-[37.14px] text-gray-100">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-ghostwhite w-[171.82px] h-[37.14px]" />
          <img
            className="absolute top-[9.77px] left-[138.35px] w-[20.08px] h-[17.59px] overflow-hidden"
            alt=""
            src="/chevrondown-1.svg"
          />
          <div className="absolute top-[9.77px] left-[16.74px] tracking-[-0.01em] inline-block w-[108.22px] h-[17.59px]">
            <span>{`Short by : `}</span>
            <span className="font-semibold text-darkslategray-200">USC ID</span>
          </div>
        </div>
        <div className="absolute top-[756.45px] left-[733.02px] w-[299.35px] h-6 text-darkslategray-100">
          <div className="absolute top-[0px] left-[42.4px] rounded bg-blueviolet flex flex-col items-center justify-center py-1.5 px-2.5 text-white1 border-[1px] border-solid border-blueviolet">
            <div className="relative tracking-[-0.01em] leading-[100%] font-medium">
              1
            </div>
          </div>
          <div className="absolute top-[0px] left-[83.68px] rounded bg-whitesmoke-100 flex flex-col items-center justify-center py-1.5 px-[9px] border-[1px] border-solid border-whitesmoke-200">
            <div className="relative tracking-[-0.01em] leading-[100%] font-medium">
              2
            </div>
          </div>
          <div className="absolute top-[0px] left-[165.12px] rounded bg-whitesmoke-100 flex flex-col items-center justify-center py-1.5 px-[9px] border-[1px] border-solid border-whitesmoke-200">
            <div className="relative tracking-[-0.01em] leading-[100%] font-medium">
              4
            </div>
          </div>
          <div className="absolute top-[0px] left-[230.95px] rounded bg-whitesmoke-100 flex flex-col items-center justify-center py-1.5 px-[5px] border-[1px] border-solid border-whitesmoke-200">
            <div className="relative tracking-[-0.01em] leading-[100%] font-medium">
              40
            </div>
          </div>
          <div className="absolute top-[0px] left-[273.35px] rounded bg-whitesmoke-100 flex flex-col items-center justify-center py-1.5 px-[9px] border-[1px] border-solid border-whitesmoke-200">
            <div className="relative tracking-[-0.01em] leading-[100%] font-medium">{`>`}</div>
          </div>
          <div className="absolute top-[0px] left-[0px] rounded bg-whitesmoke-100 flex flex-col items-center justify-center py-1.5 px-[9px] border-[1px] border-solid border-whitesmoke-200">
            <div className="relative tracking-[-0.01em] leading-[100%] font-medium">{`<`}</div>
          </div>
          <div className="absolute top-[7.82px] left-[207.52px] tracking-[-0.01em] leading-[100%] font-medium text-black inline-block w-[10.04px] h-[11.73px]">
            ...
          </div>
          <div className="absolute top-[0px] left-[124.96px] rounded bg-whitesmoke-100 flex flex-col items-center justify-center py-1.5 px-2 border-[1px] border-solid border-whitesmoke-200">
            <div className="relative tracking-[-0.01em] leading-[100%] font-medium">
              3
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[111px] left-[1172px] flex flex-row items-start justify-start gap-[8px] text-sm text-mediumslateblue">
        <div className="rounded bg-mediumblue box-border w-[98px] h-10 flex flex-row items-center justify-center py-1 px-3 border-[1px] border-solid border-mediumslateblue">
          <div className="relative tracking-[-0.01em] font-medium">
            Add Alumni
          </div>
        </div>
        <div className="rounded bg-mediumaquamarine-300 box-border w-[89px] h-10 flex flex-row items-center justify-center py-1 px-3 text-seagreen border-[1px] border-solid border-mediumseagreen">
          <div className="relative tracking-[-0.01em] font-medium">
            Upload CSV
          </div>
        </div>
      </div>
      <div className="absolute h-[92.92%] w-[83.33%] top-[7.08%] right-[0%] bottom-[0%] left-[16.67%] bg-black opacity-[0.5]" />
      <AddAlumniForm />
    </div>
  );
};

export default AdminAddAlumni;

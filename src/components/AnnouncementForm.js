import ClassicButtontrue from "./ClassicButtontrue";

const AnnouncementForm = () => {
  return (
    <div className="absolute top-[167px] left-[546px] bg-white1 w-[530px] h-[461px] overflow-hidden text-left text-sm text-black font-lato">
      <ClassicButtontrue
        text="Browse"
        classicButtontruePosition="absolute"
        classicButtontrueTop="351px"
        classicButtontrueLeft="145px"
        buttonBackgroundColor="#0098ff"
      />
      <ClassicButtontrue
        text="Post"
        classicButtontruePosition="absolute"
        classicButtontrueTop="418px"
        classicButtontrueLeft="430px"
        buttonBackgroundColor="#2e2376"
      />
      <div className="absolute top-[133px] left-[14px] w-[247px] h-7">
        <b className="absolute top-[7px] left-[0px] leading-[100%]">Sent to:</b>
        <div className="absolute top-[0px] left-[133px] bg-gainsboro-400 w-[114px] h-7" />
        <b className="absolute top-[5px] left-[152px] leading-[100%]">All</b>
        <img
          className="absolute h-[29.85%] w-[3.06%] top-[35.71%] right-[5.44%] bottom-[34.43%] left-[91.5%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        />
      </div>
      <div className="absolute top-[181px] left-[14px] w-[319px] h-[27px]">
        <b className="absolute top-[1.78px] left-[0px] leading-[100%] inline-block w-8 h-[3.57px]">
          Title:
        </b>
        <div className="absolute top-[0px] left-[133px] bg-gainsboro-400 w-[186px] h-[27px]" />
      </div>
      <div className="absolute top-[222px] left-[14px] w-[319px] h-[106px]">
        <b className="absolute top-[7px] left-[0px] leading-[100%]">
          Description:
        </b>
        <div className="absolute top-[0px] left-[133px] bg-gainsboro-400 w-[186px] h-[106px]" />
      </div>
      <div className="absolute top-[348px] left-[11px] w-[85px] h-[15px]">
        <b className="absolute top-[0px] left-[0px] leading-[100%] inline-block w-[85px] h-[15px]">
          Upload File:
        </b>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-midnightblue w-[530px] h-[88px] overflow-hidden text-xl text-white1">
        <b className="absolute top-[34px] left-[21px] leading-[100%]">
          Add Announcement
        </b>
        <img
          className="absolute top-[32px] left-[481px] w-5 h-[23px] object-cover"
          alt=""
          src="/close-window@2x.png"
        />
      </div>
    </div>
  );
};

export default AnnouncementForm;

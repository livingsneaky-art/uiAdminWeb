import ClassicButtontrue from "./ClassicButtontrue";

const AddAlumniForm = () => {
  return (
    <div className="absolute top-[204px] left-[559px] bg-white1 w-[439px] h-[398px] overflow-hidden text-left text-sm text-black font-lato">
      <div className="absolute top-[0px] left-[0px] bg-midnightblue w-[439px] h-[61px] overflow-hidden flex flex-row items-start justify-start py-[13px] px-[11px] box-border gap-[287px] text-xl text-white1">
        <b className="relative leading-[100%]">Add Alumni</b>
        <img
          className="relative w-5 h-[23px] object-cover"
          alt=""
          src="/close-window@2x.png"
        />
      </div>
      <ClassicButtontrue
        text="Add Alumni"
        classicButtontruePosition="absolute"
        classicButtontrueTop="355px"
        classicButtontrueLeft="336px"
        buttonBackgroundColor="#2e2376"
      />
      <img
        className="absolute top-[60px] left-[4.5px] w-[434.5px] h-px"
        alt=""
        src="/line-21.svg"
      />
      <div className="absolute top-[90px] left-[4px] w-[404px] h-6">
        <b className="absolute top-[7px] left-[0px] leading-[100%]">
          First Name:
        </b>
        <div className="absolute top-[0px] left-[133px] bg-gainsboro-400 w-[271px] h-6" />
      </div>
      <div className="absolute top-[129px] left-[4px] w-[404px] h-[21px]">
        <b className="absolute top-[7px] left-[0px] leading-[100%]">
          Middle Name:
        </b>
        <div className="absolute top-[0px] left-[133px] bg-gainsboro-400 w-[271px] h-[21px]" />
      </div>
      <div className="absolute top-[168px] left-[4px] w-[401px] h-6">
        <b className="absolute top-[7px] left-[0px] leading-[100%]">
          Last Name:
        </b>
        <div className="absolute top-[0px] left-[133px] bg-gainsboro-400 w-[268px] h-6" />
      </div>
      <div className="absolute top-[209px] left-[4px] w-[401px] h-[22px]">
        <b className="absolute top-[7px] left-[0px] leading-[100%]">
          ID Number:
        </b>
        <div className="absolute top-[0px] left-[133px] bg-gainsboro-400 w-[268px] h-[22px]" />
      </div>
      <div className="absolute top-[290px] left-[4px] w-[401px] h-[22px]">
        <b className="absolute top-[7px] left-[0px] leading-[100%]">Batch:</b>
        <div className="absolute top-[0px] left-[133px] bg-gainsboro-400 w-[268px] h-[22px]" />
      </div>
      <div className="absolute top-[248px] left-[4px] w-[401px] h-[27px]">
        <b className="absolute top-[7px] left-[0px] leading-[100%]">
          Program Graduated:
        </b>
        <div className="absolute top-[0px] left-[133px] bg-gainsboro-400 w-[268px] h-[27px]" />
        <img
          className="absolute h-[26.73%] w-[1.56%] top-[44.44%] right-[3.18%] bottom-[28.83%] left-[95.26%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
        <b className="absolute top-[9px] left-[173px] leading-[100%]">
          BS Computer Science
        </b>
      </div>
    </div>
  );
};

export default AddAlumniForm;

import { useMemo } from "react";

const DeleteCard = ({
  eventTitle,
  propTop,
  propWidth,
  propHeight,
  propHeight1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
      width: propWidth,
    };
  }, [propTop, propWidth]);

  const allAlumniStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const uSCDowntownCampusStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div
      className="absolute top-[83px] left-[35.2px] w-[1008px] flex flex-row items-center justify-start gap-[65px] text-left text-sm text-darkslategray-500 font-poppins"
      style={frameDivStyle}
    >
      <div className="relative tracking-[-0.01em] font-medium inline-block w-[130px] shrink-0">
        {eventTitle}
      </div>
      <div
        className="relative tracking-[-0.01em] font-medium inline-block w-[90px] h-7 shrink-0"
        style={allAlumniStyle}
      >
        All Alumni
      </div>
      <div className="relative tracking-[-0.01em] font-medium flex items-center w-[140px] h-16 shrink-0">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">13-05-2023</p>
          <p className="m-0">10:00 AM - 5:00 PM</p>
        </span>
      </div>
      <div
        className="relative tracking-[-0.01em] font-medium inline-block w-[120px] shrink-0"
        style={uSCDowntownCampusStyle}
      >
        USC Downtown Campus
      </div>
      <div className="flex flex-row items-start justify-start gap-[14px] text-darkblue-100">
        <div className="rounded bg-darkblue-200 box-border w-[81px] h-[29px] flex flex-row items-center justify-center py-1 px-3 text-3xs border-[1px] border-solid border-darkblue-100">
          <div className="relative tracking-[-0.01em] font-medium">
            View Attendees
          </div>
        </div>
        <div className="rounded bg-gold-200 box-border w-20 flex flex-row items-center justify-center py-1 px-3 text-darkgoldenrod border-[1px] border-solid border-darkgoldenrod">
          <div className="relative tracking-[-0.01em] font-medium">Edit</div>
        </div>
        <div className="rounded bg-pink flex flex-row items-center justify-center py-1 px-3 text-red border-[1px] border-solid border-red">
          <div className="relative tracking-[-0.01em] font-medium">Delete</div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCard;

import { useMemo } from "react";

const ClassicButtontrue = ({
  text = "Browse File",
  classicButtontruePosition,
  classicButtontrueTop,
  classicButtontrueLeft,
  buttonBackgroundColor,
}) => {
  const classicButtontrueStyle = useMemo(() => {
    return {
      position: classicButtontruePosition,
      top: classicButtontrueTop,
      left: classicButtontrueLeft,
    };
  }, [classicButtontruePosition, classicButtontrueTop, classicButtontrueLeft]);

  const buttonStyle = useMemo(() => {
    return {
      backgroundColor: buttonBackgroundColor,
    };
  }, [buttonBackgroundColor]);

  return (
    <div
      className="w-[76px] h-[17px] flex flex-row items-center justify-center pt-0 px-0 pb-1 box-border text-left text-3xs text-white1 font-lato"
      style={classicButtontrueStyle}
    >
      <div
        className="rounded bg-dodgerblue shadow-[0px_3px_8px_rgba(136,_144,_194,_0.25),_0px_7px_21px_rgba(37,_44,_97,_0.2)] w-[71px] h-6 overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-8 box-border"
        style={buttonStyle}
      >
        <b className="relative leading-[100%]">{text}</b>
      </div>
    </div>
  );
};

export default ClassicButtontrue;

const EditProfileFormContainer = () => {
  return (
    <div className="absolute top-[21.8px] left-[37px] w-[640.82px] h-[346.98px] text-left text-base text-gray-200 font-inter">
      <div className="absolute top-[301.2px] left-[128px] w-[512.82px] h-[45.78px] text-white1">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gold-100 w-[512.82px] h-[45.78px]" />
        <b className="absolute top-[13px] left-[175px] inline-block w-[137.87px] h-[20.71px]">{`EDIT PROFILE `}</b>
      </div>
      <b className="absolute top-[41.2px] left-[333px] inline-block w-[245px] h-[116px]">
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          Joe Jonas
        </p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          admin@gmail.com
        </p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          ..............
        </p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          Administrator
        </p>
      </b>
      <div className="absolute top-[41.2px] left-[155px] inline-block w-[94px] h-[169px]">
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          Full Name
        </p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">Email</p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          Password
        </p>
        <p className="[margin-block-start:0] [margin-block-end:10px]">
          Position
        </p>
        <p className="m-0">Upload Profile</p>
      </div>
      <b className="absolute top-[0px] left-[155.31px] inline-block text-black w-[257.69px] h-[20.71px]">
        ADMIN INFORMATION
      </b>
      <div className="absolute top-[172.2px] left-[333px] rounded bg-dodgerblue box-border w-36 h-[33px] flex flex-row items-center justify-center py-1 px-3 text-xs text-gainsboro-100 font-poppins border-[1px] border-solid border-gainsboro-100">
        <div className="relative tracking-[-0.01em] font-medium">Browse</div>
      </div>
      <img
        className="absolute top-[41.2px] left-[0px] rounded-31xl w-[106px] h-[117px] object-cover"
        alt=""
        src="/image-8@2x.png"
      />
    </div>
  );
};

export default EditProfileFormContainer;

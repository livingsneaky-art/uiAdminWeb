const ContainerDelete = () => {
  return (
    <div className="absolute top-[301px] left-[34.7px] flex flex-row items-center justify-start gap-[65px] text-left text-sm text-darkslategray-500 font-poppins">
      <div className="relative tracking-[-0.01em] font-medium inline-block w-[130px] shrink-0">
        Guest Speaker
      </div>
      <div className="relative tracking-[-0.01em] font-medium inline-block w-[90px] shrink-0">
        Alliance
      </div>
      <div className="relative tracking-[-0.01em] font-medium inline-block w-[139px] h-[58px] shrink-0">
        <p className="m-0">13-05-2023</p>
        <p className="m-0">10:00 AM - 5:00 PM</p>
      </div>
      <div className="relative tracking-[-0.01em] font-medium inline-block w-[120px] shrink-0">
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

export default ContainerDelete;

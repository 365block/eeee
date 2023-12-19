import { FunctionComponent } from "react";

type ListCaType = {
  prop?: string;
  showMapPinLineIcon?: boolean;
  calendar2LineIcon?: boolean;
  ruler2LineIcon?: boolean;
  toolsLineIcon?: boolean;
  buildingLineIcon?: boolean;
  handCoinLineIcon?: boolean;
  tempHotLineIcon?: boolean;
};

const ListCa: FunctionComponent<ListCaType> = ({
  prop,
  showMapPinLineIcon,
  calendar2LineIcon,
  ruler2LineIcon,
  toolsLineIcon,
  buildingLineIcon,
  handCoinLineIcon,
  tempHotLineIcon,
}) => {
  return (
    <div className="self-stretch bg-white flex flex-row items-center justify-between py-3 px-5 text-left text-sm text-dark font-body border-b-[1px] border-solid border-grey-d">
      <div className="flex-1 shrink-0 flex flex-row items-center justify-start gap-[8px]">
        {showMapPinLineIcon && (
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/mappinline@2x.png"
          />
        )}
        {!calendar2LineIcon && (
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/calendar2line@2x.png"
          />
        )}
        {!ruler2LineIcon && (
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/ruler2line@2x.png"
          />
        )}
        {!toolsLineIcon && (
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/toolsline@2x.png"
          />
        )}
        {!buildingLineIcon && (
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/buildingline@2x.png"
          />
        )}
        {!handCoinLineIcon && (
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/handcoinline@2x.png"
          />
        )}
        {!tempHotLineIcon && (
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/temphotline@2x.png"
          />
        )}
        <b className="flex-1 relative">{prop}</b>
      </div>
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
        alt=""
        src="/addline@2x.png"
      />
    </div>
  );
};

export default ListCa;

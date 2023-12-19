import { FunctionComponent } from "react";
import LogoIcon from "./LogoIcon";

const Footer: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-start text-left text-base text-dark font-body">
      <div className="w-[346px] flex flex-col items-start justify-center">
        <LogoIcon />
      </div>
      <div className="self-stretch flex flex-row items-center justify-center">
        <div className="self-stretch box-border w-40 flex flex-row items-center justify-center gap-[4px] border-b-[4px] border-solid border-dark">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/roadmapline@2x.png"
          />
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/roadmapfill@2x.png"
          />
          <b className="relative">지도보기</b>
        </div>
        <div className="self-stretch w-40 flex flex-row items-center justify-center gap-[4px] text-grey-9">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/gridline@2x.png"
          />
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/gridfill@2x.png"
          />
          <div className="relative">표 테이블</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

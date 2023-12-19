import { FunctionComponent } from "react";
import Footer from "./Footer";
import Search from "./Search";

const Top1: FunctionComponent = () => {
  return (
    <div className="bg-white box-border w-[1920px] h-16 flex flex-row items-center justify-between py-0 px-5 text-center text-xs text-white font-body border-b-[1px] border-solid border-grey-d">
      <div className="self-stretch flex-1 flex flex-row items-center justify-between">
        <Footer />
        <div className="flex flex-row items-center justify-center gap-[20px]">
          <Search
            searchFields="건물명, 투자자(소유자), 자산운용사, 주소, 임차인"
            searchWidth="500px"
            searchHeight="40px"
          />
          <div className="shrink-0 flex flex-row items-center justify-center gap-[8px]">
            <div className="bg-dark w-[120px] h-9 flex flex-row items-center justify-center gap-[4px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/layoutmasonryline@2x.png"
              />
              <b className="relative">지적편집도</b>
            </div>
            <div className="bg-dark w-[120px] h-9 flex flex-row items-center justify-center gap-[4px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/editcircleline@2x.png"
              />
              <b className="relative">반경</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top1;

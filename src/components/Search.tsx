import { FunctionComponent, useMemo, type CSSProperties } from "react";

type SearchType = {
  searchFields?: string;

  /** Style props */
  searchWidth?: CSSProperties["width"];
  searchHeight?: CSSProperties["height"];
};

const Search: FunctionComponent<SearchType> = ({
  searchFields,
  searchWidth,
  searchHeight,
}) => {
  const searchStyle: CSSProperties = useMemo(() => {
    return {
      width: searchWidth,
      height: searchHeight,
    };
  }, [searchWidth, searchHeight]);

  return (
    <div
      className="w-full rounded bg-white box-border h-11 overflow-hidden shrink-0 flex flex-row items-center justify-start py-0 px-3 gap-[12px] text-left text-sm text-grey-9 font-body border-[1px] border-solid border-grey-d"
      style={searchStyle}
    >
      <div className="flex-1 relative">{searchFields}</div>
      <img
        className="relative w-5 h-5 overflow-hidden shrink-0 object-cover hidden"
        alt=""
        src="/xcircle@2x.png"
      />
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
        alt=""
        src="/feather-icons--search@2x.png"
      />
    </div>
  );
};

export default Search;

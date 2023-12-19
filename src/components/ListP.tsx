import { FunctionComponent, useMemo, type CSSProperties } from "react";

type ListPType = {
  buildingArea?: string;
  licenseNumber?: string;
  constructionStatus?: string;
  approvalStatus?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorderTop?: CSSProperties["borderTop"];
  propBorderBottom?: CSSProperties["borderBottom"];
  propColor?: CSSProperties["color"];
  propFontWeight?: CSSProperties["fontWeight"];
  propColor1?: CSSProperties["color"];
  propFontWeight1?: CSSProperties["fontWeight"];
  propTextAlign?: CSSProperties["textAlign"];
  propColor2?: CSSProperties["color"];
  propFontWeight2?: CSSProperties["fontWeight"];
  propTextAlign1?: CSSProperties["textAlign"];
  propColor3?: CSSProperties["color"];
  propFontWeight3?: CSSProperties["fontWeight"];
  propTextAlign2?: CSSProperties["textAlign"];
};

const ListP: FunctionComponent<ListPType> = ({
  buildingArea,
  licenseNumber,
  constructionStatus,
  approvalStatus,
  propBackgroundColor,
  propBorderTop,
  propBorderBottom,
  propColor,
  propFontWeight,
  propColor1,
  propFontWeight1,
  propTextAlign,
  propColor2,
  propFontWeight2,
  propTextAlign1,
  propColor3,
  propFontWeight3,
  propTextAlign2,
}) => {
  const listPStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      borderTop: propBorderTop,
      borderBottom: propBorderBottom,
    };
  }, [propBackgroundColor, propBorderTop, propBorderBottom]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      fontWeight: propFontWeight,
    };
  }, [propColor, propFontWeight]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
      fontWeight: propFontWeight1,
      textAlign: propTextAlign,
    };
  }, [propColor1, propFontWeight1, propTextAlign]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
      fontWeight: propFontWeight2,
      textAlign: propTextAlign1,
    };
  }, [propColor2, propFontWeight2, propTextAlign1]);

  const div3Style: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
      fontWeight: propFontWeight3,
      textAlign: propTextAlign2,
    };
  }, [propColor3, propFontWeight3, propTextAlign2]);

  return (
    <div
      className="self-stretch bg-background flex flex-row items-center justify-center p-2 text-center text-xs text-grey-6 font-body border-t-[1px] border-solid border-grey-d border-b-[1px]"
      style={listPStyle}
    >
      <div
        className="relative flex items-center justify-center w-14 shrink-0"
        style={divStyle}
      >
        {buildingArea}
      </div>
      <div className="flex-1 relative" style={div1Style}>
        {licenseNumber}
      </div>
      <div className="flex-1 relative" style={div2Style}>
        {constructionStatus}
      </div>
      <div className="flex-1 relative" style={div3Style}>
        {approvalStatus}
      </div>
    </div>
  );
};

export default ListP;

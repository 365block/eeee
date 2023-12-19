import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ListP from "./ListP";

type SummaryContainerType = {
  buildingAreaCountTotalBui?: string;
  countText?: string;
  areaCountTotalAreaTable?: string;
  dataValue?: string;
  dataValueCount?: string;
  countValue?: string;
  dataValueText?: string;
  dataValueTextCount?: string;
  dataValueNumber?: string;
  dataValueNumberText?: string;
  countNumber?: string;
  dataValueTextCountNumber?: string;
  dataValueNumberTextCountN?: string;
  countValueText?: string;
  dataValueTextCountNumber2?: string;
  countNumberText?: string;

  /** Style props */
  propTextAlign?: CSSProperties["textAlign"];
  propTextAlign1?: CSSProperties["textAlign"];
  propTextAlign2?: CSSProperties["textAlign"];
  propTextAlign3?: CSSProperties["textAlign"];
  propTextAlign4?: CSSProperties["textAlign"];
  propTextAlign5?: CSSProperties["textAlign"];
  propTextAlign6?: CSSProperties["textAlign"];
  propTextAlign7?: CSSProperties["textAlign"];
  propTextAlign8?: CSSProperties["textAlign"];
  propTextAlign9?: CSSProperties["textAlign"];
  propTextAlign10?: CSSProperties["textAlign"];
  propTextAlign11?: CSSProperties["textAlign"];
  propTextAlign12?: CSSProperties["textAlign"];
  propTextAlign13?: CSSProperties["textAlign"];
  propTextAlign14?: CSSProperties["textAlign"];
};

const SummaryContainer: FunctionComponent<SummaryContainerType> = ({
  buildingAreaCountTotalBui,
  countText,
  areaCountTotalAreaTable,
  dataValue,
  dataValueCount,
  countValue,
  dataValueText,
  dataValueTextCount,
  dataValueNumber,
  dataValueNumberText,
  countNumber,
  dataValueTextCountNumber,
  dataValueNumberTextCountN,
  countValueText,
  dataValueTextCountNumber2,
  countNumberText,
  propTextAlign,
  propTextAlign1,
  propTextAlign2,
  propTextAlign3,
  propTextAlign4,
  propTextAlign5,
  propTextAlign6,
  propTextAlign7,
  propTextAlign8,
  propTextAlign9,
  propTextAlign10,
  propTextAlign11,
  propTextAlign12,
  propTextAlign13,
  propTextAlign14,
}) => {
  const div1Style: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign1,
    };
  }, [propTextAlign1]);

  const div3Style: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign2,
    };
  }, [propTextAlign2]);

  const div1Style1: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign3,
    };
  }, [propTextAlign3]);

  const div2Style1: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign4,
    };
  }, [propTextAlign4]);

  const div3Style1: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign5,
    };
  }, [propTextAlign5]);

  const div1Style2: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign6,
    };
  }, [propTextAlign6]);

  const div2Style2: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign7,
    };
  }, [propTextAlign7]);

  const div3Style2: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign8,
    };
  }, [propTextAlign8]);

  const div1Style3: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign9,
    };
  }, [propTextAlign9]);

  const div2Style3: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign10,
    };
  }, [propTextAlign10]);

  const div3Style3: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign11,
    };
  }, [propTextAlign11]);

  const div1Style4: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign12,
    };
  }, [propTextAlign12]);

  const div2Style4: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign13,
    };
  }, [propTextAlign13]);

  const div3Style4: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign14,
    };
  }, [propTextAlign14]);

  return (
    <div className="self-stretch rounded-xl bg-white flex flex-col items-center justify-start p-5 gap-[8px] text-left text-base text-dark font-body border-[1px] border-solid border-grey-e">
      <b className="self-stretch relative">{buildingAreaCountTotalBui}</b>
      <div className="self-stretch flex flex-col items-center justify-start text-center text-xs text-grey-6">
        <ListP
          buildingArea="연면적(평)"
          licenseNumber="인허가"
          constructionStatus="착공"
          approvalStatus="사용승인"
          propBackgroundColor="#f2f3f4"
          propBorderTop="1px solid #ddd"
          propBorderBottom="1px solid #ddd"
          propColor="#666"
          propColor1="#666"
          propTextAlign="center"
          propColor2="#666"
          propTextAlign1="center"
          propColor3="#666"
          propTextAlign2="center"
        />
        <ListP
          buildingArea="3천~5천"
          licenseNumber="3"
          constructionStatus="1"
          approvalStatus="3"
          propBackgroundColor="#fff"
          propBorderTop="unset"
          propBorderBottom="1px solid #ddd"
          propColor="#333"
          propFontWeight="unset"
          propColor1="#333"
          propFontWeight1="unset"
          propTextAlign="center"
          propColor2="#333"
          propFontWeight2="unset"
          propTextAlign1="center"
          propColor3="#333"
          propFontWeight3="unset"
          propTextAlign2="center"
        />
        <ListP
          buildingArea="5천~1만"
          licenseNumber="1"
          constructionStatus="2"
          approvalStatus="1"
          propBackgroundColor="#fff"
          propBorderTop="unset"
          propBorderBottom="1px solid #ddd"
          propColor="#333"
          propFontWeight="unset"
          propColor1="#333"
          propFontWeight1="unset"
          propTextAlign="center"
          propColor2="#333"
          propFontWeight2="unset"
          propTextAlign1="center"
          propColor3="#333"
          propFontWeight3="unset"
          propTextAlign2="center"
        />
        <ListP
          buildingArea="1만~2만"
          licenseNumber="1"
          constructionStatus="1"
          approvalStatus="3"
          propBackgroundColor="#fff"
          propBorderTop="unset"
          propBorderBottom="1px solid #ddd"
          propColor="#333"
          propFontWeight="unset"
          propColor1="#333"
          propFontWeight1="unset"
          propTextAlign="center"
          propColor2="#333"
          propFontWeight2="unset"
          propTextAlign1="center"
          propColor3="#333"
          propFontWeight3="unset"
          propTextAlign2="center"
        />
        <ListP
          buildingArea="2만 이상"
          licenseNumber="2"
          constructionStatus="1"
          approvalStatus="3"
          propBackgroundColor="#fff"
          propBorderTop="unset"
          propBorderBottom="1px solid #333"
          propColor="#333"
          propFontWeight="unset"
          propColor1="#333"
          propFontWeight1="unset"
          propTextAlign="center"
          propColor2="#333"
          propFontWeight2="unset"
          propTextAlign1="center"
          propColor3="#333"
          propFontWeight3="unset"
          propTextAlign2="center"
        />
        <ListP
          buildingArea="합계"
          licenseNumber="7"
          constructionStatus="5"
          approvalStatus="4"
          propBackgroundColor="#fff"
          propBorderTop="unset"
          propBorderBottom="1px solid #ddd"
          propColor="#333"
          propFontWeight="bold"
          propColor1="#333"
          propFontWeight1="bold"
          propTextAlign="center"
          propColor2="#333"
          propFontWeight2="bold"
          propTextAlign1="center"
          propColor3="#333"
          propFontWeight3="bold"
          propTextAlign2="center"
        />
      </div>
    </div>
  );
};

export default SummaryContainer;

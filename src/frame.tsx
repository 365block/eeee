import { FunctionComponent } from "react";
import "./Frame.css";
import MyGoogleMap from "./myMap";

const FrameMe: FunctionComponent = () => {
  return (
    <div className="div">
      <div className="top">
        <div className="frame-parent">
          <div className="frame-group">
            <div className="logo-wrapper">
              <img className="logo-icon" alt="" src="/logo@2x.png" />
            </div>
            <div className="div1">
              <div className="road-map-line-parent">
                <img className="road-map-line-icon" alt="" />
                <img
                  className="road-map-fill-icon"
                  alt=""
                  src="/roadmapfill@2x.png"
                />
                <b className="b">지도보기</b>
              </div>
              <div className="grid-line-parent">
                <img
                  className="road-map-fill-icon"
                  alt=""
                  src="/gridline@2x.png"
                />
                <img className="road-map-line-icon" alt="" />
                <div className="b">표 테이블</div>
              </div>
            </div>
          </div>
          <div className="search-parent">
            <div className="search">
              <div className="div3">
                건물명, 투자자(소유자), 자산운용사, 주소, 임차인
              </div>
              <img className="x-circle-icon" alt="" />
              <img
                className="road-map-fill-icon"
                alt=""
                src="/feather-icons--search@2x.png"
              />
            </div>
            <div className="frame-container">
              <div className="layout-masonry-line-parent">
                <img
                  className="layout-masonry-line-icon"
                  alt=""
                  src="/layoutmasonryline@2x.png"
                />
                <b className="b">지적편집도</b>
              </div>
              <div className="layout-masonry-line-parent">
                <img
                  className="layout-masonry-line-icon"
                  alt=""
                  src="/editcircleline@2x.png"
                />
                <b className="b">반경</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contents-parent">
        <div className="contents">
          
        <MyGoogleMap></MyGoogleMap>

        </div>
        <div className="menu">
          <div className="contents-group">
            <div className="contents1">
              <div className="div5">
                <div className="list-ca">
                  <div className="map-pin-line-parent">
                    <img
                      className="road-map-fill-icon"
                      alt=""
                      src="/mappinline@2x.png"
                    />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <b className="div3">위치</b>
                  </div>
                  <img
                    className="road-map-fill-icon"
                    alt=""
                    src="/addline@2x.png"
                  />
                </div>
                <div className="list-de">
                  <div className="frame-group">
                    <div className="div6">대권역</div>
                    <div className="input-box">
                      <div className="summary">확인</div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="div8">주소</div>
                    <div className="select-box-parent">
                      <div className="select-box">
                        <div className="div3">주소1</div>
                        <img className="xnixline-down-arrow-5-icon" alt="" />
                      </div>
                      <div className="select-box">
                        <div className="div3">주소1</div>
                        <img className="xnixline-down-arrow-5-icon" alt="" />
                      </div>
                      <div className="select-box">
                        <div className="div3">주소1</div>
                        <img className="xnixline-down-arrow-5-icon" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-ca">
                  <div className="map-pin-line-parent">
                    <img className="road-map-line-icon" alt="" />
                    <img
                      className="road-map-fill-icon"
                      alt=""
                      src="/calendar2line@2x.png"
                    />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <b className="div3">날짜</b>
                  </div>
                  <img
                    className="road-map-fill-icon"
                    alt=""
                    src="/addline@2x.png"
                  />
                </div>
                <div className="list-ca">
                  <div className="map-pin-line-parent">
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img
                      className="road-map-fill-icon"
                      alt=""
                      src="/ruler2line@2x.png"
                    />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <b className="div3">면적</b>
                  </div>
                  <img
                    className="road-map-fill-icon"
                    alt=""
                    src="/addline@2x.png"
                  />
                </div>
                <div className="list-ca">
                  <div className="map-pin-line-parent">
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img
                      className="road-map-fill-icon"
                      alt=""
                      src="/toolsline@2x.png"
                    />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <b className="div3">용도</b>
                  </div>
                  <img
                    className="road-map-fill-icon"
                    alt=""
                    src="/addline@2x.png"
                  />
                </div>
                <div className="list-ca">
                  <div className="map-pin-line-parent">
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img
                      className="road-map-fill-icon"
                      alt=""
                      src="/buildingline@2x.png"
                    />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <b className="div3">회사</b>
                  </div>
                  <img
                    className="road-map-fill-icon"
                    alt=""
                    src="/addline@2x.png"
                  />
                </div>
                <div className="list-ca">
                  <div className="map-pin-line-parent">
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img
                      className="road-map-fill-icon"
                      alt=""
                      src="/handcoinline@2x.png"
                    />
                    <img className="road-map-line-icon" alt="" />
                    <b className="div3">입/관비</b>
                  </div>
                  <img
                    className="road-map-fill-icon"
                    alt=""
                    src="/addline@2x.png"
                  />
                </div>
                <div className="list-ca">
                  <div className="map-pin-line-parent">
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img className="road-map-line-icon" alt="" />
                    <img
                      className="road-map-fill-icon"
                      alt=""
                      src="/temphotline@2x.png"
                    />
                    <b className="div3">상/저온</b>
                  </div>
                  <img
                    className="road-map-fill-icon"
                    alt=""
                    src="/addline@2x.png"
                  />
                </div>
              </div>
              <div className="div12">
                <b className="summary">Summary</b>
                <div className="parent1">
                  <div className="div13">
                    <b className="summary">연면적별 건수 집계</b>
                    <div className="list-p-parent">
                      <div className="list-p">
                        <div className="div14">연면적(평)</div>
                        <div className="div3">인허가</div>
                        <div className="div3">착공</div>
                        <div className="div3">사용승인</div>
                      </div>
                      <div className="list-p1">
                        <div className="div14">3천~5천</div>
                        <div className="div3">3</div>
                        <div className="div3">1</div>
                        <div className="div3">3</div>
                      </div>
                      <div className="list-p1">
                        <div className="div14">5천~1만</div>
                        <div className="div3">1</div>
                        <div className="div3">2</div>
                        <div className="div3">1</div>
                      </div>
                      <div className="list-p1">
                        <div className="div14">1만~2만</div>
                        <div className="div3">1</div>
                        <div className="div3">1</div>
                        <div className="div3">3</div>
                      </div>
                      <div className="list-p4">
                        <div className="div14">2만 이상</div>
                        <div className="div3">2</div>
                        <div className="div3">1</div>
                        <div className="div3">3</div>
                      </div>
                      <div className="list-p1">
                        <b className="div14">합계</b>
                        <b className="div3">7</b>
                        <b className="div3">5</b>
                        <b className="div3">4</b>
                      </div>
                    </div>
                  </div>
                  <div className="div13">
                    <b className="summary">연면적 합산표</b>
                    <div className="list-p-group">
                      <div className="list-p6">
                        <div className="div14">연면적(평)</div>
                        <div className="div3">인허가</div>
                        <div className="div3">착공</div>
                        <div className="div3">사용승인</div>
                      </div>
                      <div className="list-p1">
                        <div className="div39">3천~5천</div>
                        <div className="div3">486,623</div>
                        <div className="div3">486,623</div>
                        <div className="div3">486,623</div>
                      </div>
                      <div className="list-p1">
                        <div className="div39">5천~1만</div>
                        <div className="div3">486,623</div>
                        <div className="div3">486,623</div>
                        <div className="div3">486,623</div>
                      </div>
                      <div className="list-p1">
                        <div className="div39">1만~2만</div>
                        <div className="div3">486,623</div>
                        <div className="div3">486,623</div>
                        <div className="div3">486,623</div>
                      </div>
                      <div className="list-p4">
                        <div className="div39">2만 이상</div>
                        <div className="div3">486,623</div>
                        <div className="div3">486,623</div>
                        <div className="div3">486,623</div>
                      </div>
                      <div className="list-p1">
                        <b className="b17">합계</b>
                        <b className="div3">486,623</b>
                        <b className="div3">486,623</b>
                        <b className="div3">486,623</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          <div className="container">
            <div className="btn-big-on">
              <img
                className="road-map-fill-icon"
                alt=""
                src="/loopleftline@2x.png"
              />
              <b className="c">초기화</b>
            </div>
            <div className="btn-big-on1">
              <img
                className="road-map-fill-icon"
                alt=""
                src="/searchline@2x.png"
              />
              <b className="c">검색</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameMe;

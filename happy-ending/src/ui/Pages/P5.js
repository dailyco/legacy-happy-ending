import React from "react";
import classNames from "classnames";
import SeparatedTemplate5 from "../Templates/SeparatedTemplate5";
import P5Vedio from "../../assets/video/5-calender.mp4";

import "../../scss/Pages/P5.scss";

function P5() {
  const { year = 2020, month = 11, day = 7 } = {};

  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: ["당신은 운이 좋게도 당신의 사망일을 알 수 있게 되었습니다.", <br />, "당신에게는 오늘로부터 인생을 정리할 일주일의 시간이 주어졌습니다."],
      },
    },
    s1_data: {
      text: "예정 사망일",
    },
    s2_data: {
      text: `${year}. ${month}. ${day}`,
    },
    s3_data: {
      text: "탭하여 다음 페이지로 넘어가기",
    },
  };
  const styleName = {
    template_style: ["left"],
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    s1_style: ["noto", "xs", "eclipse", "medium"],
    s2_style: ["nanum", "xl", "eclipse", "extra-bold"],
    s3_style: ["noto", "xs", "davy-gray", "light"],
  };
  return (
    <div className={classNames("P5")}>
      <video autoPlay muted loop>
        <source src={P5Vedio} type="video/mp4" />
      </video>
      <SeparatedTemplate5 data={data} styleName={styleName}></SeparatedTemplate5>
    </div>
  );
}

export default P5;
import React from "react";
import MultiTextFieldTemplate from "../Templates/MultiTextFieldTemplate";
import P8_2_1_Video from "../../assets/video/8-2-1-stay home alone.mp4";

import "../../scss/Pages/P8_2_2.scss";

function P8_2_2() {
  const data = {
    dq_data: {
      h3_data: {
        day: 7,
      },
      p_data: {
        question: "집에서 함께 시간을 보내기로 하셨군요. 무엇을 하면서 보내시겠습니까?",
      },
    },
    mtfr_data: {
      mtfs_data: {
        l_text: "집에서 (",
        ph1: "누구",
        m_text: ")와/과 함께 (",
        ph2: "무엇을 한",
        r_text: ")다.",
      },
    },
  };
  const styleName = {
    dq_style: {
      h3_style: ["normal", "eclipse"],
      p_style: ["eclipse"],
    },
    mtfr_style: {
      mtfs_style: {
        bg_style: ["m", "strong", "charcoal-gray"],
        l_text_style: ["noto", "s", "normal", "eclipse"],
        tf1_style: ["s", "dark-white"],
        m_text_style: ["noto", "s", "normal", "eclipse"],
        tf2_style: ["s", "dark-white"],
        r_text_style: ["noto", "s", "normal", "eclipse"],
      },
      btn_style: ["xs", "white"],
    },
  };

  return (
    <div className={"P8_2_2"}>
      <video autoPlay muted loop>
        <source src={P8_2_1_Video} type="video/mp4" />
      </video>
      <MultiTextFieldTemplate data={data} styleName={styleName}></MultiTextFieldTemplate>
    </div>
  );
}

export default P8_2_2;
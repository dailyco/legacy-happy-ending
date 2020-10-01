import React from "react";
import classNames from "classnames";
import SeperatedTemplate3 from "../Templates/SeperatedTemplate3";

import "../../scss/Pages/P3.scss";

function P3() {
  const data = {
    h3_data: {
      text: "Prologue",
    },
    p_data: {
      text: [
        "인생은 한 권의 책과 같다.",
        <br />,
        "어리석은 사람은 대충 책장을 넘기지만, 현명한 사람은 공들여 읽는다.",
        <br />,
        "그들은 단 한 번밖에 읽지 못하는 것을 알기 때문이다.",
        <br />,
        <br />,
        "장파울",
      ],
    },
    span_data: {
      text: "탭하여 다음 페이지로 넘어가기",
    },
  };
  const styleName = {
    template_style: ["center"],
    h3_style: ["normal", "eclipse"],
    p_style: ["eclipse"],
    span_style: ["noto", "xs", "davy-gray", "light"],
  };
  return (
    <div className={classNames("P3")}>
      <SeperatedTemplate3 data={data} styleName={styleName}></SeperatedTemplate3>
    </div>
  );
}

export default P3;
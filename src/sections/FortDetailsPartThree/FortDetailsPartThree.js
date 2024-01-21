import React from "react";
import "./FortDetailsPartThree.css";
import { FortniteDet, SectionHeader, SectionWrapper } from "../../components";
import Imge from "../../components/Imge/Imge";
import popular_01 from "../../assets/images/popular-01.jpg";
import popular_05 from "../../assets/images/popular-05.jpg";
import popular_03 from "../../assets/images/popular-03.jpg";
const FortDetailsPartThree = () => {
  const imgs = [{id:1, imge :popular_01},{id:2, imge: popular_05},{id:3,imge: popular_03}];
  return (
    <div className="Fort-details-part-three">
      <SectionWrapper>
        <SectionHeader>Other Related Games</SectionHeader>
        <div className="others">
          <div className="left-others">
            {imgs.map((img) => {
              return (
                <div className="container-imgs-fortnitedet" key={img.imge}>
                  <Imge Img={img} />
                  <FortniteDet />
                </div>
              );
            })}
          </div>
          <div className="right-others">
            {imgs.map((img) => {
              return (
                <div className="container-imgs-fortnitedet">
                  <Imge Img={img} />
                  <FortniteDet />
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default FortDetailsPartThree;

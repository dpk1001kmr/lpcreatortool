import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Image from "./landing-page/Image";
import Text from "./landing-page/Text";
import Bullet from "./landing-page/Bullet";
import Cta from "./landing-page/Cta";
import LandingPageStyle from "./landing-page/LandingPageStyle";

function LandingPage() {
  const array = useSelector(function (state) {
    return state.landingPage.array;
  });

  return (
    <LandingPageContainer>
      <LandingPageStyle />
      {array.map(function (item) {
        if (item.type === "image") return <Image key={item.id} item={item} />;
        if (item.type === "text") return <Text key={item.id} item={item} />;
        if (item.type === "bullet") return <Bullet key={item.id} item={item} />;
        if (item.type === "cta") return <Cta key={item.id} item={item} />;
      })}
    </LandingPageContainer>
  );
}

const LandingPageContainer = styled.div`
  border: 1px solid var(--slate-300);
  width: 600px;
  height: 100%;
  background-color: white;
`;

export default LandingPage;

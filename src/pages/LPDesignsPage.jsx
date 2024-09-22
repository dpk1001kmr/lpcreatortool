import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import styled from "styled-components";

import logo from "./../assets/selling-simplified-logo.svg";
import LogoutButton from "../components/LogoutButton";
import CreateNewLPButton from "../components/CreateNewLPButton";
import { Link } from "react-router-dom";

function LPDesignsPage() {
  const { isPending, data, error } = useQuery({
    queryKey: ["lpObjects"],
    queryFn: async () => {
      const response = await axios.get(
        "http://localhost/backend/api/lp_code_objs.php"
      );
      return response.data;
    },
  });

  const lpObjects = [];
  if (data) {
    for (let i = 0; i < data.data.length; i = i + 2) {
      lpObjects.push({ id: data.data[i], lpObject: data.data[i + 1] });
    }
  }

  console.log(lpObjects);

  return (
    <>
      <Header>
        <img className="logo" src={logo} alt="Selling Simplified" />
        <div className="box">
          <CreateNewLPButton />
          <LogoutButton />
        </div>
      </Header>
      <LPDesignsContainer>
        {lpObjects &&
          lpObjects.map(function (item, index) {
            return (
              <Link to={`/create-lp/${item.id}`} key={item.id}>
                {item.id}
              </Link>
            );
          })}
      </LPDesignsContainer>
    </>
  );
}

const Header = styled.div`
  padding: 0.5rem;
  height: 3rem;
  background-color: var(--slate-100);
  border-bottom: 1px solid var(--slate-300);

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: 1.75rem;
  }

  .box {
    display: flex;
    gap: 0.25rem;
  }
`;

const LPDesignsContainer = styled.div`
  /* border: 5px solid black; */
  padding: 3rem 5rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  .create-lp {
    height: 25rem;
    border: 2px solid red;
  }
`;

export default LPDesignsPage;

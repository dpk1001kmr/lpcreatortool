import React, { useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

function LPCreatorPage() {
  const { id } = useParams();
  // get the related object from the id
  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      return await axios.post("http://localhost/backend/api/lp_code_objs.php", {
        lp_id: id,
      });
    },
    onSuccess: (data) => {
      console.log(data.data.data[1]);
    },
    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong");
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  return (
    <LPCreatorPageContainer>
      <Sidebar />
      <Main />
    </LPCreatorPageContainer>
  );
}

const LPCreatorPageContainer = styled.div`
  height: 100vh;
  max-height: 100vh;
  display: flex;
`;

export default LPCreatorPage;

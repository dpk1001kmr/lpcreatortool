import React, { useEffect, useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../../features/landingPage/landingPageSlice";
import styled from "styled-components";

import EditorToolbar, { modules, formats } from "./QuillRichTextEditorToolbar";

function QuillRichTextEditor() {
  const dispatch = useDispatch();

  const array = useSelector(function (state) {
    return state.landingPage.array;
  });

  const selectedLandingPageItemId = useSelector(function (state) {
    return state.landingPage.selectedLandingPageItemId;
  });

  const selectedLandingPageItem = array.find(function (item) {
    return item.id === selectedLandingPageItemId;
  });

  const selectedLandingPageItemText = selectedLandingPageItem.text;

  const [value, setValue] = useState(selectedLandingPageItemText);

  useEffect(
    function () {
      dispatch(setText(value));
    },
    [value]
  );

  return (
    <QuillRichTextEditorContainer>
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
    </QuillRichTextEditorContainer>
  );

  // return (
  //   <QuillRichTextEditorContainer>
  //     <ReactQuill
  //       theme="snow"
  //       value={value}
  //       onChange={setValue}
  //     />
  //   </QuillRichTextEditorContainer>
  // );
}

const QuillRichTextEditorContainer = styled.div`
  width: 600px;
  background-color: #ffffff;
  margin-bottom: 0.5rem;

  .ql-tooltip {
    z-index: 1000;
  }
`;

export default QuillRichTextEditor;

import React from "react";
import {
  setLandingPageAssetUrl,
  setLandingPageCampaignName,
  setLandingPageErrorMessage,
  setLandingPageName,
  setLandingPageSubjectLine,
} from "../../features/landingPage/landingPageSlice";
import Div from "../ui/Div";
import Label from "../ui/Label";
import UpdateItemInput from "../ui/UpdateItemInput";
import { useDispatch, useSelector } from "react-redux";

function Settings() {
  const landingPageName = useSelector(function (state) {
    return state.landingPage.landingPageName;
  });

  const landingPageSubjectLine = useSelector(function (state) {
    return state.landingPage.landingPageSubjectLine;
  });

  const landingPageCampaignName = useSelector(function (state) {
    return state.landingPage.landingPageCampaignName;
  });

  const landingPageAssetUrl = useSelector(function (state) {
    return state.landingPage.landingPageAssetUrl;
  });

  const landingPageErrorMessage = useSelector(function (state) {
    return state.landingPage.landingPageErrorMessage;
  });
  console.log(landingPageName);
  return (
    <>
      <Div>
        <Label>Name</Label>
        <UpdateItemInput
          type="text"
          value={landingPageName}
          setValues={[setLandingPageName]}
        />
      </Div>
      <Div>
        <Label>Subject line</Label>
        <UpdateItemInput
          type="text"
          value={landingPageSubjectLine}
          setValues={[setLandingPageSubjectLine]}
        />
      </Div>
      {/* campaign name */}
      <Div>
        <Label>Campaign name</Label>
        <UpdateItemInput
          type="text"
          value={landingPageCampaignName}
          setValues={[setLandingPageCampaignName]}
        />
      </Div>
      <Div>
        <Label>Asset url</Label>
        <UpdateItemInput
          type="text"
          value={landingPageAssetUrl}
          setValues={[setLandingPageAssetUrl]}
        />
      </Div>
      <Div>
        <Label>Error message</Label>
        <UpdateItemInput
          type="text"
          value={landingPageErrorMessage}
          setValues={[setLandingPageErrorMessage]}
        />
      </Div>
    </>
  );
}

export default Settings;

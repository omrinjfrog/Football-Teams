import React from 'react';
import { TeamInfo, TeamDescription, MoreTeamInfo } from "./style";

export default function TeamDescriptionInfo(props) {
  const {
    strTeam, strTeamBadge, strStadium, intStadiumCapacity, strDescriptionEN,
    strWebsite, strTwitter, strFacebook, strInstagram, strYoutube
  } = props.team || ""

  return (
    <TeamInfo>
      <TeamDescription>
        <h2>Club Information:</h2>
        <a><span>Stadium:</span> {strStadium}</a>
        <br></br>
        <a><span>Stadium Capacity:</span> {intStadiumCapacity}</a>
        <br></br>
        <a><span>Club Description:</span> {strDescriptionEN}</a>
        <br></br>
      </TeamDescription>
      <MoreTeamInfo>
        <h4 style={{ textDecoration: 'underline' }}>For More Content: </h4>
        <a href={"http://" + strWebsite}>
          <img alt={strTeam + "-badge"} src={strTeamBadge} /></a>
        <a href={"http://" + strFacebook}>
          <img alt={strTeam + "-facebook"} src="/facebook.png" /></a>
        <a href={"http://" + strInstagram}>
          <img alt={strTeam + "-instagram"} src="/instagram.png" /></a>
        <a href={"http://" + strTwitter}>
          <img alt={strTeam + "-twitter"} src="/twitter.png" /></a>
        <a href={"http://" + strYoutube}>
          <img alt={strTeam + "-youtube"} src="/youtube.png" /></a>
      </MoreTeamInfo>
    </TeamInfo>
  );
}
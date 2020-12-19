import React from 'react';
import { Center, NavCenter } from "../../../../styles/Style";

export default function TeamDescriptionHeader(props) {
    return (
        <Center V H>
            <NavCenter>
                <img alt={props.team?.strTeam + "-img"} src={props.team?.strTeamBadge} style={{ width: '150px', height: '150px' }} />
                <h1>{props.team?.strTeam}</h1>
            </NavCenter>
        </Center>
    );
}
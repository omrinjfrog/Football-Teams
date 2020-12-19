import React from 'react';
import { Center, NavCenter } from "../../styles/Style";

export default function HomeHeader(props) {
    return (
        <Center V H>
            <NavCenter>
                <img alt="pl-logo" src="/pl-logo.png" />
                <a style={{ fontSize: '50px' }}>Premier League Teams</a>
                <h4>Click a team to view more details</h4>
            </NavCenter>
        </Center>
    );
}
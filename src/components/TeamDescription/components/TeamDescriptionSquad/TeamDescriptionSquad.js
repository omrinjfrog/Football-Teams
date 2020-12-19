import React, { useState, useEffect } from 'react';
import { Center, StyledTable } from "../../../../styles/Style";
import axios from 'axios';

import Player from "../../../Player/Player";

export default function TeamDescriptionSquad(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        props.team && fetchSquad();
    }, [props.team]);

    const fetchSquad = async () => {
        const result = await axios(
            `https://www.thesportsdb.com/api/v1/json/4013017/lookup_all_players.php?id=${props.team.idTeam}`
        );
        setData(result.data);
    };

    return (
        <div>
            <Center V H>
                <h2 style={{ textDecoration: 'underline', marginTop: '50px' }}>Club Squad</h2>
            </Center>
            <Center V H>
                <StyledTable>
                    <tbody>
                        {data?.player &&
                            data?.player.map((currentPlayer) => (
                                <Player player={currentPlayer} />
                            ))}
                    </tbody>
                </StyledTable>
            </Center>
            <br></br><br></br>
        </div>
    );
}
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Center, StyledTable } from "../../styles/Style";

import Team from "../Team/Team";

export default function TeamsList(props) {
    const [data, setData] = useState({ teams: [] });

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        const result = await axios(
            'https://www.thesportsdb.com/api/v1/json/4013017/lookup_all_teams.php?id=4328'
        );
        setData(result.data);
    };

    return (
        <div>
            <Center V H>
                <StyledTable>
                    <tbody>
                        {data.teams.map(team => (
                            <Team team={team} />
                        ))}
                    </tbody>
                </StyledTable>
            </Center>
            <br></br><br></br>
        </div>
    );
}
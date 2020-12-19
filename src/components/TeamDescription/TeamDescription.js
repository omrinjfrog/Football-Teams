import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

import TeamDescriptionInfo from "./components/TeamDescriptionInfo/TeamDescriptionInfo";
import TeamDescriptionSquad from "./components/TeamDescriptionSquad/TeamDescriptionSquad";
import TeamDescriptionHeader from "./components/TeamDescriptionHeader/TeamDescriptionHeader";

export default function TeamDescription(props) {
    let { id } = useParams();
    const [data, setData] = useState(null);

    const fetchTeam = async () => {
        const result = await axios(
            `https://www.thesportsdb.com/api/v1/json/4013017/lookupteam.php?id=${id}`
        );
        setData(result.data);
    };

    useEffect(() => {
        fetchTeam();
    }, []);

    return (
        <div>
            <TeamDescriptionHeader team={data?.teams[0]} />
            <TeamDescriptionInfo team={data?.teams[0]} />
            <TeamDescriptionSquad team={data?.teams[0]} />
        </div>
    );
}
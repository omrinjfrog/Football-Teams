import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Team(props) {
    const history = useHistory();

    return (
        <tr key={props.team.idTeam} onClick={() => history.push(`/teams/${props.team.idTeam}`)}>
            <img alt={props.team.strTeam + "-img"} src={props.team.strTeamBadge} />
            <td style={{ width: '200px' }}>{props.team.strTeam}</td>
        </tr>
    );
}
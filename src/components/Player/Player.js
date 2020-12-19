import React from 'react';

export default function Player(props) {
    return (
        <tr key={props.player.idPlayer}>
            <td>{props.player.strNumber}</td>
            <td>{props.player.strPlayer}</td>
            <img alt={props.player.strPlayer + "-img"} src={props.player.strThumb} />
        </tr>
    );
}
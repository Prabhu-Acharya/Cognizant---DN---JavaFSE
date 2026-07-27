import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 85 },
        { name: "Shubman Gill", score: 78 },
        { name: "KL Rahul", score: 68 },
        { name: "Hardik Pandya", score: 72 },
        { name: "Ravindra Jadeja", score: 65 },
        { name: "Rishabh Pant", score: 80 },
        { name: "Suryakumar Yadav", score: 90 },
        { name: "Jasprit Bumrah", score: 55 },
        { name: "Mohammed Shami", score: 60 },
        { name: "Mohammed Siraj", score: 75 }
    ];

    return (
        <div>
            <h2>List of Players</h2>

            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

            <h2>Players with Score Below 70</h2>

            <ul>
                {players
                    .filter(player => player.score < 70)
                    .map((player, index) => (
                        <li key={index}>
                            {player.name} - {player.score}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;
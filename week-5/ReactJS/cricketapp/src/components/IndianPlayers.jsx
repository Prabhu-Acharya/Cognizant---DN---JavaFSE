import React from "react";

function IndianPlayers() {

    // Team Players
    const players = [
        "Virat Kohli",
        "Rohit Sharma",
        "Shubman Gill",
        "KL Rahul",
        "Hardik Pandya",
        "Ravindra Jadeja"
    ];

    // Destructuring
    const [odd1, even1, odd2, even2, odd3, even3] = players;

    // Two Arrays
    const T20players = [
        "Virat Kohli",
        "Rohit Sharma",
        "Suryakumar Yadav"
    ];

    const RanjiPlayers = [
        "Cheteshwar Pujara",
        "Ajinkya Rahane",
        "Hanuma Vihari"
    ];

    // Merge Arrays
    const mergedPlayers = [...T20players, ...RanjiPlayers];

    return (
        <div>

            <h2>Odd Team Players</h2>

            <ul>
                <li>{odd1}</li>
                <li>{odd2}</li>
                <li>{odd3}</li>
            </ul>

            <h2>Even Team Players</h2>

            <ul>
                <li>{even1}</li>
                <li>{even2}</li>
                <li>{even3}</li>
            </ul>

            <h2>Merged Players</h2>

            <ul>
                {
                    mergedPlayers.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))
                }
            </ul>

        </div>
    );
}

export default IndianPlayers;
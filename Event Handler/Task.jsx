import React, { useState } from 'react';

export default function Array() {
    const [arr, setarr] = useState(
        {
            name: "Darshan kalsariya",
            age: 18,
            occupation: "Full-stack developer"
        })
    return (
        <div>
            <ul>
                {Object.keys(arr).map((key, index) => (
                    <li key={index}>
                        {key}:{arr[key]}
                    </li>
                ))}
            </ul>
        </div>
    );
}
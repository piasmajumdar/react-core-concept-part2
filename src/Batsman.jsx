import { useState } from "react"

export default function Batsman(){

    const [runs, setRuns] = useState(0); 

    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <h1>Score: {runs}</h1>
            <button>Singles</button>
            <button>Four</button>
            <button>Six</button>
        </div>
    )
}
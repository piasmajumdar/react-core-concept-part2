import { use, useState } from "react"

export default function Bowler() {
    const [ball, setBall] = useState(0);
    const [over, setOver] = useState(0);

    const handleBowl = () => {
        if (ball < 6) {
            setBall(ball + 1)
        }
        else if (ball==6){
            setBall(1)
            setOver(over+1)
        }
    }

    const showWideMessage = () => {
        alert('Wide Ball')
    }
    const showNoBallMessage = () => {
        alert('No Ball')
    }

    return (
        <div style={bowlerStyle}>
            <h1>Over:{over} Ball:{ball}</h1>
            {ball === 6 ? <p>One Over Finished</p> : <p>Over running</p>}
            <button onClick={handleBowl}>Ball</button>
            <button onClick={showWideMessage}>Wide Ball</button>
            <button onClick={showNoBallMessage}>No Ball</button>
        </div>
    )
}

const bowlerStyle = {
    border: '2px solid red',
    borderRadius: '10px',
    margin: '10px',
    padding: '10px'
}
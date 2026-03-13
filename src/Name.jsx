import { useState } from "react"

export default function Name(){
    const [name, setName] = useState('Pias');
    const nameStyle = {
        border: '2px solid red',
        padding: '10px',
        margin: '20px'
    }
    return (
        <div style={nameStyle}>
            <h3>name: {name}</h3>
            <button onClick={()=>setName("Mr. Majumdar")}>Change Name</button>
        </div>
    )
}
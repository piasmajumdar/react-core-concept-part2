export default function Comment({comment}){
    const {name, email, body} = comment;
    return (
        <div className="card">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Comment Body: {body}</p>
        </div>
    )
}
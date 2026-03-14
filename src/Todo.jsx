export default function Todo({todo}){
    const {title, completed} = todo;
    return(
        <div className="card">
            <h3>Todo title: {title}</h3>
            <p>Status: {completed === true ? 'Done': 'Not Done'}</p>
        </div>
    )
}
import { use } from "react";
import Comment from "./Comment";

export default function Comments({commentsPromise}){
    const comments = use(commentsPromise);
    return(
        <div className="card">
            <h2>All comments are here: {comments.length}</h2>
            {comments.map(comment=> <Comment comment={comment}></Comment>)}
        </div>
    )
}
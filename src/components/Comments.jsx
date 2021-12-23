import React from 'react'
import Comment from './Comment';
import AddComment from './AddComment';
import './css/style.css';

const Comments = ({ comments, onCreate }) => {
  return (
    <section className="Comments">
      <AddComment onCreate={onCreate} />
      {comments.map(comment => <Comment {...comment} key={comment.id} />)}
    </section>
  )
}

export default Comments;

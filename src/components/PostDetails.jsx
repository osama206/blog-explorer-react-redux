import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../redux/postSlice";

const PostDetails = ({ post }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.posts.comments[post.id] || []);

  useEffect(() => {
    dispatch(fetchComments(post.id));
  }, [post.id, dispatch]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>: {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;

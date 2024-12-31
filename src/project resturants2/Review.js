import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Review() {
  const location = useLocation();
  const { dishName, dishImage } = location.state;

  const [comments, setComments] = useState([
    { name: "Alice", text: "The flavors were absolutely amazing!", rating: 5, isNew: false },
    { name: "Bob", text: "Good portion sizes, but the service could be faster.", rating: 3, isNew: false },
    { name: "Charlie", text: "Loved the ambiance, will definitely visit again!", rating: 4, isNew: false },
  ]);

  const [newName, setNewName] = useState("");
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();

    if (newName.trim() === "" || newComment.trim() === "" || newRating === "") {
      alert("Please provide a name, comment, and rating.");
      return;
    }

    const ratingNumber = parseInt(newRating, 10);
    if (ratingNumber < 1 || ratingNumber > 5) {
      alert("Rating must be between 1 and 5.");
      return;
    }

    setComments([{ name: newName, text: newComment, rating: ratingNumber, isNew: true }, ...comments]);
    setNewName("");
    setNewComment("");
    setNewRating("");
  };

  const handleDeleteComment = (indexToDelete) => {
    setComments(comments.filter((_, index) => index !== indexToDelete));
  };

  const averageRating = comments.length
    ? (comments.reduce((sum, comment) => sum + comment.rating, 0) / comments.length).toFixed(1)
    : "No ratings yet";

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Reviews for {dishName}</h1>
      <img
        src={dishImage}
        alt={dishName}
        style={{
          width: "300px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
          margin: "20px 0",
        }}
      />

      <h3 style={{ color: "#ffcc00" }}>Average Rating: {averageRating} ⭐</h3>

      <form onSubmit={handleAddComment} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Your Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          style={{
            width: "80%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            marginBottom: "10px",
          }}
        />
        <br />
        <textarea
          placeholder="Add your review here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          style={{
            width: "80%",
            height: "80px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            marginBottom: "10px",
          }}
        ></textarea>
        <br />
        <label>
          <strong>Rating (1-5): </strong>
        </label>
        <input
          type="number"
          min="1"
          max="5"
          value={newRating}
          onChange={(e) => setNewRating(e.target.value)}
          style={{
            width: "60px",
            padding: "5px",
            margin: "0 10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Comment
        </button>
      </form>

      <h2>Comments</h2>
      {comments.length > 0 ? (
        <div
          style={{
            marginTop: "20px",
            textAlign: "left",
            display: "inline-block",
            width: "80%",
          }}
        >
          
          {comments.map((comment, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                marginBottom: "10px",
                backgroundColor: comment.isNew ? "#e8f5e9" : "#f8f9fa",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
            >
              <p style={{ marginBottom: "5px" }}>
                <strong>{comment.name}</strong>: {comment.text}
              </p>
              <p style={{ margin: "0", color: "#ffcc00" }}>
                Rating: {"⭐".repeat(comment.rating)}
              </p>
              <button
                onClick={() => handleDeleteComment(index)}
                style={{
                  marginTop: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))}

        </div>
      ) : (
        <p>No comments yet. Be the first to leave a review!</p>
      )}
    </div>
  );
}

export default Review;

import React, { useState } from "react";

function ReviewRestaurant() {
  const [comments, setComments] = useState([
    { name: "John", text: "The ambiance is fantastic!", rating: 5 },
    { name: "Sarah", text: "Food quality is excellent, and the service is top-notch.", rating: 4 },
    { name: "Mike", text: "Had a wonderful evening with my family here.", rating: 5 },
  ]);

  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");
  const [newRating, setNewRating] = useState("");
  const [filterRating, setFilterRating] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;

  const handleAddComment = (e) => {
    e.preventDefault();

    if (newName.trim() === "" || newComment.trim() === "" || newRating === "") {
      alert("Please provide your name, a comment, and a rating.");
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

  const filteredComments = filterRating === "All"
    ? comments
    : comments.filter((comment) => comment.rating === parseInt(filterRating, 10));

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = filteredComments.slice(indexOfFirstComment, indexOfLastComment);

  const averageRating = comments.length
    ? (comments.reduce((sum, comment) => sum + comment.rating, 0) / comments.length).toFixed(1)
    : "No ratings yet";

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Restaurant Reviews</h1>

      <h3 style={{ color: "#ffcc00" }}>Average Rating: {averageRating} ⭐</h3>

      {/* Filter by Rating */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Filter by Rating: </strong>
        </label>
        <select
          value={filterRating}
          onChange={(e) => setFilterRating(e.target.value)}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        >
          <option value="All">All</option>
          {[5, 4, 3, 2, 1].map((rating) => (
            <option key={rating} value={rating}>
              {rating} ⭐
            </option>
          ))}
        </select>
      </div>

      {/* Add Comment Form */}
      <form onSubmit={handleAddComment} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Your Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          style={{
            width: "80%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
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

      <h2>Customer Comments</h2>
      {currentComments.length > 0 ? (
        <div
          style={{
            marginTop: "20px",
            textAlign: "left",
            display: "inline-block",
            width: "80%",
          }}
        >
          {currentComments.map((comment, index) => (
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
                <strong>{comment.name}:</strong> {comment.text}
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

      {/* Pagination */}
      <div style={{ marginTop: "20px" }}>
        {Array.from({ length: Math.ceil(filteredComments.length / commentsPerPage) }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              backgroundColor: currentPage === page ? "#007bff" : "#f8f9fa",
              color: currentPage === page ? "#fff" : "#000",
              border: "1px solid #ddd",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ReviewRestaurant;

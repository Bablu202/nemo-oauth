"use client";
import axios from "axios";
import React, { useState } from "react";
import PostForm from "@components/PostForm";

export default function AddPost() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (post: any): Promise<any> => {
    return axios
      .post("/api/addpost", post, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setStatus(response.data.message);
          // Optionally reset form fields or perform other actions upon successful submission
          return response; // Return the response if needed
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      })
      .catch((error) => {
        console.error("Error adding post:", error);
        setStatus("Failed to add post. Please try again later.");
        throw error; // Re-throw the error if necessary
      });
  };

  return (
    <div>
      <h1>Add a New Post</h1>
      <PostForm onSubmit={handleSubmit} />
      {status && <p>{status}</p>}
    </div>
  );
}

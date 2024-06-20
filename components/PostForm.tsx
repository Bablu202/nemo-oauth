"use client";
import { useState } from "react";
interface PostFormProps {
  onSubmit: (post: any) => Promise<any>; // Adjust 'any' to match the expected return type
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
  const [post, setPost] = useState({
    title: "",
    startDate: "",
    returnDate: "",
    duration: "",
    status: "",
    imageURL: "",
    price: "",
    content: "",
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(post);

    onSubmit(post)
      .then((res) => {
        console.log("Response from onSubmit:", res);

        if (res && res.ok) {
          setStatusMessage("Post added successfully!");

          setPost({
            title: "",
            startDate: "",
            returnDate: "",
            duration: "",
            status: "",
            imageURL: "",
            price: "",
            content: "",
          });
        } else {
          setStatusMessage("Failed to add post.");
          console.log("Failed at POST FROM COMPONENT");
        }
      })
      .catch((error) => {
        console.error("Error adding post:", error);
        setStatusMessage("Failed to add post.");
        console.log("Failed at POST FROM COMPONENT catch");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-2xl font-semibold mb-4">Add a New Post</h2>
      {statusMessage && <p className="text-red-500 mb-4">{statusMessage}</p>}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={post.title}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="startDate"
        >
          Start Date
        </label>
        <input
          id="startDate"
          name="startDate"
          type="date"
          value={post.startDate}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="returnDate"
        >
          Return Date
        </label>
        <input
          id="returnDate"
          name="returnDate"
          type="date"
          value={post.returnDate}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="duration"
        >
          Duration
        </label>
        <input
          id="duration"
          name="duration"
          type="text"
          value={post.duration}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="status"
        >
          Status
        </label>
        <input
          id="status"
          name="status"
          type="text"
          value={post.status}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="imageURL"
        >
          Image URL
        </label>
        <input
          id="imageURL"
          name="imageURL"
          type="text"
          value={post.imageURL}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="price"
        >
          Price
        </label>
        <input
          id="price"
          name="price"
          type="text"
          value={post.price}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="content"
        >
          Content
        </label>
        <textarea
          id="content"
          name="content"
          value={post.content}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Post
      </button>
    </form>
  );
};

export default PostForm;

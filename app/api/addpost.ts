// pages/api/addpost.ts

import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      title,
      startDate,
      returnDate,
      duration,
      status,
      imageURL,
      price,
      content,
    } = req.body;

    // Validate the presence of required fields
    if (
      !title ||
      !startDate ||
      !returnDate ||
      !duration ||
      !status ||
      !imageURL ||
      !price ||
      !content
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const postContent = `---
title: ${title}
startDate: ${startDate}
returnDate: ${returnDate}
duration: ${duration}
status: ${status}
imageURL: ${imageURL}
price: ${price}
---

${content}
`;

    const fileName = `${title.toLowerCase().replace(/ /g, "-")}.mdx`;
    const filePath = path.join(postsDirectory, fileName);

    try {
      await fs.promises.writeFile(filePath, postContent);
      res.status(200).json({ message: "Post added successfully!" });
    } catch (error) {
      console.error("Error writing post file:", error);
      res.status(500).json({ message: "Failed to add post." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

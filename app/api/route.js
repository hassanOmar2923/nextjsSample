// pages/api/posts.js

// import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
  try {
    const data = await req.json();

    // Validate data (optional)

    // Process the data and store it in a database, etc.
    console.log('Received data:', data);

    // Send a success response
    return res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    console.error(error);
    // Send an error response
    return res.status(500).json({ message: 'Something went wrong' });
  }
}

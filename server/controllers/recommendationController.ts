import { Request, Response } from "express";

export const getRecommendations = async (req: Request, res: Response) => {
  try {
    const recommendations = {
      title: "The Dark Knight",
    };
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recommendations", error });
  }
};

import { Request, Response } from "express";

export const getWatchListMovies = async (req: Request, res: Response) => {
  try {
    const watchList = {
      title: "The Dark Knight",
    };

    if (!watchList) {
      return res.status(404).json({ message: "Watch list not found" });
    }

    res.status(200).json(watchList);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

import { Request, Response } from "express";
import { iMovieCreate } from "../interfaces/movies.interfaces";
import createMovieService from "../services/createMovie.service";

const createMovieController = async (req: Request, res: Response) => {
  const movieData: iMovieCreate = req.body;

  const newMovie = await createMovieService(movieData);

  res.status(201).json(newMovie);
};

export { createMovieController };

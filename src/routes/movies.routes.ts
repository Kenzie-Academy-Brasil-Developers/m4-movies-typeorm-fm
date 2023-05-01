import { Router } from "express";
import { createMovieController } from "../controllers/movies.controller";

const moviesRoutes: Router = Router();

moviesRoutes.post("", createMovieController);

moviesRoutes.get("");
moviesRoutes.delete("/:id");
moviesRoutes.patch("/:id");

export default moviesRoutes;

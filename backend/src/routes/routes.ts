import { IAnimeService, IUserRepository, User } from "types/UsersTypes";
import { Router } from "express";
import { animeRepository } from "@repositories/animeRepository";
import { animeServices } from "@services/animeServices";

const router = Router();

const animeListRepository: IUserRepository = new animeRepository();
const animeService: IAnimeService = new animeServices(animeListRepository);

export default () => {
  router.get("/", (req, res) => {
    res.send("Api is healthy!!!");
  });

  router.get("/animeAll", async (req, res) => {
    const animes = await animeService.findUsers();
    res.json(animes);
  });

  router.post("/animecreate", async (req, res) => {
    const newAnime: User = req.body;
    const result = await animeService.createUser(newAnime);

    res.json(result);
  });

  router.get("/animeID/:id", async (req, res) => {
    const id = Number(req.params.id);
    const animes = await animeService.findUsersById(id);
    res.json(animes);
  });

  router.put("/animeUpdate/:id", async (req, res) => {
    const id = Number(req.params.id);
    const animes = await animeService.updateUser(id, req.body);
    res.json(animes);
  });

  router.delete("/animeDelete/:id", async (req, res) => {
    const id = Number(req.params.id);
    const animes = await animeService.deleteUser(id);
    res.json(animes);
  });

  return router;
};

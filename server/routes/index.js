import { Router } from "express";
import axios from "axios";
import validate from "express-validation";
/*
    TODO: IMPORT TOKEN HERE
*/

import validation from "./validation";
import userService from "../services/userService";

export default () => {
  let router = Router();

  /** GET /health-check - Check service health */
  router.get("/health-check", (req, res) => res.send("OK"));

  // The following is an example request.response using axios and the
  // express res.json() function
  /** GET /api/rate_limit - Get github rate limit for your token */
  router.get("/rate", (req, res) => {
    axios
      .get(`http://api.github.com/rate_limit`, {
        headers: {
          Authorization: token,
        },
      })
      .then(({ data }) => res.json(data));
  });

  /** GET /api/user/:username - Get user */
  router.get("/user/:username", validate(validation.user), async (req, res) => {
    console.log(req.params);
    const username = req.params.username;

    try {
      res.json(await userService(username));
    } catch (err) {
      res
        .status(404)
        .json({ error: err.message, tips:`The user ${username} was not found...` });
    }
  });

  /** GET /api/users? - Get users */
  router.get("/users/", validate(validation.users), async (req, res) => {
    console.log(req.query);
    let usernames = req.query.username;
    const multipleUsers = [];

    try {
      for (let username of usernames) {
        multipleUsers.push(await userService(username));
      }
    } catch (err) {
      res
        .status(404)
        .json({ error: err.message, tips: "One of those users was not found... Or maybe both." });
    }
    res.json(multipleUsers);
  });

  return router;
};

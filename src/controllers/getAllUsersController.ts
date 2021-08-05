import { Request, Response } from "express";

const getAllUsersController = (request: Request, response: Response) => {
  const users = [
    {
      name: "peter",
      age: 30,
    },
    {
      name: "dora",
      age: 31,
    },
  ];

  response.statusCode = 200;
  response.send({
    users: users,
  });
};

export default getAllUsersController;

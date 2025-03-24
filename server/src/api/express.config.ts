import "reflect-metadata";
import express from "express";
import { useContainer, useExpressServer } from "routing-controllers";
import path from "node:path";
import { DBConnection } from "../data/db/database.config";
import { Container } from 'typedi'

export async function server() {
  const app = express();
  app.use(express.json());

  useContainer(Container);
  useExpressServer(app, {
    controllers: [path.join(__dirname,'controllers', '**', '*.controller.{ts,js}')],
    middlewares: [path.join(__dirname, 'middlewares', "*.middleware.{ts,js}")],
    defaultErrorHandler: false,
  });


  DBConnection.initialize().then(() => console.log('Database initialized.'));
  app.listen(3333, () => console.log(`Server is running on port 3333`));
}

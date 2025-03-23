import { ExpressMiddlewareInterface } from "routing-controllers";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Env } from "../../env";
import { Service } from "typedi";

@Service()
export class AuthMiddleware implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: NextFunction): any {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Token não fornecido!" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const secret = Env.JWT_SECRET;
      const payload = jwt.verify(token, secret) as { id: string };

      req.userId = payload.id;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Token inválido ou expirado!" });
    }
  }
}

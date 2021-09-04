import connection from "../connection";
import { Request, Response } from "express";

export default async function ListaProdutos(req: Request, res: Response): Promise<void> {
    try {
        const result = await connection.raw(`
          SELECT * FROM shopper 
        `)
        res.send({ shopper: result[0]})

} catch (error) {
  res.status(400).send("ERROR");
}
}
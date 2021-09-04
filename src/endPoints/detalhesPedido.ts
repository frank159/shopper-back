import connection from "../connection";
import { Request, Response } from "express";

export default async function detalhesPedido( req: Request, res: Response ): Promise<void> {
    try {
        const result = await connection.raw(`
        SELECT * from shopper WHERE id LIKE "%${req.params.id}%";
        `
        );
        res.status(200).send({ shopper: result[0]})
    }catch (error) {
        res.status(400).send("ERROR");
      }
}
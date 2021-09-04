import app from "./app";
import detalhesPedido from "./endPoints/detalhesPedido";
import ListaProdutos from "./endPoints/listaProdutos";
import {createLambdaHandler} from "lbn-lambda-express";

app.get('/ListaProdutos', ListaProdutos);
app.get('/detalhesPedido/:id', detalhesPedido);

export const handler = createLambdaHandler(app)
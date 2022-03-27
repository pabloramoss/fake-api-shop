// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getById } from "../../../src/productList"
import { Product } from "../../../src/types"

//hacer un metodo getById(id) y que devuelva el objeto del producto con el id ingresado

export default function getProduct(
  req: NextApiRequest,
  res: NextApiResponse<Product | undefined >
) {
  const id = req.query.id
  const data = getById(id as string)
  res.status(200).json(data)
}

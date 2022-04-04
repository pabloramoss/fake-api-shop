import type { NextApiRequest, NextApiResponse } from 'next'
import { getById } from "../../../src/productList"
import { Product } from "../../../src/types"

export default function getProduct(
  req: NextApiRequest,
  res: NextApiResponse<Product | undefined >
) {
  const id = req.query.id
  const data = getById(id as string)
  res.status(200).json(data)
}

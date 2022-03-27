// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { productList } from "../../../src/productList"
import { Product } from "../../../src/types"

export default function getAllProducts(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const data = productList
  res.status(200).json(data)
}

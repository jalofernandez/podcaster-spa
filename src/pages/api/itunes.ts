import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const endPoint = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch(endPoint)
  const data = await response.json()

  res.status(200).json(data)
}

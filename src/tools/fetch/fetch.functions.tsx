import { PostHeaders } from './fetch.consts';

export async function startGame(
  name1: string,
  name2: string
): Promise<Response> {
  const raw = JSON.stringify({
    name1: name1,
    name2: name2,
  });

  const requestOptions = {
    method: 'POST',
    headers: PostHeaders,
    body: raw,
  };

  const response = await fetch(
    'https://localhost:7014/api/Battleship/',
    requestOptions
  );

  return response;
}

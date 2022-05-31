import { IRaport } from '../../types/IRaport.interface';
import { GetOptions, PostHeaders } from './fetch.consts';

export async function getPlayers(
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

export async function makeOneTurn() {
  const response = await fetch(
    'https://localhost:7014/api/Battleship/run-turn',
    GetOptions
  );
  if (response.ok) {
    const raport = await response.json();
    return raport as IRaport[];
  }
  return null;
}

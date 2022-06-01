import { GetOptions, PostHeaders, apiBaseUrl } from './fetch.consts';
import { IRaport } from '../../types/interfaces/IRaport.interface';

export async function getPlayers(
  FirstPlayerName: string,
  SecondPlayerName: string
): Promise<Response> {
  const raw = JSON.stringify({
    FirstPlayerName: FirstPlayerName,
    SecondPlayerName: SecondPlayerName,
  });

  const requestOptions = {
    method: 'POST',
    headers: PostHeaders,
    body: raw,
  };

  const response = await fetch(`${apiBaseUrl}/Battleship/`, requestOptions);

  return response;
}

export async function makeOneTurn() {
  const response = await fetch(`${apiBaseUrl}/Battleship/run-turn`, GetOptions);
  if (response.ok) {
    const raport = await response.json();
    return raport as IRaport[];
  }
  return null;
}

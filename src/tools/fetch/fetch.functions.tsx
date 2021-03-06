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

export async function makeOneTurn(id: string) {
  const response = await fetch(
    `${apiBaseUrl}/Battleship/run-turn?gameId=${id}`,
    GetOptions
  );
  if (response.ok) {
    const reports = await response.json();
    return {
      reports: reports as IRaport[],
      status: response.status,
    };
  }
  return {
    reports: null,
    status: response.status,
  };
}

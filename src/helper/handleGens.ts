import { IGenres } from 'helper/interfaces';

const handleGens = (gen: number[], genres: IGenres[] | undefined) => {
  const genresString: string[] = [];
  if (gen && gen.length) {
    gen.forEach(g => {
      if (genres?.length) {
        genres.forEach(gState => {
          if (g === gState.id) {
            genresString.push(gState.name);
          }
        });
      }
    });
  }
  const gensName = genresString[1]
    ? `${genresString[0]}, ${genresString[1]}`
    : `${genresString[0]}`;

  return gensName;
};
export default handleGens;

import { useState, useEffect } from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {
  const [repositories, setRepositories] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/asr-alexandresilva/repos');
    const data = await response.json();

    const repositoriesGitHubFavorites = localStorage.getItem('repositoriesGitHubFavorites');
    if (repositoriesGitHubFavorites !== null) {
      // percorre arrays para tratar repositorios favoritos
      JSON.parse(repositoriesGitHubFavorites).map(repoFavorite => {
        if (!repoFavorite.favorite) {
          return false; //continue
        }

        data.map(repo => {
          if (repo.id == repoFavorite.id) {
            repo.favorite = repoFavorite.favorite;
            return true; //break
          }
        });

      });
    }
    setRepositories(data);
  }, []); // [] -> diz para executar uma vez ao iniciar a aplicacao

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `Você tem ${filtered.length} favoritos`;
  }, [repositories]);

  const handdleFavorite = (id) => {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });

    localStorage.setItem('repositoriesGitHubFavorites', JSON.stringify(newRepositories));
    setRepositories(newRepositories);
  }

  return (
    <S.ContainerRepo>
      <h2> <FontAwesomeIcon icon={faGithub} /> Repositórios Favoritos <span>Alexandre Silva<FontAwesomeIcon className="iconFavorite" icon={faStar} /></span></h2>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            <span>
              {repo.name}
              {repo.favorite && <FontAwesomeIcon className="iconFavorite" icon={faStar} />}
            </span>
            <button type="button" onClick={() => handdleFavorite(repo.id)}>Favoritar</button>
          </li>
        ))}
      </ul>
    </S.ContainerRepo>
  );
}

export default App;

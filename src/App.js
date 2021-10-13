import { useState, useEffect } from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {
  const [repositories, setRepositories] = useState([]);
  const [avaliations, setAvaliations] = useState([]);

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

  const handleAvaliationRepo = (e, idRepo) => {
    let avaliationExists = false;
    let value = e.target.value;

    const newAvaliations = avaliations.map(aval => {
      if (aval.idRepo == idRepo) {
        avaliationExists = true;
      }
      return aval.idRepo === idRepo ? { ...aval, avaliation: value } : aval;
    });

    if (newAvaliations.length == 0 || !avaliationExists) {
      newAvaliations.push({
        idRepo: idRepo,
        avaliation: value,
      });
    }
    setAvaliations(newAvaliations);
    localStorage.setItem('avaliationRepositoriesGitHubFavorites', JSON.stringify(newAvaliations));
  }

  const handleSelectedAvaliation = (idRepo) => {

    if (avaliations.length === 0) {
      const avaliationRepositoriesGitHubFavorites = localStorage.getItem('avaliationRepositoriesGitHubFavorites');
      if (avaliationRepositoriesGitHubFavorites !== null) {
        setAvaliations(JSON.parse(avaliationRepositoriesGitHubFavorites));
      }
    }

    let value = '';
    if (avaliations.length > 0) {
      avaliations.map(aval => {
        if (aval.idRepo == idRepo) {
          value = aval.avaliation;
        }
      })
    }

    return value;
  }

  return (
    <S.ContainerRepo>
      <h2> <FontAwesomeIcon icon={faGithub} /> Repositórios Favoritos <span>Alexandre Silva<FontAwesomeIcon className="iconFavorite" icon={faStar} /></span></h2>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank">{repo.name} {repo.favorite && <FontAwesomeIcon className="iconFavorite" icon={faStar} />}</a>
            <div className="containerActionsRepo">
              <div className="formAvalicao">
                <label>Avaliação</label>
                <select value={handleSelectedAvaliation(repo.id)} onChange={(e) => handleAvaliationRepo(e, repo.id)}>
                  <option value="" >-</option>
                  <option value="0" >0</option>
                  <option value="1" >1</option>
                  <option value="2" >2</option>
                  <option value="3" >3</option>
                </select>
              </div>
              <button type="button" onClick={() => handdleFavorite(repo.id)}>Favoritar</button>
            </div>
          </li>
        ))}
      </ul>
    </S.ContainerRepo>
  );
}

export default App;

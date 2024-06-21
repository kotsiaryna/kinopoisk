import { useState } from 'react';
import { Series } from '../../../types';

function Season({ number, episodesCount, episodes, description, enDescription, airDate }: Series) {
  const [showEpisodes, setShowEpisodes] = useState(false);

  const date = airDate ? new Date(airDate).getFullYear() : '';

  return (
    <div>
      <p>{`Сезон ${number}  ${date}`}</p>
      {description && <p>{description}</p>}
      {enDescription && <p>{enDescription}</p>}
      <p>{`Эпизодов: ${episodesCount || ''}`}</p>
      <button onClick={() => setShowEpisodes((state) => !state)}>
        {showEpisodes ? 'Скрыть' : 'Развернуть'}
      </button>
      {showEpisodes &&
        episodes.map((episode, i) => (
          <div key={i}>
            <p>{`${episode.name} - ${episode.enName}`}</p>
          </div>
        ))}
    </div>
  );
}

export default Season;

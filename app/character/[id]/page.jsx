import CharacterCard from '@/components/CharacterCard/CharacterCard';
import styles from './page.module.css';
import axios from 'axios';


const fetchCharacter = async (id) => await fetch(`https://rickandmortyapi.com/api/character/${id}`).then(char => char.json())

const fetchEpisodes = async () => {
  const result = await axios.get(`https://rickandmortyapi.com/api/episode`);
  let next = result.data.info.next;
  let epsArray = result.data.results;

  while(next !== null) {
    const newResponse = await axios.get(next);
    epsArray = epsArray.concat(newResponse.data.results);
    next = newResponse.data.info.next;
  }

  return epsArray;
} 



export default async function Character({params}) {
    const charecter = await fetchCharacter(params.id);
    let episodes = await fetchEpisodes();
    console.log('@', episodes.length);
    episodes = episodes.filter(ep=> {
      return ep.characters.some( eps => eps === `https://rickandmortyapi.com/api/character/${params.id}`);
    })

    console.log(episodes.length);

  return (
    <main>
        <section className={styles.main_section}>
            <CharacterCard character={charecter} card_type={'card_wrapper'}  />
            <section className={styles.episodes_section}>
                <h1 style={{color:'white', fontSize: '25px', textAlign: 'center'}}>Episodes</h1>
                <div className={styles.episodes_wpapper}>
                    {episodes.map(ep => {
                      return (
                        <div key={ep.id} className={styles.ep_wrapper}>
                            <span>{ep.name}</span>
                            <span>{ep.air_date}</span>
                            <span>{ep.episode}</span>
                        </div>
                      )
                    })}
                </div>
            </section>
        </section>
    </main>
  )
}

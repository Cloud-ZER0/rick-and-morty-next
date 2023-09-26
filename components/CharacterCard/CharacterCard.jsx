import styles from "./CharacterCard.module.css";
import { fetchEpisode } from "../Utils/FetchEpisode";
import Link from 'next/link';

export default async function CharacterCard({ character = {}, card_type='card_wrapper' }) {
  const episode = await fetchEpisode(character.episode[0]);


  const editStatus = () => {
    switch (character.status) {
      case "Alive":
        return styles.rounded_id_alive;
      case "Dead":
        return styles.rounded_id_dead;
      case "Unknown":
        return styles.rounded_id_unknown;
      default:
        return styles.rounded_id_unknown;
    }
  };

  return (
    <div id={character.id} className={styles[card_type]}>
      <div className={styles.img_wrapper}>
        <Link href={`/character/${character.id}`}>
            <img src={character.image} style={{objectFit: 'fill'}} alt="Charecter" />
        </Link>
      </div>
      <div className={styles.about}>
        <ul className={styles.list_wrapper}>
          <li className={styles.list_element}>
            <span className={styles.title}>{character.name}</span>
            <div className={styles.status_div}>
              <div className={editStatus()}></div>
              <span>
                <Link href={`/characters/status/${character.status}`}>
                  {character.status}
                  </Link> {" - " + character.species}
              </span>
            </div>
          </li>
          <li className={styles.info_secondary}>
            <span className={styles.pre_title}>Last known location:</span>
            <span className={styles.info_span}>{character.location.name}</span>
          </li>
          <li className={styles.info_secondary}>
            <span className={styles.pre_title}>first seen in:</span>
            <span className={styles.info_span}>{episode.name}</span>
          </li>
        </ul>
      </div>
      <div className={styles[`${card_type === 'card_wrapper_type_row'? 'favr_wrapper': 'favr_wrapper_none'}`]}>
            {/* <button className={styles.add_to_favr_btn} onClick={addToFavr}>
                To favorite
            </button> */}
      </div>
    </div>
  );
}

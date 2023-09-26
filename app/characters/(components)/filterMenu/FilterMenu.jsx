
import Link from 'next/link';
import styles from './FilterMenu.module.css';
import { CHARACTERS } from '@/components/Utils/routes';
import FindBar from '../FindBar/FindBar';

export const FilterMenu = ({extraQueries}) => {

    const FILTER_ROUTS = {
        NAME: '',
        STATUS: [
            {pathname: CHARACTERS, query: {...extraQueries, status: 'alive'}},
            {pathname: CHARACTERS, query: {...extraQueries, status: 'dead'}}, 
            {pathname: CHARACTERS, query: {...extraQueries, status: 'unknown'}}
            ],
        SPECIES: [
            {pathname: CHARACTERS, query: {...extraQueries, species: 'human'}},
            {pathname: CHARACTERS, query: {...extraQueries, species: 'alien'}}, 
            {pathname: CHARACTERS, query: {...extraQueries, species: 'humanoid'}},
            {pathname: CHARACTERS, query: {...extraQueries, species: 'unknown'}}
            ],
        GENDER:  [
            {pathname: CHARACTERS, query: {...extraQueries, gender: 'male'}},
            {pathname: CHARACTERS, query: {...extraQueries, gender: 'female'}}, 
            {pathname: CHARACTERS, query: {...extraQueries, gender: 'genderless'}},
            {pathname: CHARACTERS, query: {...extraQueries, gender: 'unknown'}}
            ]
    }

  return (
     <section className={styles.filter_section}>
      <div className={styles.local_header}>
          <h1 className={styles.main_theme}>Filters</h1>
          <Link href={CHARACTERS + `/?page=${extraQueries.page}`} className={styles.filter_link}>Reset filters</Link>
      </div>
            <ul className={styles.filter_wrapper}>
              <li className={styles.li_elem}>
                <span className={styles.label}>NAME :</span>
                <div className={styles.filter_category}>
                    <FindBar/>
                </div>
              </li>
              <li className={styles.li_elem}>
                <span className={styles.label}>CATEGORY :</span>
                <div className={styles.filter_category}>
                  {FILTER_ROUTS.STATUS.map((status, id) => 
                    <Link key={id} href={status} className={styles.filter_link}>{status.query.status}</Link>
                    )}
                </div>
              </li>
              <li className={styles.li_elem}>
                  <span className={styles.label}>SPECIES :</span>
                <div className={styles.filter_category}>
                  {FILTER_ROUTS.SPECIES.map((species, id) => 
                    <Link key={id} href={species} className={styles.filter_link}>{species.query.species}</Link>
                    )}
                </div>
              </li>
              <li className={styles.li_elem}>
                <span className={styles.label}>GENDER :</span>
              <div className={styles.filter_category}>
                 {FILTER_ROUTS.GENDER.map((gender, id) => 
                    <Link key={id} href={gender} className={styles.filter_link}>{gender.query.gender}</Link>
                    )}
              </div>
              </li>
            </ul>
        </section>
  )
}

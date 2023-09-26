import CharacterCard from "@/components/CharacterCard/CharacterCard";
import { fetchPage, fetchPageWithAxios} from "@/components/Utils/fetchCharacters";
import FilterHeader from "@/components/FilterHeader/FilterHeader";
import Link from 'next/link';
import styles from './page.module.css';
import { FilterMenu } from "./(components)/filterMenu/FilterMenu";

export default async function Characters({searchParams}) {

  const {info, results} = await fetchPage(searchParams.page);

  
  const res = await fetchPageWithAxios(searchParams);

  const CharectersArrray = res;



  const getPathNext = () => {
    if(info.next !== null) {
      return ({pathname: '/characters', query: 'page' in searchParams?  {...searchParams , page: Number(searchParams.page)+1}: {page: 2} });
    } else {
      return {pathname: 'characters'};
    }
  }

  const getPathPrev = () => {
    if(info.prev != null) {
      return ({pathname: '/characters', query: 'page' in searchParams?  {...searchParams, page: Number(searchParams.page)-1}: '' });
    } else {
      return {pathname: 'characters'};
    }
  }


  return <main>
    <section>
    {/* <FilterHeader/> */}
    </section>
    <FilterMenu extraQueries={searchParams}/>
      <section className="main-section-column">
        <div className="navigation-btn-group">
            <Link className={info.prev === null? styles.btn_prev_none: styles.btn_prev } style={{color: 'white'}} href={getPathPrev()}>{'<'}</Link>
            <Link className={info.next === null? styles.btn_next_none: styles.btn_next} style={{color: 'white'}} href={getPathNext()}>{'>'}</Link>
        </div>
          {CharectersArrray && CharectersArrray.map(el=>
            <CharacterCard key={el.id} character={el} card_type={'card_wrapper_type_row'} />
            )}
      </section>
  </main>
}

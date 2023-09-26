import { fetchLocationsWithAxios } from "@/components/Utils/fetchLocations";
import React from "react";
import LocationCard from "./(components)/LocationCard";
import styles from './page.module.css';

export default async function Locations({searchParams}) {

  const locationsArray = await fetchLocationsWithAxios(searchParams.page);


  return (
      <main>
        <section className={styles.main_section}>
            {locationsArray && locationsArray.map(el => {
              return <LocationCard key={el.id} {...el}/>
            })}
        </section> 
      </main>
  )
}

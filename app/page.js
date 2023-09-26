import CharacterCard from "@/components/CharacterCard/CharacterCard";
import MainIcon from "@/components/Icons/MainIcon";
import { fetchCharecters } from "@/components/Utils/fetchCharacters";

export default async function Home() {
  const data = await fetchCharecters();

  const CharectersArrray = data.results.slice(0, 10);

  return (
    <main>
      <section className="pre-main-section">
        <div className="_upper">
          <h1 className="h-api">The Rick and Morty API</h1>
        </div>
      </section>
      <section className="main-section">
        {CharectersArrray &&
          CharectersArrray.map((el) => (
            <CharacterCard key={el.id} character={el} />
          ))}
      </section>
    </main>
  );
}

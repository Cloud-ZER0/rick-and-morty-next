import cl from "./Findbar.module.css";

export default function Findbar() {
  return (
    <form className={cl.form_wrapper}>
      <input className={cl.search} type="search" placeholder="Search..." />
      <button className={cl.find_btn} type="submit">
        Find
      </button>
    </form>
  );
}

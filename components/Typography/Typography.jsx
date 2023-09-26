import styles from './Typography.module.css';

export default function Typography({ variant, tag, children }) {
  const variants = ["title", "title-head", "label", "primary"];

  const chekVariant = () => {
    if ((variant = "" || !variants.some((el) => el === variant))) {
      variant = "default-variant";
    }
  };


  chekVariant();

  switch (tag) {
    case "div":
      return <div className={styles[variant]}>{children}</div>;
    case "span":
      return <span className={styles[variant]}>{children}</span>;
    case "h1":
      return <h1 className={styles[variant]}>{children}</h1>;
    case "p":
      return <p className={styles[variant]}>{children}</p>;
    default:
      return <span className={styles[variant]}>{children}</span>;
  }
}

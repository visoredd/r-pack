import React from "react";
import img from "../../assets/images/notFound.png";
import styles from "./packageLis.module.scss";

type NoResultProps = {
  fuzzySearch: string;
};

const NoResult = (props: NoResultProps) => {
  return (
    <div className={styles.notFound}>
      <div>
        0 Search Results:
        <span> *{props.fuzzySearch}* </span>
      </div>
      <p>
        Find an R package by name,find package documentation,find R
        documentation,find R functions,search R source code...
      </p>
      <div className={styles.droid}>
        <div>
          <img src={img} alt="not-found" />
        </div>
        <div>This is not the droid you are looking for..</div>
      </div>
    </div>
  );
};

export default NoResult;

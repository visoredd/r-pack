import React, { useEffect, useMemo } from "react";
import { debounce } from "lodash";
import style from "./header.module.scss";

type FuzzySearchProps = {
  setFuzzySearch: any;
  fuzzySearch: string;
};

const Header = (props: FuzzySearchProps) => {
  const onNameChange = useMemo(
    () =>
      debounce((event) => {
        props.setFuzzySearch(event.target.value);
      }, 500),
    []
  );
  useEffect(() => {
    return () => {
      onNameChange.cancel();
    };
  }, []);
  return (
    <div className={style.header}>
      <div>
        Help R-Project // <span>Mercanis Challenge</span>
      </div>
      <div>
        <input type="text" onChange={onNameChange} />
      </div>
    </div>
  );
};

export default Header;

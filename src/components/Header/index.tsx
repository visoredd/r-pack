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
      <div className={style.searchBar}>
        <input type="text" onChange={onNameChange} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          style={{ width: 20 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;

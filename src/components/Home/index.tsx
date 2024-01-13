import React, { useState } from "react";
import Header from "../Header";
import { Package } from "../PackageList";
import Navbar from "../Navbar";
import PackageList from "../PackageList";
import PackageDetails from "../PackageDetails";
import styles from "./home.module.scss";

const Home = () => {
  const [packageDetail, setPackageDetail] = useState<Package | null>(null);
  const [fuzzySearch, setFuzzySearch] = useState<string>("");

  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <div>
        <Header setFuzzySearch={setFuzzySearch} fuzzySearch={fuzzySearch} />
      </div>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.package}>
        <PackageList
          setPackageDetail={setPackageDetail}
          packageDetail={packageDetail}
          fuzzySearch={fuzzySearch}
        />
        <PackageDetails packageDetail={packageDetail} />
      </div>
    </div>
  );
};

export default Home;

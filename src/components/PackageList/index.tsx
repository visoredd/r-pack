import React, { useEffect, useState } from "react";
import { getPackageList } from "../../services/packageList";
import styles from "./packageLis.module.scss";
export type Package = {
  id: string;
  name: string;
  headline: string;
  created_at: string;
  version: string;
  license: string;
  dependencies: string[];
  imports: string[];
  authors: string[];
  description: string;
};
type PackageListProps = {
  setPackageDetail: any;
  packageDetail: Package | null;
  fuzzySearch: string;
};
const PackageList = (props: PackageListProps) => {
  const [isLoading, setisLoading] = useState<Boolean>(true);
  const [data, setData] = useState<Package[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPackageList();
      setisLoading(false);
      setData(data);
    };
    fetchData();
  }, []);

  const filterData = data
    ? data.filter((pac: Package) =>
        pac.name.toLowerCase().includes(props.fuzzySearch)
      )
    : null;
  if (isLoading) {
    return <div className={styles.container}>Loading......</div>;
  }

  return (
    <div className={styles.container}>
      {filterData && filterData?.length ? (
        filterData?.map((pac: Package) => (
          <div
            key={pac.id}
            className={styles.package}
            onClick={() => props.setPackageDetail(pac)}
          >
            <div>{pac.name}</div>
            <div>{pac.headline}</div>
          </div>
        ))
      ) : (
        <div>0 Search Results: {props.fuzzySearch}</div>
      )}
    </div>
  );
};

export default PackageList;

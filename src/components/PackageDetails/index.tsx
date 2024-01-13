import React, { useEffect, useState } from "react";
import { Package } from "../PackageList";
import styles from "./packageDetails.module.scss";

type PackageDetailsProps = {
  packageDetail: Package | null;
};
const PackageDetails = ({ packageDetail }: PackageDetailsProps) => {
  let commentSection =
    JSON.parse(localStorage.getItem("commentSection")!) || {};
  const [comment, setComment] = useState<string>("");
  const submit = () => {
    const commentSectionList = commentSection[packageDetail?.id!] || [];

    localStorage.setItem(
      "commentSection",
      JSON.stringify({
        ...commentSection,
        [packageDetail?.id!]: [...commentSectionList, comment],
      })
    );
    setComment("");
    commentSection = JSON.parse(localStorage.getItem("commentSection")!) || {};
  };
  useEffect(() => {
    setComment("");
  }, [packageDetail]);
  if (!packageDetail) {
    return <></>;
  }
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.package}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ width: 30, height: 30 }}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            />
          </svg>
          Package
        </div>
        <div className={styles.packageName}>
          <div>{packageDetail?.name}</div>
          <div>{packageDetail?.version}</div>
        </div>
        <div>License: {packageDetail?.license}</div>
        <div>Date: {packageDetail?.created_at}</div>
      </div>
      <div>{packageDetail?.description}</div>
      <div>
        <b>Dependencies: </b>
        {packageDetail?.dependencies.join(", ")}
      </div>
      <div>
        <b>Imports: </b>
        {packageDetail?.imports?.join(", ")}
      </div>
      <div>
        <b>Authors: </b>
        {packageDetail?.authors?.join(", ")}
      </div>
      <div className={styles.commentSection}>
        <div>
          <b>Add Comment</b>
        </div>
        <div>
          <textarea
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            rows={5}
          />
        </div>
        <div className={styles.commentButtons}>
          <button
            onClick={() => {
              setComment("");
            }}
          >
            Cancel
          </button>
          <button onClick={submit}>Add Comment</button>
        </div>
        <div>
          {commentSection[packageDetail?.id!] &&
            commentSection[packageDetail?.id!].map(
              (com: string, index: number) => (
                <div style={{ margin: "1rem" }} key={index}>
                  {com}
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;

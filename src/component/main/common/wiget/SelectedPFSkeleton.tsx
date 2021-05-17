import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const SelectedPFSkeleton = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <Skeleton variant="text" style={{ width: "70%", height: "3rem" }} />
      <Skeleton variant="circle" style={{ width: "15rem", height: "15rem", paddingTop: "1rem" }} />
      <div style={{ width: "100%", display: "flex", justifyContent: "space-around", paddingTop: "1.5rem" }}>
        <Skeleton variant="rect" width={"4rem"} height={"4rem"} />
        <Skeleton variant="rect" width={"4rem"} height={"4rem"} />
        <Skeleton variant="rect" width={"4rem"} height={"4rem"} />
      </div>
      <div style={{ width: "90%", display: "flex", justifyContent: "flex-end", paddingTop: "1rem" }}>
        <Skeleton variant="rect" width={"5rem"} height={"2rem"} />
      </div>
    </div>
  );
};

export default SelectedPFSkeleton;

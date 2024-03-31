import React, { useEffect } from "react";
import GarbageItem from "./garbateItem";

function GarbagesComponent({ garbageList, onItemClick, pointStatus }) {
  return (
    <div className="flex items-end">
      {garbageList.map((item) => {
        return (
          <div onClick={() => onItemClick(item.typeId)} key={item.typeId}>
            <GarbageItem
              typeId={item.typeId}
              pointStatus={pointStatus}
              image={item.image}
            />
          </div>
        );
      })}
    </div>
  );
}

export default GarbagesComponent;

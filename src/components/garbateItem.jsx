import React, { useEffect, useState } from "react";
import { globalConstants } from "./constants";

function GarbageItem({ image, typeId, pointStatus }) {
  const { pointGained, pointGainedItemId } = pointStatus;
  useEffect(() => {
    if (typeId == pointGainedItemId) {
      setShowText(true);
      setTimeout(() => {
        setShowText(false);
      }, globalConstants.questionDelayDuration);
    }
  }, [pointStatus]);

  const [showText, setShowText] = useState(false);

  return (
    <div className="flex flex-col justify-center">
      {showText && (
        <div
          className={`
          ${
            pointGained > 0
              ? `text-green-500 bg-green-100`
              : `text-red-500 bg-red-100`
          } flex items-center justify-center  mb-4 rounded-full w-16 h-16 self-center
           text-2xl font-bold`}
        >
          {(pointGained > 0 ? "+" : "") + pointGained}
        </div>
      )}
      <div
        className={`origin-bottom
        hover:${!showText && `scale-110`}  mx-2
         transition duration-500 ease-in-out rounded-lg
         ${showText ? `scale-125` : `scale-100`}
         `}
      >
        <img className="h-56" src={image} />
      </div>
    </div>
  );
}

export default GarbageItem;

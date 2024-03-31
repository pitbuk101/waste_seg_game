import React from "react";

function TopItemComponent({
  points,
  isAllSubmitted,
  questionItem,
  isShowDescription,
}) {
  const { name, hindiName, image, descriptionEng, descriptionHindi } =
    questionItem;
  const ifSubmittedLayout = (
    <div className="p-4 bg-gradient-to-br from-blue-50 via-red-50 to-pink-50 mt-4 ">
      <p className="text-xl font-semibold">
        All questions are completed, and you have made
      </p>
      <p
        className={`${
          points >= 0 ? `text-green-500` : `text-red-500`
        } text-2xl font-bold`}
      >
        {points} points
      </p>
    </div>
  );
  const descriptionBox = (
    <div className="flex flex-col p-2 bg-orange-100 mt-4 w-2/3 rounded-md">
      <p className="text-xl font-semibold">{descriptionEng}</p>
      <p className="text-lg">{descriptionHindi}</p>
    </div>
  );
  
  const pointsAndNamedLayout = (
    <div className="flex flex-col items-center">
        <div className="flex justify-center my-2 items-center">
          <div className="button">{name}</div>
          <div className="button">{hindiName}</div>
        </div>
      {isShowDescription ? (
        descriptionBox
      ) : (
        <div className="flex justify-center">
          <img className="h-36" src={image} />
        </div>
      )}
    </div>
  );
  
  return <div>{isAllSubmitted ? ifSubmittedLayout : pointsAndNamedLayout}</div>;
}

export default TopItemComponent;
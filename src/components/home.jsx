import React, { useState } from "react";
import TopItemComponent from "./topItemComponent";
import GarbagesComponent from "./garbagesComponent";
import { garbageList, questionsList } from "./dataset";
import { globalConstants } from "./constants";

function HomeScreen() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isAllSubmitted, setIsAllSubmitted] = useState(false);
  const [points, setPoints] = useState(0);
  const [isNextQuestionActive, setIsNextQuestionActive] = useState(true);

  const [pointStatus, setPointStatus] = useState({
    pointGained: 0,
    pointGainedItemId: -1,
  });

  let questionItem = questionsList[questionIndex];

  function onItemClick(typeId) {
    if (!isNextQuestionActive) return;
    setIsNextQuestionActive(false);
    // validate answer
    let newPoint = points;
    if (!isAllSubmitted) {
      if (questionItem.typeId === typeId) {
        newPoint = points + 1;
      } else {
        newPoint = points - 1;
      }
      setPointStatus({
        pointGained: newPoint - points,
        pointGainedItemId: typeId,
      });
      setPoints(newPoint);
    }
    // go to next question
    if (questionIndex !== questionsList.length - 1) {
      console.log("new vs old points : ", [newPoint, points]);
      const isCorrectAns = newPoint > points;
      setTimeout(() => {
        if (isCorrectAns) setQuestionIndex(questionIndex + 1);
        setIsNextQuestionActive(true);
      }, globalConstants.questionDelayDuration);
    } else {
      setIsAllSubmitted(true);
    }
  }

  return (
    <div className="flex flex-col h-full items-center ">
      <div className="felx flex-col justify-center bg-gradient-to-br from-red-50 via-orange-50 to-red-50 px-4 py-2 rounded-md">
        <div className="text-3xl font-bold">
          {" "}
          Demo of the Waste Sorting Game{" "}
        </div>
        <div className="text-2xl text-red-400 font-semibold">
          A game-based learning platform
        </div>
      </div>

      <div className="flex flex-col justify-between  h-full space-y-4 relative items-center">
        <TopItemComponent
          questionItem={questionItem}
          isAllSubmitted={isAllSubmitted}
          points={points}
          isShowDescription={
            !isNextQuestionActive && pointStatus.pointGained > 0
          }
        />
        <GarbagesComponent
          garbageList={garbageList}
          onItemClick={onItemClick}
          pointStatus={pointStatus}
        />
        <div className="absolute top-2 right-0 flex-col ml-12 p-2 bg-yellow-100 self-start w-24 h-24 rounded-full border-4 border-orange-200 ">
          <div className="text-3xl">{points}</div>
          <div className="text-xl">points</div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;

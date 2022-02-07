import React from "react";
import Game_banner from "./../../../assests/image/game-banner.png";

const GameBaner = () => {
  return (
    <div className="px-6 mt-4 cursor-pointer">
      <img src={Game_banner} alt="game-banner" className="rounded-xl" />
    </div>
  );
};

export default GameBaner;

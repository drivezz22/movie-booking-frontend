import { useState } from "react";
import { AvailableSeatIcon, BookedIcon, ChairIcon } from "../icons";

export default function Chair({ id, color, isBooked = false, handleChairClick }) {
  const [isSelect, setIsSelect] = useState(false);
  const handleSelectSeat = () => {
    if (!isBooked) {
      handleChairClick(id, !isSelect);
      setIsSelect((prev) => !prev);
    }
  };

  if (isBooked) {
    return (
      <div className="h-full w-full relative">
        <ChairIcon fill={color} className={"h-full"} />
        <div className="absolute border-2 border-gray-500 bg-white/80 m-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-1 ">
          <BookedIcon className={"h-8 p-1"} color={"#171717"} />
        </div>
      </div>
    );
  }

  return (
    <button className="h-full w-full relative" onClick={handleSelectSeat}>
      <ChairIcon fill={color} className={"h-full"} />
      {isSelect && (
        <div className="absolute border-2 border-gray-500 bg-white/80 m-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-1 ">
          <AvailableSeatIcon className={"h-8"} color={"black"} />
        </div>
      )}
    </button>
  );
}

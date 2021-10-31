import React, { useState } from "react";

import Google from "assets/GOOGL.png";
import Facebook from "assets/FB.png";
import Amazon from "assets/AMZN.svg";
import Flex from "components/Flex";
import HeroCard from "components/HeroCard";

const DraggableCards = () => {
  const [dragIndex, setDragIndex] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [companyDetails, setCompanyDetails] = useState([
    {
      id: 14,
      name: "Google",
      amount: "1515 USD",
      image: Google,
    },
    { id: 42, name: "Facebook", amount: "266 USD", image: Facebook },
    { id: 34, name: "Amazon", amount: "3116 USD", image: Amazon },
  ]);

  const onDragHandler = (index) => {
    setDragIndex(index);
  };

  const onDropHandler = (index) => {
    const copyData = [...companyDetails];
    const draggedData = copyData[dragIndex];
    copyData[dragIndex] = copyData[index];
    copyData[index] = draggedData;
    setCompanyDetails(copyData);
    setDragIndex("");
    setDragOver("");
  };

  const onDragOverHandler = (event, index) => {
    event.preventDefault();
    setDragOver(index);
  };

  return (
    <Flex center flexWrap>
      {companyDetails?.map(({ name, amount, image, id }, eachIndex) => (
        <HeroCard
          title={name}
          amount={amount}
          image={image}
          key={id}
          onDragStart={() => onDragHandler(eachIndex)}
          onDrop={() => onDropHandler(eachIndex)}
          isDragging={dragOver === eachIndex}
          onEndDrag={() => setDragOver("")}
          onDragOver={(event) => onDragOverHandler(event, eachIndex)}
        />
      ))}
    </Flex>
  );
};

export default DraggableCards;

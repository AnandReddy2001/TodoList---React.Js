import React, { useState } from "react";

const Anand = () => {
  const [nameData, setNameData] = useState("");
  const [nameList, setNameList] = useState([]);

  const addItem = () => {
    if (!nameData) {
      alert("Please enter name");
    } else {
      setNameList([...nameList, nameData]);
      setNameData("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={nameData}
        onChange={(e) => setNameData(e.target.value)}
      />
      <button onClick={() => addItem()}>Add Name</button>
      <div>
        {nameList.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
    </div>
  );
};

export default Anand;

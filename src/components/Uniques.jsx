import React, { useCallback, useState } from "react";

function removeDuplicateFromArray(input) {
  return input.reduce((uniques, item) => {
    if (!uniques?.find((elem) => elem === item)) {
      uniques.push(item);
    }
    return uniques;
  }, []);
}

const Uniques = () => {
  const [userInput, setUserInput] = useState("chicken");
  const [uniques, setUniques] = useState([]);

  const addToArray = useCallback(
    (evt) => {
      evt?.preventDefault();
      setUniques((currentUniques) => {
        return removeDuplicateFromArray([...currentUniques, userInput]);
      });
      setUserInput("");
    },
    [userInput]
  );

  return (
    <div style={{ padding: "2rem" }}>
      <form onSubmit={addToArray}>
        <input
          type="text"
          value={userInput}
          onChange={(evt) => setUserInput(evt?.target?.value)}
          style={{ borderRadius: "5px", borderColor: "#7091F5", padding: "5px" }}
        />
        <button
          type="button"
          onClick={addToArray}
          style={{
            padding: "5px",
            borderRadius: "5px",
            color:"white",
            cursor:"pointer",
            backgroundColor: "#7091F5",
          }}
        >
          Submit
        </button>
      </form>
      <br />
      <div>
        {uniques?.map((item, index) => (
          <b style={{ marginRight: "0.5rem" }} key={index}>
            {item},
          </b>
        ))}
      </div>
    </div>
  );
};

export default Uniques;

import React from "react";
import { useState } from "react";
import Hoist from "./hoist";
import Hand from "./hand";
import PL from "./pl";

const Check = ({ flags, setFlags }) => {
  const [toggle, setToggle] = useState(true);
  const [choiceType, setChoiceType] = useState(0);
  const displayLi = (num) => {
    if (num === 1) return <Hoist flags={flags} setFlags={setFlags} />;
    else if (num === 2) return <Hand flags={flags} setFlags={setFlags} />;
    else if (num === 3) return <PL flags={flags} setFlags={setFlags} />;
  };
  return (
    <div>
      <div className="choiceTypeButton">
        <button onClick={() => setToggle(!toggle)}>공정 선택</button>
      </div>
      {toggle ? (
        <></>
      ) : (
        <div className="chocieGation">
          <nav>
            <ul>
              <li onClick={() => setChoiceType(1)}>
                <button>호이스트</button>
              </li>
              <li onClick={() => setChoiceType(2)}>
                <button> 핸드레일</button>
              </li>
              <li onClick={() => setChoiceType(3)}>
                <button>PL창호</button>
              </li>
            </ul>
          </nav>

          {displayLi(choiceType)}
        </div>
      )}
    </div>
  );
};

export default Check;

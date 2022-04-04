import React from "react";

const PL2 = ({ flags, setFlags }) => {
  const choiceColor1 = (type) => {
    if (type === 0 || type === 1)
      return (
        <td>
          <>101</>
        </td>
      );
    else if (type === 2)
      return (
        <td id="handChange2">
          <>101</>
        </td>
      );
    else
      return (
        <td id="handChange1">
          <>101</>
        </td>
      );
  };

  const choiceColor2 = (type) => {
    if (type === 0 || type === 1)
      return (
        <td>
          <>201</>
        </td>
      );
    else if (type === 2)
      return (
        <td id="handChange2">
          <>201</>
        </td>
      );
    else
      return (
        <td id="handChange1">
          <>201</>
        </td>
      );
  };

  const choiceColor3 = (type) => {
    if (type === 0 || type === 1)
      return (
        <td>
          <>301</>
        </td>
      );
    else if (type === 2)
      return (
        <td id="handChange2">
          <>301</>
        </td>
      );
    else
      return (
        <td id="handChange1">
          <>301</>
        </td>
      );
  };

  const choiceColor4 = (type) => {
    if (type === 0 || type === 1)
      return (
        <td>
          <>401</>
        </td>
      );
    else if (type === 2)
      return (
        <td id="handChange2">
          <>401</>
        </td>
      );
    else
      return (
        <td id="handChange1">
          <>401</>
        </td>
      );
  };
  return (
    <div className="tableDiv">
      <table className="handTable" border="1">
        <tr>
          {choiceColor1(flags["flag1"])}
          <td>
            <>102</>
          </td>
          <td>
            <>103</>
          </td>
          <td>
            <>104</>
          </td>
          <td>
            <>105</>
          </td>
          <td>
            <>106</>
          </td>
        </tr>
        <tr>
          {choiceColor2(flags["flag2"])}
          <td>
            <>202</>
          </td>
          <td>
            <>203</>
          </td>
          <td>
            <>204</>
          </td>
          <td>
            <>205</>
          </td>
          <td>
            <>206</>
          </td>
        </tr>
        <tr>
          {choiceColor3(flags["flag3"])}
          <td>
            <>302</>
          </td>
          <td>
            <>303</>
          </td>
          <td>
            <>304</>
          </td>
          <td>
            <>305</>
          </td>
          <td>
            <>306</>
          </td>
        </tr>
        <tr>
          {choiceColor4(flags["flag4"])}
          <td>
            <>402</>
          </td>
          <td>
            <>403</>
          </td>
          <td>
            <>404</>
          </td>
          <td>
            <>405</>
          </td>
          <td>
            <>406</>
          </td>
        </tr>
        <tr>
          <td>
            <>501</>
          </td>
          <td>
            <>502</>
          </td>
          <td>
            <>503</>
          </td>
          <td>
            <>504</>
          </td>
          <td>
            <>505</>
          </td>
          <td>
            <>506</>
          </td>
        </tr>
        <tr>
          <td>
            <>601</>
          </td>
          <td>
            <>602</>
          </td>
          <td>
            <>603</>
          </td>
          <td>
            <>604</>
          </td>
          <td>
            <>605</>
          </td>
          <td>
            <>606</>
          </td>
        </tr>
        <tr>
          <td>
            <>701</>
          </td>
          <td>
            <>702</>
          </td>
          <td>
            <>703</>
          </td>
          <td>
            <>704</>
          </td>
          <td>
            <>705</>
          </td>
          <td>
            <>706</>
          </td>
        </tr>
        <tr>
          <td>
            <>801</>
          </td>
          <td>
            <>802</>
          </td>
          <td>
            <>803</>
          </td>
          <td>
            <>804</>
          </td>
          <td>
            <>805</>
          </td>
          <td>
            <>806</>
          </td>
        </tr>
        <tr>
          <td>
            <>901</>
          </td>
          <td>
            <>902</>
          </td>
          <td>
            <>903</>
          </td>
          <td>
            <>904</>
          </td>
          <td>
            <>905</>
          </td>
          <td>
            <>906</>
          </td>
        </tr>
        <tr>
          <td>
            <>1001</>
          </td>
          <td>
            <>1002</>
          </td>
          <td>
            <>1003</>
          </td>
          <td>
            <>1004</>
          </td>
          <td>
            <>1005</>
          </td>
          <td>
            <>1006</>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default PL2;

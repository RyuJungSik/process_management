import React from "react";

const Hoist2 = ({ flags, setFlags }) => {
  return (
    <div>
      <h1>호이스트 그래프 들어갈곳</h1>
      <table border="1">
        <tr>
          <td>{flags["flag1"] === 0 ? "빨강" : "파랑"}</td>
          <td>
            <>2</>
          </td>
          <td>
            <>3</>
          </td>
          <td>
            <>4</>
          </td>
          <td>
            <>5</>
          </td>
          <td>
            <>6</>
          </td>
        </tr>
        <tr>
          <td>{flags["flag2"] === 0 ? "빨강" : "파랑"}</td>
          <td>
            <>2</>
          </td>
          <td>
            <>3</>
          </td>
          <td>
            <>4</>
          </td>
          <td>
            <>5</>
          </td>
          <td>
            <>6</>
          </td>
        </tr>
        <tr>
          <td>{flags["flag3"] === 0 ? "빨강" : "파랑"}</td>
          <td>
            <>2</>
          </td>
          <td>
            <>3</>
          </td>
          <td>
            <>4</>
          </td>
          <td>
            <>5</>
          </td>
          <td>
            <>6</>
          </td>
        </tr>
        <tr>
          <td>{flags["flag4"] === 0 ? "빨강" : "파랑"}</td>
          <td>
            <>2</>
          </td>
          <td>
            <>3</>
          </td>
          <td>
            <>4</>
          </td>
          <td>
            <>5</>
          </td>
          <td>
            <>6</>
          </td>
        </tr>
        <tr>
          <td>
            <>1</>
          </td>
          <td>
            <>2</>
          </td>
          <td>
            <>3</>
          </td>
          <td>
            <>4</>
          </td>
          <td>
            <>5</>
          </td>
          <td>
            <>6</>
          </td>
        </tr>
        <tr>
          <td>
            <>1</>
          </td>
          <td>
            <>2</>
          </td>
          <td>
            <>3</>
          </td>
          <td>
            <>4</>
          </td>
          <td>
            <>5</>
          </td>
          <td>
            <>6</>
          </td>
        </tr>
        <tr>
          <td>
            <>1</>
          </td>
          <td>
            <>2</>
          </td>
          <td>
            <>3</>
          </td>
          <td>
            <>4</>
          </td>
          <td>
            <>5</>
          </td>
          <td>
            <>6</>
          </td>
        </tr>
        <tr>
          <td>
            <>1</>
          </td>
          <td>
            <>2</>
          </td>
          <td>
            <>3</>
          </td>
          <td>
            <>4</>
          </td>
          <td>
            <>5</>
          </td>
          <td>
            <>6</>
          </td>
        </tr>
        <tr>
          <td>
            <>1</>
          </td>
          <td>
            <>2</>
          </td>
          <td>
            <>3</>
          </td>
          <td>
            <>4</>
          </td>
          <td>
            <>5</>
          </td>
          <td>
            <>6</>
          </td>
        </tr>
        <tr>
          <td>
            <>1</>
          </td>
          <td>
            <>2</>
          </td>
          <td>
            <>3</>
          </td>
          <td>
            <>4</>
          </td>
          <td>
            <>5</>
          </td>
          <td>
            <>6</>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Hoist2;
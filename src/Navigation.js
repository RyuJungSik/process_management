import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navigation">
      <nav>
        <ul>
          <li>
            <Link to="/check">공사 체크</Link>
          </li>
          <li>
            <Link to="/area">작업 구역</Link>
          </li>
          <li>
            <Link to="/grid">공정표</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

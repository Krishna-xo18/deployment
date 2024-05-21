import React from "react";
import { Link } from "react-router-dom";
function Notfound() {
  return (
    <div>
      <section className="page notfound">
        <div className="content">
          <img src="/notfound.png" alt="notfound" />
          <Link to={"/"}>RETURN TO HOME</Link>
        </div>
      </section>
    </div>
  );
}

export default Notfound;

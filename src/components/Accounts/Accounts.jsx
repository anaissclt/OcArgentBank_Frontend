// IMPORT
import React from "react";

// STYLE
import "./accounts.css";

function Accounts(props) {
  // Déstructure les propriétés passées en tant que "props"
  // Elles peuvent être utilisées sans utiliser props.(propriétés)...
  const { title, amount, description } = props;
  return (
    <>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta"></div>
      </section>
    </>
  );
}

export default Accounts;

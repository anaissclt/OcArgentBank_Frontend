// IMPORT
import React from "react";

// STYLE
import "./accounts.css";

// COMPOSANTS
import Button from "../Button/Button";

// Le composant prend props en argument
function Accounts(props) {
  // Déstructure les propriétés passées au composant
  // plutôt d'utiliser props.title, props.amount on peut les utiliser comme title, amount,
  const { title, amount, description } = props;
  return (
    <>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <Button className="transaction-button" text="View transactions" />
        </div>
      </section>
    </>
  );
}

export default Accounts;

// IMPORT
import React from "react";

// COMPOSANTS
import User from "../../components/User/User";
import Accounts from "../../components/Accounts/Accounts";

function Profile() {
  return (
    <>
      <main className="main bg-dark">
        <User />
        <h2 className="sr-only">Accounts</h2>
        <Accounts
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Accounts
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Accounts
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </>
  );
}

export default Profile;

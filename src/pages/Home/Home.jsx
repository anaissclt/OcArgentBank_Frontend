// IMPORT
import React from "react";

// ASSETS
import IconChat from "../../assets/icon-chat.png";
import IconMoney from "../../assets/icon-money.png";
import IconSecurity from "../../assets/icon-security.png";

// COMPOSANTS
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";

function Home() {
  return (
    <>
      <main>
        <Banner />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Features
            iconSrc={IconChat}
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
          />
          <Features
            iconSrc={IconMoney}
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
          />
          <Features
            iconSrc={IconSecurity}
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money
            is always safe."
          />
        </section>
      </main>
    </>
  );
}

export default Home;

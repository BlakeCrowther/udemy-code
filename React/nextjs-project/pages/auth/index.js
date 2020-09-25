import React from "react";

import User from "../../components/User";

const authPage = (props) => (
  <div>
    <h1>The Auth Page - {props.appName}</h1>
    <User age={69} name="Blake" />
  </div>
);

authPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Super App" });
    }, 1000);
  });
  return promise;
};

export default authPage;

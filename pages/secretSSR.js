import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { getSession } from "@auth0/nextjs-auth0";

const SecretSSR = ({ user }) => {
  return (
    <BaseLayout user={user} isLoading={false}>
      <BasePage>
        <h1>I am Secret page. Hello-{user && user.name}</h1>
      </BasePage>
    </BaseLayout>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession(req, res);

  if (!session || !session.user) {
    res.writeHead(302, { Location: "/api/auth/login" });
    res.end();
    return {
      props: {},
    };
  }

  console.log(session.user);

  return {
    props: { user: session.user },
  };
};

export default SecretSSR;

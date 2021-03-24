import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useUser } from "@auth0/nextjs-auth0";

const About = () => {
  const { user, isLoading } = useUser();

  return (
    <BaseLayout user={user} isLoading={isLoading}>
      <BasePage>
        <h1>I am About page.</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default About;

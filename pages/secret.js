import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from "@/hoc/withAuth";

const Secret = ({ user, isLoading }) => {
  return (
    <BaseLayout user={user} isLoading={isLoading}>
      <BasePage>
        <h1>I am Secret page.</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(Secret);

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "../actions/user";

const Secret = () => {
  const { data, loading } = useGetUser();

  return (
    <BaseLayout>
      <BasePage>
        <h1>I am Secret Page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default Secret;

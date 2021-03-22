import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetPostsById } from "@/actions";
import { useRouter } from "next/router";

const Portfolio = () => {
  const router = useRouter();
  const { data: portfolio, error, loading } = useGetPostsById(router.query.id);

  return (
    <BaseLayout>
      <BasePage>
        {loading && <p>loading</p>}
        {error && <div className="alert alert-danger">{error.message}</div>}
        {portfolio && (
          <>
            <h1>I am Portfolio page</h1>
            <h2>{portfolio.title}</h2>
            <p>BODY: {portfolio.body}</p>
            <p>ID: {portfolio.id}</p>
          </>
        )}
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolio;
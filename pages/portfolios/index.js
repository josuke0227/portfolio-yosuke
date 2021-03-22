import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import { useGetPosts } from "@/actions";

const Portfolios = () => {
  const { data, error, loading } = useGetPosts();

  const renderPosts = (posts) => {
    return posts.map((post) => (
      <li key={post.id} style={{ fontSize: "20px" }}>
        <Link as={`/portfolios/${post.id}`} href="/portfolios/[id]">
          <a>{post.title}</a>
        </Link>
      </li>
    ));
  };

  return (
    <BaseLayout>
      <BasePage>
        {loading && <p>Loading...</p>}
        {error && <div className="alert alert-danger">{error.message}</div>}
        {data && (
          <>
            <h1>I am portfolios page.</h1>
            <ul>{renderPosts(data)}</ul>
          </>
        )}
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolios;

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import { useGetPosts } from "@/actions";
import { useUser } from "@auth0/nextjs-auth0";

const Portfolios = () => {
  const { data, error, loading } = useGetPosts();
  const { user, isLoading } = useUser();

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
    <BaseLayout user={user} isLoading={isLoading}>
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

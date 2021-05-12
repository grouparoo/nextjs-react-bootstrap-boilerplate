import Head from "next/head";
import Navigation from "../navigation";
import { useRouter } from "next/router";

function PageTemplate({ children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>React Bootstrap Mega Menu</title>

        <meta name="viewport" content="width=device-width" />
      </Head>

      <div className="main">
        <Navigation />
        {children}
      </div>
    </>
  );
}

export default PageTemplate;

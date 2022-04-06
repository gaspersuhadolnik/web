import Head from "next/head";
const PageHead = ({ page }) => {
  return (
    <Head>
      <title>Gašper Suhadolnik | {page}</title>
    </Head>
  );
};

export default PageHead;

import Head from "next/head";

export default (props) => {
  console.log(props);
  return (
    <div>
      <Head>Second Page!</Head>

      <main>
        <h1>Hello</h1>
      </main>
    </div>
  );
};

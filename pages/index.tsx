import Head from "next/head";
import HomeCanvas from "../components/canvases/homeCanvas";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>getSaasy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="level1">
          <h1 className="title text-center" style={{ fontSize: "50px" }}>
            getSaasy
          </h1>

          <p className="description text-center">
            Heard you like SaaS products. Well then its time to get Saasy!
          </p>

          <HomeCanvas />
        </div>
      </main>

      <footer>
        <p>Made by Zachary Bentsen 2021</p>
      </footer>
      <script></script>
    </div>
  );
}

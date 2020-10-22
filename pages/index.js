import Layout from "../components/Layout";
import Fetch from "isomorphic-unfetch";

import Prices from "../components/Prices";

const Index = (props) => {
  return (
    <Layout>
      <div>
        <h1 className="hello">Welcome To Bitcoin price</h1>
        <p>Check current bitcoin rate</p>
        <Prices bpi={props.bpi} />
      </div>
    </Layout>
  );
};

Index.getInitialProps = async function () {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    bpi: data.bpi,
  };
};

export default Index;

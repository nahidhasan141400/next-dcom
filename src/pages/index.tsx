import Add from "../../components/Add/Add";
import Future from "../../components/future/future";
import Hero from "../../components/Hero/Hero";
import Service from "../../components/Service/Service";
import Status from "../../components/status/Status";
import Titel from "../../components/util/Titel";
import Layout from "../../layout/main";

const index = () => {
  return (
    <Layout>
      <Hero />
      <Status />
      <Add />
      <Titel text="Top sells" />
      <Future />
      <Service />
      <Titel text="for you" />
      <Future />
      <Titel text="Recent product" />
      <Future />
    </Layout>
  );
};

export default index;

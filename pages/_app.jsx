import "../style/global.scss";
import Layout from "../components/Layout";

export default function MyApp(props) {
  return (
    <Layout>
      <props.Component {...props} />
    </Layout>
  );
}

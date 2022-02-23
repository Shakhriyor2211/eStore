import Header from "../../components/Layout/header";
import Footer from "../../components/Layout/footer";

const Layout = (props) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <section className="flex-auto relative">
        <div className="max-w-5xl mx-auto">{props.children}</div>
      </section>
      <Footer />
    </div>
  );
};

export default Layout;

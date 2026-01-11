import Container from "../../ui/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Container
      size="md"
      as="div"
      className="px-6 md:px-0 min-h-screen flex flex-col"
    >
      <Header />

      <main className="w-full text-white flex flex-col py-16 items-center flex-1">
        {children}
      </main>

      <Footer />
    </Container>
  );
}

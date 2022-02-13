import Meta from "components/Meta"; // Components: Meta
import Header from "components/Header"; // Components: Header
import Footer from "components/Footer"; // Components: Footer
import type { ReactElement } from "react"; // Types
import styles from "styles/components/Layout.module.scss"; // Component styles

export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    // Layout wrapper
    <div className="flex flex-col min-h-screen">
      {/* Site meta */}
      <Meta />

      {/* Global header */}
      <Header />

      {/* Injected child content */}
      <div className="flex-1">{children}</div>

      {/* Global footer */}
      <Footer />
    </div>
  );
}

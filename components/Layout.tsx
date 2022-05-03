import Meta from "components/Meta"; // Components: Meta
import Header from "components/Header"; // Components: Header
import Footer from "components/Footer"; // Components: Footer
import type { ReactElement } from "react"; // Types

export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
      // Layout wrapper
      <>
      <Meta />

	  <div className="page-wrapper">
	  
      <Header />
      
      	{/* Injected child content */}
	  	{children}
	  
	  </div>
	  
      <Footer />
      </>
  );
}

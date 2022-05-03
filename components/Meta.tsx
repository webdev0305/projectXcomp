import Head from "next/head"; // HTML Head

// Setup project details
const url: string = process.env.NEXT_PUBLIC_URL ?? "https://token.com/";
const tokenName: string = process.env.NEXT_PUBLIC_TOKEN_NAME ?? "Token Name";
const description: string =
  process.env.NEXT_PUBLIC_DESCRIPTION ?? "Some description";

export default function Meta() {
  return (
	<Head>
      {/* Fonts: Inter */}
	  <link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css" />
	  <link rel="stylesheet" href="assets/css/all.min.css" />
	  <link rel="stylesheet" href="assets/css/line-awesome.min.css" />
	  <link rel="stylesheet" href="assets/css/vendor/animate.min.css" />
	  <link rel="stylesheet" href="assets/css/vendor/slick.css" />
	  <link rel="stylesheet" href="assets/css/vendor/jquery-ui.min.css" />
	  <link rel="stylesheet" href="assets/css/main.css" />
	  
	  <script src="assets/js/vendor/jquery-3.5.1.min.js"></script>
	  <script src="assets/js/vendor/bootstrap.bundle.min.js"></script>
	  <script src="assets/js/vendor/wow.min.js"></script>
	  <script src="assets/js/vendor/slick.min.js"></script>
	  <script src="assets/js/app.js"></script>

      {/* Primary Meta */}
      <title>{tokenName}</title>
      <meta name="title" content={tokenName} />
      <meta name="description" content={description} />

      {/* Open Graph + Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={tokenName} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}meta.png`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={tokenName} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${url}meta.png`} />

      {/* Favicon */}
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
}

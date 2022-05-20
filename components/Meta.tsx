import Head from "next/head"; // HTML Head

// Setup project details
const url: string = process.env.NEXT_PUBLIC_URL ?? "";
const tokenName: string = process.env.NEXT_PUBLIC_TOKEN_NAME ?? "";
const description: string = process.env.NEXT_PUBLIC_DESCRIPTION ?? "";

export default function Meta() {
  return (
	<Head>
      {/* Fonts: Inter */}
	  <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
	  <link rel="stylesheet" href="/assets/css/all.min.css" />
	  <link rel="stylesheet" href="/assets/css/line-awesome.min.css" />
	  <link rel="stylesheet" href="/assets/css/vendor/animate.min.css" />
	  <link rel="stylesheet" href="/assets/css/vendor/slick.css" />
	  <link rel="stylesheet" href="/assets/css/vendor/jquery-ui.min.css" />
	  <link rel="stylesheet" href="/assets/css/main.css" />
    
      {/* Primary Meta */}
      <title>CompetitionX</title>
      <meta name="title" content="CompetitionX" />
      <meta name="description" content="Use PXT to win great prizes, from NFTs to Crypto and luxurious Holidays!  All on the Avalanche blockchain, with 100% anonymity." />

      {/* Open Graph + Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content="CompetitionX" />
      <meta property="og:description" content="Use PXT to win great prizes, from NFTs to Crypto and luxurious Holidays!  All on the Avalanche blockchain, with 100% anonymity." />
      <meta property="og:image" content="https://competitionx.app/opengraph.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content="CompetitionX" />
      <meta property="twitter:description" content="Use PXT to win great prizes, from NFTs to Crypto and luxurious Holidays!  All on the Avalanche blockchain, with 100% anonymity." />
      <meta property="twitter:image" content="https://competitionx.app/opengraph.png" />

      {/* Favicon */}
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
}
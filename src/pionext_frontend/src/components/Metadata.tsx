import { HelmetProvider, Helmet } from "react-helmet-async";

const Metadata = () => {
  const metadataBase = "https://pionext.org";
  const title = "Pionext";
  const description = "Pioneering community-driven venture building";
  const ogImage = "/logos/og-image.jpg";

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph metadata */}
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Community-driven venture building"
        />
        <meta property="og:url" content={metadataBase} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Pionext" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />

        {/* Twitter metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Favicon and Icons */}
        <link rel="icon" href="/logos/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logos/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logos/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          href="/logos/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="android-chrome-192x192"
          href="/logos/android-chrome-192x192.png"
        />
        <link
          rel="android-chrome-512x512"
          href="/logos/android-chrome-512x512.png"
        />
      </Helmet>
    </HelmetProvider>
  );
};

export default Metadata;

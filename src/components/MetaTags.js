import {Helmet} from "react-helmet";

export default function MetaTags({title = null, description = null}) {
  const metaUrl = window.location.href
  const metaTitle = title ? `Marketing Mind - ${title}` : "Marketing Mind"
  const metaDesc = description ||
    "Our marketing consultancy agency offers integrated marketing solutions based on your business special needs."
  const metaImage = "https://www.marketingmind.gr/preview.png"

  return (
    <Helmet>
      <body className="font-brand bg-gray-100"/>
      <title>{metaTitle}</title>
      <link rel="canonical" href={metaUrl}/>
      <meta name="title" content={metaTitle}/>
      <meta name="description" content={metaDesc}/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={metaUrl}/>
      <meta property="og:title" content={metaTitle}/>
      <meta property="og:description" content={metaDesc}/>
      <meta property="og:image" content={metaImage}/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={metaUrl}/>
      <meta property="twitter:title" content={metaTitle}/>
      <meta property="twitter:description" content={metaDesc}/>
      <meta property="twitter:image" content={metaImage}/>
    </Helmet>
  )
}

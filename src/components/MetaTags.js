import {Helmet} from "react-helmet";

export default function MetaTags({title = null, description = null}) {
  const metaUrl = window.location.href
  const metaTitle = title ? `${title} - Marketing Mind` : "Marketing Mind"
  const metaDesc = description ||
    "Our marketing consultancy agency offers integrated marketing solutions based on your business special needs."

  return (
    <Helmet>
      <body className="font-brand bg-gray-100"/>
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle}/>
      <meta property="og:url" content={metaUrl}/>
      <meta property="og:title" content={metaTitle}/>
      <meta property="og:description" content={metaDesc}/>
      <meta property="twitter:url" content={metaUrl}/>
      <meta property="twitter:title" content={metaTitle}/>
      <meta property="twitter:description" content={metaDesc}/>
    </Helmet>
  )
}

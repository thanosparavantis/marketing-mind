import {Helmet} from "react-helmet";

export default function PageMetaComponent({title = null}) {
  const metaUrl = window.location.href
  const metaTitle = title ? `${title} - Marketing Mind` : "Marketing Mind"

  return (
    <Helmet>
      <body className="font-brand bg-gray-100"/>
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle}/>
      <meta property="og:url" content={metaUrl}/>
      <meta property="og:title" content={metaTitle}/>
      <meta property="twitter:url" content={metaUrl}/>
      <meta property="twitter:title" content={metaTitle}/>
    </Helmet>
  )
}
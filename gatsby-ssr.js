const React = require('react')

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'th' })
}

// gatsby-plugin-google-gtag loads gtag.js (~165 KB) as soon as the page parses,
// competing with the LCP image and delaying interactivity. Keep the plugin's
// inline config (gtag() queues into dataLayer) but fetch the library only once
// the page has loaded and the browser is idle.
exports.onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
  getPostBodyComponents,
  replacePostBodyComponents,
}) => {
  const postBody = getPostBodyComponents()
  const gtagScript = postBody.find(
    (component) => component?.key === 'gatsby-plugin-google-gtag',
  )
  if (!gtagScript) return

  const loader = `(function(){function l(){var s=document.createElement('script');s.async=true;s.src=${JSON.stringify(gtagScript.props.src)};document.body.appendChild(s)}function i(){'requestIdleCallback' in window?requestIdleCallback(l,{timeout:5000}):setTimeout(l,2000)}document.readyState==='complete'?i():addEventListener('load',i)})()`

  replacePostBodyComponents([
    ...postBody.filter((component) => component !== gtagScript),
    <script key="deferred-gtag" dangerouslySetInnerHTML={{ __html: loader }} />,
  ])

  // The preconnect hints are pointless once the script loads after `load`
  replaceHeadComponents(
    getHeadComponents().filter(
      (component) =>
        !['preconnect-google-gtag', 'dns-prefetch-google-gtag'].includes(
          component?.key,
        ),
    ),
  )
}

import React from 'react'
import { Layout, SEO } from '../components'

const NotFoundPage = () => (
  <Layout>
    <section className="mx-auto max-w-2xl px-4 py-32 text-center sm:px-6">
      <h1 className="text-5xl font-semibold tracking-tight text-primary sm:text-6xl">
        NOT FOUND
      </h1>
      <p className="mt-4 text-lg text-muted">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </section>
  </Layout>
)

export const Head = () => <SEO title="404: Not found" noindex />

export default NotFoundPage

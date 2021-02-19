import Head from 'next/head'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Head>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}
      </main>
    </div>
  )
}
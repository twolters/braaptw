import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import { graphQLClient } from '../utils/graphql-client'
import { gql } from 'graphql-request'
import useSWR from 'swr'

const fetcher = async function(query) {
  return await graphQLClient.request(query)
}

export default function Home() {

  const { error, data } = useSWR(
    gql`
        {
        videos {
          data {
            _id
            link
            _ts
          }
        }
      }
    `,
    fetcher  
  )
  
  if (error) {
    console.log(error)
    return <div>borked</div>
  }

  return (
    <Layout>
      <Head>
        <title>Braap</title>
      </Head>
      <div className="bg-gradient-to-r from-red-500 shadow">Braap!</div>
      {data ? (
        <ul>
          {data.videos.data.map((video) => (
            <li key={video._id}>{video.link}</li>
          ))}
          </ul>
      ) : (
        <div className="loader">loading...</div>
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {

    }
  }
}

import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="cophi - homepage" />
        <meta name="author" content="cophi" />
        <meta name="author" content="cophi" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta name="twitter:title" content="cophi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_cophi_" />
        <meta name="twitter:creator" content="@_cophi_" />
        <meta
          name="twitter:image"
          content="https://www.cophi.online/card.png"
        />
        <meta property="og:site_name" content="Cophi" />
        <meta name="og:title" content="Cophi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.cophi.online/card.png" />
        <title>cophi - homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main

import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'
import thumbGit from '../public/images/links/github.png'
import thumbTwitter from '../public/images/links/twitter.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hey, I&apos;m cophi - frontend dev and aspiring fullstack blockchain
        engineer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            cophi
          </Heading>
          <p>blockchain native ( React / Solidity / web3 )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/cophi.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          I love to build minimalistic and interactive web apps. My whole life
          I've been passionate about everything tech. After working as an
          engineer for several years, i decided to focus on my true passion -
          web development. Write about web3. NFT project called &quot;
          <NextLink href="https://twobitbears.com" passHref>
            <Link target="_blank">Two Bit Bears</Link>
          </NextLink>
          &quot;.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1991</BioYear>
          Born in Europe.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Master of Science in Civil Engineering at the HafenCity University.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Finished CS50x at the Harvard University
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Became Partner and Community Manager at{' '}
          <NextLink href="https://twobitbears.com" passHref>
            <Link target="_blank">Two Bit Bears</Link>
          </NextLink>
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Several courses at{' '}
          <NextLink href="https://buildspace.so/projects" passHref>
            <Link target="_blank">Buildspace</Link>
          </NextLink>
          ,{' '}
          <NextLink href="https://www.alchemy.com/" passHref>
            <Link target="_blank">Alchemy</Link>
          </NextLink>
          ,{' '}
          <NextLink href="https://scrimba.com" passHref>
            <Link target="_blank">Scrimba</Link>
          </NextLink>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Nature, Music, Art{' '}
          {/*  <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link> */}
          , Summer, Electric Vehicles, Renewable Energy, web3
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/cophi-dev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @cophi-dev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/_cophi_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @cophi
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://twitter.com/_cophi_"
            title="Dev as Life"
            thumbnail={thumbTwitter}
          >
            @Twitter
          </GridItem>
          <GridItem
            href="https://github.com/cophi-dev"
            title="Inkdrop"
            thumbnail={thumbGit}
          >
            @GitHub
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

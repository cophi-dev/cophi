import { Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()}{' '}
      <Link href="https://twitter.com/_cophi_" target="_blank">
        cophi
      </Link>
      . All Rights Reserved. Design by{' '}
      <Link href="https://craftz.dog" target="_blank">
        Takuya Matsuyama🐾
      </Link>
    </Box>
  )
}

export default Footer

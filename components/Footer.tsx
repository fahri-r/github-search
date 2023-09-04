import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} fahri-r made with ❤
    </Box>
  )
}

export default Footer
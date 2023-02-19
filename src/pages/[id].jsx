import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { useToast } from '@chakra-ui/react'
  import axios from "axios"
import Head from 'next/head';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  
  export default function SingleMovie({post}) {
    const toast = useToast()
    const HandleAddToWatch=(el)=>{
      let obj={...el,id:Date.now()}
      axios.post(`https://mockserver-rny6.onrender.com/cart`,{...obj}).then((res)=>{
        toast({
          position:"top",
          
          description: "Movie has been added your watchlist",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      }).catch((er)=>{console.log(er)})


    }
    return (
      <Container maxW={'7xl'}>
        <Head>
        <title>{post.data.Title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                post.data.Images[2]
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                { post.data.Title}, {post.data.Year}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                { post.data.Genre} 
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                 {post.data.Plot}
                </Text>
                <Text fontSize={'lg'}>
                 Awards: {post.data.Awards}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                Actors
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>{post.data.Actors}</ListItem>
                  
                  </List>
                  
                </SimpleGrid>
              </Box>
              <Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
               Director
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>{post.data.Director}</ListItem>
                  
                  </List>
                  
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
               Writer
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>{post.data.Writer}</ListItem>
                  
                  </List>
                  
                </SimpleGrid>
              </Box>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Details 
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Language:
                    </Text>{' '}
                    {post.data.Language}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Country:
                    </Text>{' '}
                    {post.data.Country}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Imdb Rating:
                    </Text>{' '}
                    {post.data.imdbRating}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Imdb Votes:
                    </Text>{' '}
                    {post.data.imdbVotes}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Released:
                    </Text>{' '}
                    {post.data.Released}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Rated:
                    </Text>{' '}
                    {post.data.Rated}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Runtime:
                    </Text>{' '}
                    {post.data.Runtime}{' '}
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }} onClick={()=>{

                HandleAddToWatch(post.data)

              }}>
              Add to Watch List
            </Button>
  
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }

export async function getStaticPaths() {
    let res= await axios.get(`https://mockserver-rny6.onrender.com/movies`);
  let data=res.data;
    return {
      paths: data.map((el)=>({ params: { id: el.id.toString() } })),
     
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps(context) {
    let id=context.params.id
    let res= await axios.get(`https://mockserver-rny6.onrender.com/movies/${id}`);
    let data=res.data;
    return {
      // Passed to the page component as props
      props: { post: {data} },
    }
  }
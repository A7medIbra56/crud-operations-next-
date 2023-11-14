"use client"
import React, { useEffect , useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Container,
  Flex
} from "@chakra-ui/react";
import  Axios  from "axios";
export default function Products() {
const [dataProducts , setDataProducts] = useState<ProductsProps[]>([])
  async function gitApi() {
    try {
      const {data} = await Axios.get(`http://localhost:9000/posts`);
      setDataProducts(data)

    } catch (error) {
 
    }
  }
  
  useEffect(() => {
    gitApi();
  }, []);
  
  interface ProductsProps {
    title: string
    thumbnail: any
    id:number
  }


  return (
    <Container maxWidth={`7x1`}>
      <Flex gap={`10px`} flexWrap="wrap">
        {
          dataProducts.map((item:ProductsProps)=>(
          <div key={item.id}>
       <Card 
          maxW={["100%", "100%", "calc(50% - 20px)", "calc(33.33% - 20px)"]}
        >
          <CardBody>
            <Image
              src={`${item.thumbnail}`}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text>
           {item.title}
              </Text>
              <Text color="blue.600" fontSize="2xl">
              {item.id}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
          </div>
          ))
        }
       
      </Flex>
    </Container>
  );
}

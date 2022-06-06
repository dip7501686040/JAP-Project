import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout"
import Router from "next/router";
import { useContext, useEffect, useState } from "react";
import prisma from "../prisma";
import ProductCard from "../src/components/product-card/Product-card.component"
import { productContext } from "../src/contexts/product-provider.context";
import { HomePageProps, Product, ProductContext } from "../src/types/product.type";

function HomePage({products}: HomePageProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [pageProducts, setPageProducts] = useState<Product[]>([]);
  const [nextPage, setNextPage] = useState<number>(1);
  const { searchTerm } = useContext<ProductContext>(productContext);

  useEffect(() => {
   setPageProducts(products)
  }, [products])

  useEffect(() => {
    if (!searchTerm.length) {
      setNextPage(1);
        Router.push({
        pathname: '/',
      })
    }
    // Debounce effect
    const handler = setTimeout(() => {
      if (searchTerm.length) {
        Router.push({
        pathname: '/',
        query: {search: searchTerm}
      })
      }
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm])
  

  const handleLoadMore = async () => {
    Router.push({
      pathname: '/',
      query: {skip: nextPage}
    })
    setNextPage((prevPage) => {
      return prevPage + 1;
    })
  } 

  return (
    <Box
      marginTop='20px'
      display='flex'
      flexDirection='column'
      width='100%'
      justifyContent='center'
      alignItems='center'
    >
      <Flex
        justifyContent='space-evenly'
        flexWrap='wrap'
      >
        {!loading
            ? pageProducts.length > 0
              ? pageProducts.map((product) => {
                  return <ProductCard product={product} key={product.id}  />
                })
              : 'No Data'
            : 'Loading...'}
      </Flex>
      {pageProducts.length > 0 && !searchTerm.length && !loading ? (
        <div>
          <Button
            margin='10px 0 50px 0'
            onClick={handleLoadMore}>
            {loading ? 'Loading...' : 'load more'}
          </Button>
        </div>
      ) : (
        <></>
      )}
    </Box>
  )
}

export default HomePage;

export async function getServerSideProps(context: any) {
  let products = []; 
  if (context.query.search) products = await prisma.products.findMany({
    where: {
      name: {
        contains: context.query.search,
        mode: 'insensitive'
      },
    },
  });
  else products = await prisma.products.findMany({
      skip: context.query.skip ? Number(context.query.skip) * 20 : 0,
      take: 20
    });
  
  return {
    props: {products}
  }
} 

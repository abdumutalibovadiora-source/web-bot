import { Button, Container, Flex, ScrollArea } from "@mantine/core";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function App_Nav() {
  const { data, error, isLoading } = useSWR(
    "https://lesson-bot-node.onrender.com/api/categories",
    fetcher
  );


  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Container size={"xl"} pt={"md"}>
        <ScrollArea
          type="auto"
          w={"100%"}
          overscrollBehavior="contain"
          pb={"md"}
        >
          <Flex gap={"sm"} miw={600}>
            {data.map((item) => {
              return (
                <Link key={item._id} href={`/category/${item._id}`}>
                  <Button variant="light">{item.name}</Button>
                </Link>
              );
            })}
          </Flex>
        </ScrollArea>
      </Container>
    </>
  );
}

export default App_Nav;

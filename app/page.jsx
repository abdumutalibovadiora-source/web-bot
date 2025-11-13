"use client";
import Card_Dash from "@/components/Cards/Dash_Card";
import Card_List from "@/components/Cards/Card_List";
import App_Nav from "@/components/Nav/App_Nav";
import {
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Text,
} from "@mantine/core";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Page() {
  const { data, error, isLoading } = useSWR(
    "https://lesson-bot-node.onrender.com/api/products",
    fetcher
  );

  const DeleteProduct = async () => {
    try {
      let res = await fetch(
        `https://lesson-bot-node.onrender.com/api/products/${deleteItem._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (error) return <div className="mx-auto">failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <App_Nav />
      <Container size={"xl"} py={"md"}>
        <Card_List data={data} />
      </Container>
    </>
  );
}

export default Page;

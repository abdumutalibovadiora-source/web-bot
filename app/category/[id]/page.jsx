"use client";
import Card_List from "@/components/Cards/Card_List";
import Card_Dash from "@/components/Cards/Dash_Card";
import App_Nav from "@/components/Nav/App_Nav";
import { Container } from "@mantine/core";
import { useParams } from "next/navigation";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function Id_Page() {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR(
    `https://lesson-bot-node.onrender.com/api/products/category/${id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <App_Nav />
      <Container>
        <Card_List data={data}/>
      </Container>
    </>
  );
}

export default Id_Page;

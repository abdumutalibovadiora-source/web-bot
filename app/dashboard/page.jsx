"use client";
import Dash_Card from "@/components/Cards/Dash_Card";
import Dash_Nav from "@/components/Nav/Dash_Nav";
import { Container } from "@mantine/core";
import React from "react";
import useSWR from "swr";


const fetcher = (...args) => fetch(...args).then((res) => res.json());
const page = () => {
  const { data, error, isLoading } = useSWR(
    "https://lesson-bot-node.onrender.com/api/products",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <Container>
        <Dash_Nav />
        <Dash_Card data={data} />
      </Container>
    </>
  );
};

export default page;

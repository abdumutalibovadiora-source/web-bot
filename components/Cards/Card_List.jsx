import {
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Text,
} from "@mantine/core";
import Link from "next/link";
import React from "react";

const Card_List = ({ data }) => {
  return (
    <Container my="md">
      <Grid gutter="md" justify="center" align="stretch">
        {data?.map((item) => (
          <Grid.Col
            key={item._id}
            span={{ base: 12, sm: 6, md: 4, lg: 3 }} // ✅ Responsive tarmoqlar
          >
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%", // ✅ Kartaning balandligini to‘liq teng qiladi
              }}
            >
              <Card.Section>
                <Image
                  src={item.image || ""}
                  height={180}
                  alt={item.name || "Product image"}
                  fit="cover"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{item.name}</Text>
              </Group>

              <Text size="sm" c="dimmed">
                {item.price} so'm
              </Text>
              <Text size="xs" mb={"xs"} c="dimmed" lineClamp={2}>
                {item.description}
              </Text>

              {/* ✅ Pastki qism doim pastda tursin */}
              <Group mt="auto">
                <Button color="red" radius="md">
                  Remove
                </Button>
                <Link href="">
                  <Button color="blue" radius="md">
                    Add
                  </Button>
                </Link>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default Card_List;

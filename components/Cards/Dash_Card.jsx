import {
  ActionIcon,
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Image,
  Modal,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";

const Dash_Card = ({ data }) => {
  // 🔹 data ni o'z state sifatida saqlaymiz
  const [cards, setCards] = useState(data || []);
  const [opened, { open, close }] = useDisclosure(false);
  const [deleteItem, setDeleteItem] = useState(null);

  // 🔹 Confirm tugmasi bosilganda ishlaydigan funksiya
  const handleDelete = () => {
    if (deleteItem) {
      setCards((prev) => prev.filter((card) => card._id !== deleteItem._id));
      setDeleteItem(null);
      close(); // Modalni yopamiz
    }
  };

  return (
    <>
      <Grid gutter="md" align="stretch" justify="center">
        {cards?.map((item) => (
          <Grid.Col key={item._id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Card.Section>
                <Image
                  src={item.image || ""}
                  height={180}
                  fit="cover"
                  alt={item.name}
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500} lineClamp={1}>
                  {item.name}
                </Text>
              </Group>

              <Text size="sm" c="dimmed">
                {item.price} so'm
              </Text>
              <Text size="xs" c="dimmed" lineClamp={2}>
                {item.description}
              </Text>

              {/* ✅ Tugmalar pastda turadi */}
              <Flex mt="auto" justify="flex-end" gap="xs">
                <Link href="/dashboard/add" passHref>
                  <ActionIcon
                    color="blue"
                    variant="filled"
                    aria-label="Edit"
                    radius="md"
                  >
                    <IconPencil size={16} />
                  </ActionIcon>
                </Link>

                <ActionIcon
                  color="red"
                  variant="filled"
                  aria-label="Delete"
                  radius="md"
                  onClick={() => {
                    setDeleteItem(item);
                    open();
                  }}
                >
                  <IconTrash size={16} />
                </ActionIcon>
              </Flex>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {/* 🧾 O'chirish modal oynasi */}
      <Modal opened={opened} onClose={close} title="Confirm Deletion" centered>
        <Text size="sm">
          Do you really want to delete{" "}
          <Text span fw={500}>
            {deleteItem?.name}
          </Text>
          ?
        </Text>

        <Group mt="md" grow>
          <Button variant="default" onClick={close}>
            Cancel
          </Button>
          <Button color="red" onClick={handleDelete}>
            Confirm
          </Button>
        </Group>
      </Modal>
    </>
  );
};

export default Dash_Card;

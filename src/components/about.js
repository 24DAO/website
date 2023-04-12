import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from "@mantine/core";
import {
  IconBooks,
  IconHeartHandshake,
  IconArrowsMaximize,
  IconFlame,
  IconVariableMinus,
  IconCoinBitcoin,
} from "@tabler/icons-react";

const aboutGrids = [
  {
    title: "Equality",
    description:
      "Our team consists of four founders who also act as managers, while the remaining 20 members have an equal position within the organization. This ensures that decisions are made democratically and that the interests of all members are taken into account.",
    icon: IconArrowsMaximize,
  },
  {
    title: "Learning",
    description:
      "24DAO aims to bring together NFT and digital art enthusiasts to collaborate, learn and explore their potential. It seeks to increase community interaction and awareness by offering educational resources and events.",
    icon: IconBooks,
  },
  {
    title: "Supporter",
    description:
      "At 24DAO, we are dedicated to promoting a culture of transparency and trust among our members. Our community is open and supportive, and we encourage members to share their ideas and feedback. We believe that collaboration and mutual respect are key to achieving our goals.",
    icon: IconHeartHandshake,
  },
  {
    title: "Potential",
    description:
      "We believe in the potential of NFTs and the Avalanche network, and we are committed to creating a sustainable ecosystem for NFT trading. Our platform allows members to buy and sell NFTs with ease, without the need for intermediaries. Furthermore, we offer a secure storage solution for NFTs, ensuring that members' assets are protected at all times.",
    icon: IconFlame,
  },
  {
    title: "Innovation",
    description:
      "24DAO aims to position itself at the forefront of innovation. With a large volume of investments, 24DAO is an influential player in the rapidly evolving world of NFTs and cryptocurrency. ",
    icon: IconVariableMinus,
  },
  {
    title: "Portfolio",
    description:
      "We have established a real culture of collaboration and knowledge sharing among our DAO members. Each member conducts NFT trading in their own wallet created for 24DAO and shares their content with other members. This not only increases our speed of decision-making, but also ensures that we never miss out on any NFT opportunities.",
    icon: IconCoinBitcoin,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export function AboutCards() {
  const { classes, theme } = useStyles();
  const features = aboutGrids.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl" mt={60} id="about">
      <Group position="center">
        <Badge variant="filled" size="lg">
          Best DAO ever
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Growing in the NFT world, and we&apos;re here to take every step
        together.
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        24DAO is a community-driven organization consisting of 24 members with a
        unique governance structure. Our aim is to provide a secure and
        decentralized platform for NFT trading on the Avalanche network.
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}

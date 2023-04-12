import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Badge,
  useMantineTheme,
  rem,
  Container,
} from "@mantine/core";
import slide1 from "../assets/images/slides/slide1.png";
import slide2 from "../assets/images/slides/slide2.png";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },
  basicText: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

function SlideCard({ image, title, category }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          <Badge>{category}</Badge>
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

const data = [
  {
    image: slide1.src,
    title: "Ecosystem Projects",
    category: "NFT",
  },
  {
    image: slide2.src,
    title: "Our NFTs",
    category: "NFT",
  },
];

export function SlidesCard() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <SlideCard {...item} />
    </Carousel.Slide>
  ));
  const { classes } = useStyles();

  return (
    <Container size="lg">
      <Title>Portfolio</Title>
      <Carousel
        slideSize="50%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(2) }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
      <Text className={classes.basicText} size="sm" color="dimmed" mt="md">
        The portfolio of 24DAO does not just consist of fixed NFT projects. We
        continuously add new projects to this portfolio based on the proposals
        and decisions of our DAO members. While some NFTs in our portfolio are
        held for long-term investment purposes, others are used for short-term
        trading. However, we develop specific strategies for each project to
        determine its value. These strategies are designed to ensure that each
        NFT is evaluated to the best of our abilities. 24DAO regularly shares
        its NFT portfolio with our followers through social media channels,
        aiming to help them improve their knowledge and expertise in this field.
      </Text>
    </Container>
  );
}

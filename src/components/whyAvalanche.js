import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "../assets/images/avaissance.png";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export function WhyAvalanche() {
  const { classes } = useStyles();
  return (
    <div>
      <Container my="30">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Why Avalanche?</Title>
            <Text color="dimmed" mt="md">
              Avalanche offers a fast, secure, customizable, and interoperable
              platform for building decentralized applications and launching new
              blockchain networks. With its low transaction fees, high
              throughput, and strong security, Avalanche is a promising option
              for developers and businesses looking to build blockchain-based
              solutions.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Fast</b> – Fast transaction processing times
              </List.Item>
              <List.Item>
                <b>Incentives</b> – Reward structure incentives participation
              </List.Item>
              <List.Item>
                <b>Support</b> – Capable of supporting many blockchain-based
                projects
              </List.Item>
            </List>
          </div>
          <Image radius="xl" src={image.src} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}

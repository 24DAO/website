import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  rem,
  Image,
  Anchor,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandTwitter, IconMail } from "@tabler/icons-react";
import Link from "next/link";

const links = [{ label: "Home", link: "/" }];

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: rem(56),

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: rem(260),

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export function TopHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = links?.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => {
        event.preventDefault();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={56}>
      <Container className={classes.inner}>
        {/* <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            className={classes.burger}
        />
          <Group className={classes.links} spacing={5}>
        {items}
          </Group> */}
        <Link href="/">
          <Image height={28} fit="contain" src="/logo.png" />
        </Link>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Anchor href="https://twitter.com/0x24Dao" target="_blank">
            <ActionIcon size="lg">
              <IconBrandTwitter size="1.1rem" stroke={1.5} />
            </ActionIcon>
          </Anchor>
          <Anchor href="mailto:info@twentyfourdao.com" target="_blank">
            <ActionIcon size="lg">
              <IconMail size="1.1rem" stroke={1.5} />
            </ActionIcon>
          </Anchor>
        </Group>
      </Container>
    </Header>
  );
}

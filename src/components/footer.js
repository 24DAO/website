import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  rem,
  Anchor,
  Image,
} from "@mantine/core";
import { IconBrandTwitter, IconMail } from "@tabler/icons-react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Link href="/">
          <Image height={28} fit="contain" src="/logo.png" />
        </Link>
        <Group spacing={0} className={classes.links} position="right" noWrap>
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
    </div>
  );
}

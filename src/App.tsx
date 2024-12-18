import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  AlertDialog,
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HoverCard,
  Link,
  Text,
} from "@radix-ui/themes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :)</Text>
          <Button>Let's go</Button>
        </Flex>
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button color="red">Revoke access</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content maxWidth="450px">
            <AlertDialog.Title>Revoke access</AlertDialog.Title>
            <AlertDialog.Description size="2">
              Are you sure? This application will no longer be accessible and
              any existing sessions will be expired.
            </AlertDialog.Description>

            <Flex gap="3" mt="4" justify="end">
              <AlertDialog.Cancel>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button variant="solid" color="red">
                  Revoke access
                </Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
        <Text>
          Follow{" "}
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link
                href="https://twitter.com/radix_ui"
                target="_blank"
              >
                @radix_ui
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content maxWidth="300px">
              <Flex gap="4">
                <Avatar
                  size="3"
                  fallback="R"
                  radius="full"
                  src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
                />
                <Box>
                  <Heading size="3" as="h3">
                    Radix
                  </Heading>
                  <Text as="div" size="2" color="gray" mb="2">
                    @radix_ui
                  </Text>
                  <Text as="div" size="2">
                    React components, icons, and colors for building
                    high-quality, accessible UI.
                  </Text>
                </Box>
              </Flex>
            </HoverCard.Content>
          </HoverCard.Root>{" "}
          for updates.
        </Text>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

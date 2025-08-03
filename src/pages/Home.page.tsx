import { Center, Flex, Tabs, Title } from '@mantine/core';
import { PairsPage } from './Pairs.page';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { MatchUpsPage } from './MatchUps.page';

export function HomePage() {
  return (
    <Flex direction='column' gap='md' p='md'>
      <ColorSchemeToggle />
      <Center>
        <Title order={1}>King of the Grass Scorekeeper</Title>
      </Center>
      <Tabs defaultValue="pairs">
        <Tabs.List>
          <Tabs.Tab value="pairs">Pairs</Tabs.Tab>
          <Tabs.Tab value="matchUps">Match-Ups</Tabs.Tab>
          <Tabs.Tab value="standings">Standings</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="pairs">
          <PairsPage />
        </Tabs.Panel>
        <Tabs.Panel value="matchUps">
          <MatchUpsPage />
        </Tabs.Panel>
        <Tabs.Panel value="standings">
          Standings Content
        </Tabs.Panel>
      </Tabs>
    </Flex>
  );
}

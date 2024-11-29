import { Grid } from "@/components/grid";
import { HorizontalRule } from "@/components/horizontal-rule";
import { Section } from "@/components/section";
import { Text } from "@/components/text";
import { Tile } from "@/components/tile";
import { FC } from "react";
import { PiFileCloudDuotone } from "react-icons/pi";
import { PiBooksDuotone } from "react-icons/pi";
import { FaChevronLeft } from "react-icons/fa";
const Page: FC = () => {
  return (
    <div>
      <Section paddingTop="2xl">
        <Text as="h2" size="xl" weight="bold" marginBottom="md">Request Forms</Text>
        <Grid>
          <Tile href="www.google.com" icon={<PiFileCloudDuotone />}> Change request form</Tile>
          <Tile href="www.google.com" icon={<PiFileCloudDuotone />}> Click link</Tile>
          <Tile href="www.google.com" icon={<PiFileCloudDuotone />}> Click link</Tile>
          <Tile href="www.google.com" icon={<PiFileCloudDuotone />}> Click link</Tile>
          <Tile href="www.google.com" icon={<PiFileCloudDuotone />}> Click link</Tile>
          <Tile href="www.google.com" icon={<PiFileCloudDuotone />}> Click link</Tile>
        </Grid>
      </Section>
      <Section paddingTop="2xl" paddingBottom="2xl">
        <HorizontalRule />
      </Section>
      <Section>
        <Text as="h2" size="xl" weight="bold" marginBottom="md">Playbooks</Text>
        <Grid>
          <Tile href="www.google.com" icon={<PiBooksDuotone />}> Click link</Tile>
          <Tile href="www.google.com" icon={<PiBooksDuotone />}> Click link</Tile>
          <Tile href="www.google.com" icon={<PiBooksDuotone />}> Click link</Tile>
          <Tile href="www.google.com" icon={<PiBooksDuotone />}> Click link</Tile>
          <Tile href="www.google.com" icon={<PiBooksDuotone />}> Click link</Tile>
          <Tile href="www.google.com" icon={<PiBooksDuotone />}> Click link</Tile>
        </Grid>
      </Section>
      <Section paddingTop="2xl" paddingBottom="2xl">
        <HorizontalRule />
      </Section>
      <Section>
        <Text as="h2" size="xl" weight="bold" marginBottom="md">FAQs?</Text>
        <Grid>
          <Tile href="www.google.com" icon={<FaChevronLeft />}> Click link</Tile>
          <Tile href="www.google.com" icon={<FaChevronLeft />}> Click link</Tile>
          <Tile href="www.google.com" icon={<FaChevronLeft />}> Click link</Tile>
        </Grid>
      </Section>
    </div>
  );
}


export default Page;
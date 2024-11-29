import { Grid } from '@/components/grid';
import { HorizontalRule } from '@/components/horizontal-rule';
import { Section } from '@/components/section';
import { Text } from '@/components/text';
import { Tile } from '@/components/tile';
import { FC } from 'react';
import { PiFileCloudDuotone } from 'react-icons/pi';
import { PiBooksDuotone } from 'react-icons/pi';
import { Accordion } from '@/components/accordion';
const Page: FC = () => {
  return (
    <div>
      <Section paddingTop="2xl">
        <Text as="h1" size="3xl" weight="bold" color='heading'>
          Your CoE Hub
        </Text>
      </Section>
      <Section paddingTop='md'>
        <Text as='h2' size='xl' weight='bold' marginBottom='md'>
          Request Forms
        </Text>
        <Grid>
          <Tile href='www.google.com' icon={<PiFileCloudDuotone />}>
            Change request form
          </Tile>
          <Tile href='www.google.com' icon={<PiFileCloudDuotone />}>
            Click link
          </Tile>
          <Tile href='www.google.com' icon={<PiFileCloudDuotone />}>
            Click link
          </Tile>
          <Tile href='www.google.com' icon={<PiFileCloudDuotone />}>
            Click link
          </Tile>
          <Tile href='www.google.com' icon={<PiFileCloudDuotone />}>
            Click link
          </Tile>
          <Tile href='www.google.com' icon={<PiFileCloudDuotone />}>
            Click link
          </Tile>
        </Grid>
      </Section>
      <Section paddingTop='2xl' paddingBottom='2xl'>
        <HorizontalRule />
      </Section>
      <Section>
        <Text as='h2' size='xl' weight='bold' marginBottom='md'>
          Playbooks
        </Text>
        <Grid>
          <Tile href='www.google.com' icon={<PiBooksDuotone />}>
            Click link
          </Tile>
          <Tile href='www.google.com' icon={<PiBooksDuotone />}>
            Click link
          </Tile>
          <Tile href='www.google.com' icon={<PiBooksDuotone />}>
            Click link
          </Tile>
          <Tile href='www.google.com' icon={<PiBooksDuotone />}>
            Click link
          </Tile>
          <Tile href='www.google.com' icon={<PiBooksDuotone />}>
            Click link
          </Tile>
          <Tile href='www.google.com' icon={<PiBooksDuotone />}>
            Click link
          </Tile>
        </Grid>
      </Section>
      <Section paddingTop='2xl' paddingBottom='2xl'>
        <HorizontalRule />
      </Section>
      <Section paddingBottom='2xl'>
        <Text as='h2' size='xl' weight='bold' marginBottom='md'>
          FAQs
        </Text>
        <Accordion title='Accordion'>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet egestas arcu, ut dapibus quam. Ut et iaculis nisl, eget porta
            eros. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Ut ac tincidunt enim. Donec risus
            odio, porttitor in laoreet ut, gravida nec eros. Duis dictum lacus
            non nisl aliquam, tempor placerat nisi rhoncus. Proin mi mauris,
            vulputate ut tincidunt facilisis, tempor at ex. Praesent at elit
            eget leo viverra pellentesque at tincidunt mi. Quisque vitae ornare
            erat. Duis dictum finibus dictum. Suspendisse condimentum massa
            enim, suscipit placerat quam rhoncus sit amet.
          </Text>
        </Accordion>
        <Accordion title='Accordion'>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet egestas arcu, ut dapibus quam. Ut et iaculis nisl, eget porta
            eros. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Ut ac tincidunt enim. Donec risus
            odio, porttitor in laoreet ut, gravida nec eros. Duis dictum lacus
            non nisl aliquam, tempor placerat nisi rhoncus. Proin mi mauris,
            vulputate ut tincidunt facilisis, tempor at ex. Praesent at elit
            eget leo viverra pellentesque at tincidunt mi. Quisque vitae ornare
            erat. Duis dictum finibus dictum. Suspendisse condimentum massa
            enim, suscipit placerat quam rhoncus sit amet.
          </Text>
        </Accordion>
        <Accordion title='Accordion'>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet egestas arcu, ut dapibus quam. Ut et iaculis nisl, eget porta
            eros. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Ut ac tincidunt enim. Donec risus
            odio, porttitor in laoreet ut, gravida nec eros. Duis dictum lacus
            non nisl aliquam, tempor placerat nisi rhoncus. Proin mi mauris,
            vulputate ut tincidunt facilisis, tempor at ex. Praesent at elit
            eget leo viverra pellentesque at tincidunt mi. Quisque vitae ornare
            erat. Duis dictum finibus dictum. Suspendisse condimentum massa
            enim, suscipit placerat quam rhoncus sit amet.
          </Text>
        </Accordion>
        <Accordion title='Accordion'>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet egestas arcu, ut dapibus quam. Ut et iaculis nisl, eget porta
            eros. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Ut ac tincidunt enim. Donec risus
            odio, porttitor in laoreet ut, gravida nec eros. Duis dictum lacus
            non nisl aliquam, tempor placerat nisi rhoncus. Proin mi mauris,
            vulputate ut tincidunt facilisis, tempor at ex. Praesent at elit
            eget leo viverra pellentesque at tincidunt mi. Quisque vitae ornare
            erat. Duis dictum finibus dictum. Suspendisse condimentum massa
            enim, suscipit placerat quam rhoncus sit amet.
          </Text>
        </Accordion>
        <Accordion title='Accordion'>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet egestas arcu, ut dapibus quam. Ut et iaculis nisl, eget porta
            eros. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Ut ac tincidunt enim. Donec risus
            odio, porttitor in laoreet ut, gravida nec eros. Duis dictum lacus
            non nisl aliquam, tempor placerat nisi rhoncus. Proin mi mauris,
            vulputate ut tincidunt facilisis, tempor at ex. Praesent at elit
            eget leo viverra pellentesque at tincidunt mi. Quisque vitae ornare
            erat. Duis dictum finibus dictum. Suspendisse condimentum massa
            enim, suscipit placerat quam rhoncus sit amet.
          </Text>
        </Accordion>
      </Section>
    </div>
  );
};

export default Page;

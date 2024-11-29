import { format } from 'date-fns';
import { HorizontalRule } from '../horizontal-rule';
import { Section } from '../section';
import { Text } from '../text';
import styles from './footer.module.css';

export const Footer = () => {
  const currentYear = format(new Date(), 'yyyy');
  return (
    <Section as='footer' layout='wide' className={styles['footer']}>
      <HorizontalRule />
      <Text size='sm' align='start'>
        Copyright &copy; {currentYear}. Sibelco SCR
      </Text>
    </Section>
  );
};

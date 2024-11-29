import Link from 'next/link';
import { FC, ReactNode } from 'react';
import styles from './tile.module.css';
import { Text } from '@/components/text';

type TileProps = {
  children: ReactNode;
  icon: ReactNode;
  href: string;
};

export const Tile: FC<TileProps> = ({ children, icon, href }) => (
  <Link href={href} className={styles['tile']}>
    <span className={styles['tile__icon']}>{icon}</span>
    <Text
      className={styles['tile__text']}
      as='span'
      weight='bold'
      align='center'
      size='sm'
    >
      {children}
    </Text>
  </Link>
);

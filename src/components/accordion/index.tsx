'use client';
import {
  ReactNode,
  FC,
  useState,
  MouseEventHandler,
  useCallback,
  useId,
} from 'react';
import styles from './accordion.module.css';
import clsx from 'clsx';
import { FaChevronLeft } from 'react-icons/fa';
import { Text } from '../text';

type AccordionProps = {
  title: string;
  children: ReactNode;
  defaultExpanded?: boolean;
};

export const Accordion: FC<AccordionProps> = ({
  children,
  title,
  defaultExpanded = false,
}) => {
  const [expanded, setExpanded] = useState<boolean>(defaultExpanded);
  const buttonId = useId();
  const contentId = useId();
  const toggle: MouseEventHandler = useCallback(() => {
    setExpanded((state) => !state);
  }, []);
  return (
    <div
      className={clsx({
        [styles['accordion']]: true,
        [styles['accordion--expanded']]: expanded,
      })}
    >
      <button
        onClick={toggle}
        aria-expanded={expanded}
        type='button'
        id={buttonId}
        aria-controls={contentId}
        className={styles['accordion__trigger']}
      >
        <Text as='span' weight='bold' className={styles['accordion__title']}>
          {title}
        </Text>
        <span className={styles['accordion__icon']}>
          <FaChevronLeft />
        </span>
      </button>
      <div
        id={contentId}
        role='region'
        aria-labelledby={buttonId}
        className={styles['accordion__content']}
      >
        <div className={styles['accordion__body']}>{children}</div>
      </div>
    </div>
  );
};

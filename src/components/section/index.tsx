import { FC, ReactNode } from 'react';
import styles from './section.module.css';
import clsx from 'clsx';

type SectionProps = {
  children: ReactNode;
  layout?: 'wide' | 'standard';
  className?: string;
  as?: 'div' | 'footer' | 'section';
  paddingTop?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  paddingBottom?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};

export const Section: FC<SectionProps> = ({
  children,
  layout,
  className,
  as = 'div',
  paddingTop,
  paddingBottom,
}) => {
  const Element = as;
  return (
    <div className={styles['section']}>
      <div className={styles['section__grid']}>
        <Element
          className={clsx(
            {
              [styles['section__container']]: true,
              [styles['section__container--wide']]: layout === 'wide',
              [styles['section--padding-top-xs']]: paddingTop === 'xs',
              [styles['section--padding-top-sm']]: paddingTop === 'sm',
              [styles['section--padding-top-md']]: paddingTop === 'md',
              [styles['section--padding-top-lg']]: paddingTop === 'lg',
              [styles['section--padding-top-xl']]: paddingTop === 'xl',
              [styles['section--padding-top-2xl']]: paddingTop === '2xl',
              [styles['section--padding-bottom-xs']]: paddingBottom === 'xs',
              [styles['section--padding-bottom-sm']]: paddingBottom === 'sm',
              [styles['section--padding-bottom-md']]: paddingBottom === 'md',
              [styles['section--padding-bottom-lg']]: paddingBottom === 'lg',
              [styles['section--padding-bottom-xl']]: paddingBottom === 'xl',
              [styles['section--padding-bottom-2xl']]: paddingBottom === '2xl',
            },
            className,
          )}
        >
          {children}
        </Element>
      </div>
    </div>
  );
};

import { FC, ReactNode } from 'react';
import styles from "./section.module.css"
import clsx from 'clsx';

type SectionProps = {
    children: ReactNode;
    layout?: 'wide' | 'standard';
    className?: string;
};

export const Section: FC<SectionProps> = ({ children, layout, className }) => (
    <div className={styles["section"]}>
        <div className={styles["section__grid"]}>
            <div className={clsx({
                [styles["section__container"]]: true,
                [styles["section__container--wide"]]: layout === "wide"
            }, className)}>{children}</div>

        </div>
    </div>
);

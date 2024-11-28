import { FC, ReactNode } from 'react';
import styles from "./section.module.css"
import clsx from 'clsx';

type SectionProps = {
    children: ReactNode;
    layout?: 'wide' | 'standard';
    className?: string;
    as?: "div" | "footer" | "section"
};

export const Section: FC<SectionProps> = ({ children, layout, className, as = "div" }) => {
    const Element = as;
    return (
        <div className={styles["section"]}>
            <div className={styles["section__grid"]}>
                <Element className={clsx({
                    [styles["section__container"]]: true,
                    [styles["section__container--wide"]]: layout === "wide"
                }, className)}>{children}</Element>

            </div>
        </div>
    )
};

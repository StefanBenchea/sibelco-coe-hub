import { FC, PropsWithChildren } from "react"
import styles from "./grid.module.css"

export const Grid: FC<PropsWithChildren> = ({ children }) => (
    <div className={styles["grid"]}>
        {children}
    </div>
)
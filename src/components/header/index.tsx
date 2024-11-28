import { Section } from "../section"
import { Text } from "../text"
import styles from "./header.module.css"
import logo from "./logo_blue.svg"
import Image from "next/image"

export const Header = () => (
    <header className={styles['header']}>
        <Section layout="wide" className={styles["header__container"]}>
            <div className={styles['header__logo']}>
                <Image alt="sibelco logo" src={logo} />
            </div>
            <div className={styles['header__title']}>
                <Text as='h1' align="end" color="heading" size="2xl" weight="bold" alignMd="center">
                    CoE HR Hub
                </Text>
            </div>
        </Section>
    </header>
)

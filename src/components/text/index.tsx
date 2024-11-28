import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from "./text.module.css"


type TextProps = {
    as?: "h1" | "h2" | "h3" | "h4" | "p"
    children: ReactNode
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
    transform?: "uppercase"
    weight?: "regular" | "bold"
    color?: "default" | "heading"
    align?: "start" | "center" | "end"
    alignMd?: "start" | "center" | "end"
}

export const Text: FC<TextProps> = ({ children, size, transform, weight, color, align, alignMd, as = "p" }) => {
    const Element = as
    return <Element className={clsx({
        [styles["text"]]: true,
        [styles['text--color-heading']]: color === 'heading',
        [styles['text--size-3xl']]: size === '3xl',
        [styles['text--size-2xl']]: size === '2xl',
        [styles['text--size-xl']]: size === 'xl',
        [styles['text--size-lg']]: size === 'lg',
        [styles['text--size-sm']]: size === 'sm',
        [styles['text--transform-uppercase']]: transform === 'uppercase',
        [styles['text--weight-bold']]: weight === 'bold',
        [styles['text--align-start']]: align === 'start',
        [styles['text--align-center']]: align === 'center',
        [styles['text--align-end']]: align === 'end',
        [styles['text--align-md-start']]: alignMd === 'start',
        [styles['text--align-md-center']]: alignMd === 'center',
        [styles['text--align-md-end']]: alignMd === 'end',

    })}>
        {children}
    </Element>
}
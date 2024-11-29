import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from "./text.module.css"


type TextProps = {
    as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
    children: ReactNode
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
    transform?: "uppercase"
    weight?: "regular" | "bold"
    color?: "default" | "heading" | "inherit"
    align?: "start" | "center" | "end"
    alignMd?: "start" | "center" | "end"
    marginBottom?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
    className?: string
}

export const Text: FC<TextProps> = ({ children, size, transform, weight, color, align, alignMd, as = "p", marginBottom, className }) => {
    const Element = as
    return <Element className={clsx({
        [styles["text"]]: true,
        [styles['text--color-heading']]: color === 'heading',
        [styles['text--color-inherit']]: color === 'inherit',
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
        [styles['text--margin-bottom-xs']]: marginBottom === 'xs',
        [styles['text--margin-bottom-sm']]: marginBottom === 'sm',
        [styles['text--margin-bottom-md']]: marginBottom === 'md',
        [styles['text--margin-bottom-lg']]: marginBottom === 'lg',
        [styles['text--margin-bottom-xl']]: marginBottom === 'xl',
        [styles['text--margin-bottom-2xl']]: marginBottom === '2xl',
    }, className)}>
        {children}
    </Element>
}
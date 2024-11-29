import { Children, ReactNode } from "react"
import { Text } from "@/components/text"

type AccordionProps = {
    children: ReactNode;
    icon: ReactNode;
}

export const Accordion: FC<AccordionProps> = ({ children, icon }) => (
    <span>
        {icon}
    </span>
</Text >
)
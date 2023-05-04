import { useState } from 'react'
import { Button, Text } from "@chakra-ui/react"

interface Props {
    children: string;
}

const expandableText = ({ children }: Props) => {
    const [expanded, setExpanded] = useState(false)
    const limit = 300;

    if (!children) return null;

    if (children.length <= limit)
        return <Text>{children}</Text>

    const summary = expanded ? children : children.substring(0, limit) + '...'

    return (
        <>
            <Text>{summary}<Button size='xs' fontWeight='bold' marginLeft={1} colorScheme='yellow' onClick={() => setExpanded(!expanded)}>{expanded ? "Show less" : "Read more"}</Button></Text>

        </>
    )
}

export default expandableText
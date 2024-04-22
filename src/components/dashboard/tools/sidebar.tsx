import { Box, Collapse, Typography } from "@mui/material"
import React from "react";


const Sidebar = () => {

    const data = [
        { name: 'Overview', collapse: ['hidden when collapsed1', 'hidden when collapsed2'] },
        { name: 'Overview2', collapse: ['hidden when collapsed1', 'hidden when collapsed2'] }
    ]

    const [open, setOpen] = React.useState(Array(data.length).fill(false));

    const onClick = (index: any) => {
        const openState = [...open].fill(false)
        openState[index] = !openState[index]
        setOpen(openState)

    }


    return (
        <>
            {data.map((value, index) => (
                <Box key={index}>
                    <Typography variant="overline" onClick={() => { onClick(index) }}>{value.name}</Typography>
                    {value.collapse.map((value) => (
                        <Collapse in={open[index]}>
                            <p>{value}</p>
                        </Collapse>
                    ))}
                </Box>
            ))}
        </>
    )
}
export default Sidebar
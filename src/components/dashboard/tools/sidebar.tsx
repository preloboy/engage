import { Box, Button, Collapse, CssBaseline, Icon, Typography } from "@mui/material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import BlockIcon from '@mui/icons-material/Block';
import React from "react";


const Sidebar = () => {

    type DataType = {
        name: string;
        collapse?: DataType[];
        logo?: string;
    };

    const data: DataType[] = [
        {
            name: 'Overview',
            collapse: [
                {
                    name: 'Test',
                    logo: 'home',
                    collapse: [
                        { name: 'Check' },
                    ]
                },
                { name: 'Analytics' }
            ]
        },
        {
            name: 'Overview2',
            collapse: [
                {
                    name: 'Home',
                    logo: 'home',
                    collapse: [
                        { name: 'Profile' },
                        { name: 'List' }
                    ]
                },
                { name: 'Analytics' }
            ]
        },
        {
            name: 'Management',
            collapse: [
                {
                    name: 'User',
                    logo: 'manage_accounts',
                    collapse: [
                        { name: 'Profile' },
                        { name: 'List' }
                    ]
                },
                {
                    name: 'Product',
                    collapse: [
                        { name: 'Item' },
                        { name: 'List' }
                    ]
                },
                {
                    name: 'Product2',
                    collapse: [
                        { name: 'Item' },
                        { name: 'List' }
                    ]
                }
            ]
        }
    ]

    let index2 = 0

    const dataIndex1 = [true, ...Array(data.length-1).fill(false)]
    const dataIndex2 = Array(data.flatMap((section) => section.collapse?.map((item) => item.name)).length).fill(false)

    const [open, setOpen] = React.useState(dataIndex1);
    const [openChild, setOpenChild] = React.useState(dataIndex2);

    const onClick = (index1: any) => {
        const openState = [...open]
        openState[index1] = !openState[index1]
        setOpen(openState)
    };
    const onClickChild = (index2: any) => {
        const openStateChild = [...openChild]
        openStateChild[index2] = !openStateChild[index2]
        setOpenChild(openStateChild)
    };

    return (
        <><CssBaseline />
            <Box component='div' maxWidth='xl' paddingY={2}>
                <Box className="box" >
                    {data.flatMap((section, index1) => (
                        <Box key={index1} textAlign="left" paddingY={1} >
                            <Button variant="contained" sx={{ position: "sticky", top: 0, zIndex: 100 }} component='button' fullWidth onClick={() => { onClick(index1) }}>
                                <Typography sx={{ textAlign: 'left', width: '100%' }} variant="overline" >{section.name}</Typography>
                            </Button>
                            <Collapse in={open[index1]}>
                                {section.collapse?.flatMap((item) => {
                                    const indexN = index2.toString();
                                    index2++
                                    return (
                                        <Box key={indexN} >
                                            <Button variant="text" component='button' fullWidth onClick={() => { onClickChild(indexN) }}>
                                                <Box display={'flex'} alignItems={'center'} gap={2} marginY={1} sx={{ width: '100%', textAlign: 'left' }}>
                                                    {item.logo ? <Icon sx={{ fontSize: 22 }} className="material-symbols-outlined">{item.logo}</Icon> : <BlockIcon fontSize="small" />}
                                                    <Typography sx={{ textAlign: 'left', width: '100%' }} variant="subtitle2">{item.name}</Typography>
                                                </Box>
                                            </Button>
                                            <Collapse in={openChild[index2 - 1]}>
                                                {item.collapse?.map((child, index) => (
                                                    <Button key={index} variant="text" component='button' fullWidth >
                                                        <Box display={'flex'} alignItems={'center'} gap={2} marginY={0.8} sx={{ width: '100%', textAlign: 'left' }}>
                                                            {child.logo ? <Icon sx={{ fontSize: 22 }} className="material-symbols-outlined">{child.logo}</Icon> : <ArrowRightIcon fontSize="small" />}
                                                            <Typography variant="body2" onClick={() => { }}>{child.name}</Typography>
                                                        </Box>
                                                    </Button>
                                                ))}
                                            </Collapse>
                                        </Box>
                                    )
                                }
                                )}
                            </Collapse>
                        </Box>
                    ))}
                </Box>
            </Box>

        </>
    )
}
export default Sidebar
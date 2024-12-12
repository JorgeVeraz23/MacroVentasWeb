import { Typography,Box, CircularProgress } from "@mui/material"

export function buildText(){
    return(
        <Typography
            component="label"
            variant='caption'
            fontWeight='bold'
            textTransform='uppercase'
            color='white'
        >
            Guardar
        </Typography>
    )
}

export function buildLoading(){
    return (
        <Box display='flex' justifyContent='center' alignItems='center'>
            <CircularProgress size={20} style={{color: 'white'}} />
        </Box>
    )
}
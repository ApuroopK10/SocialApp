import { AppBar, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import { MenuOpen } from "@mui/icons-material"

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const NavBar = () => {
  return (
    <AppBar position='sticky'><StyledToolBar><MenuOpen sx={{display: {
      xs: "block", sm: "none"
    }}}/><Typography sx={{display: {
      xs: "none", sm: "block"
    }}}>SOCIAL</Typography></StyledToolBar></AppBar>
  )
}

export default NavBar
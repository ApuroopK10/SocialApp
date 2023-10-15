import { Box } from '@mui/material'
import React from 'react'

const SideBar = () => {
  return (
    <Box sx={{
      backgroundColor: "skyblue",
      display: {
        xs: "none", sm: "block"
      }
    }} flex={1} p={2}>SideBar</Box>
  )
}

export default SideBar
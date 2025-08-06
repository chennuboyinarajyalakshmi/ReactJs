import React from 'react'
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'

export default function TodoDetails({ todoDetails, openDialoge, setOpenDialoge, settodoDetails }) {
  return (
    <Dialog
      onClose={() => {
        settodoDetails(null)
        setOpenDialoge(false)
      }}
      open={openDialoge}
    >
      <DialogTitle>
        {todoDetails?.todo}
      </DialogTitle>
      <DialogActions>
        <Button
          onClick={() => {
            settodoDetails(null)
            setOpenDialoge(false)
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

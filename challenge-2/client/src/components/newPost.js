import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react'
import Modal from './modal'

const NewPost = ({ getAllCurrency }) => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    getAllCurrency();
  }

  return (
    <div>
      <div className="fab" onClick={handleOpen}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </div>
      { open && <Modal open={open} handleClose={handleClose} />}
    </div>
  )
}

export default NewPost;
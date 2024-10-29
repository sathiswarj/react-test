import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material';
import React from 'react';

const TodoDetails = ({ todoDetails, openDialog, handleClose }) => {
    return (
        <>
            <Dialog open={openDialog} onClose={handleClose}>
                {todoDetails? (
                    <DialogTitle key={todoDetails?.id}>{todoDetails?.todo}</DialogTitle>
                ) : (
                    <DialogTitle>No Todo Details</DialogTitle>
                )}
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default TodoDetails;

 
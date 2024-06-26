import {
  Button,
  Dialog, DialogActions, DialogContent, DialogBody, DialogSurface, DialogTitle, DialogTrigger
} from "@fluentui/react-components";

export interface IDialogDeleteConfirmationProps {
  isOpen: boolean;
  onConfirm?: (confirmed: Boolean) => void;
}

export const DialogDeleteConfirmation = (props: IDialogDeleteConfirmationProps) => {
  return (
    <Dialog open={props.isOpen} modalType='modal'>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Delete Item</DialogTitle>

          <DialogContent>
            <p>Are you sure you want to delete this item?</p>
          </DialogContent>

          <DialogActions>
            <DialogTrigger>
              <Button
                appearance='secondary'
                onClick={() => { if (props.onConfirm) { props.onConfirm(false); } }}>Cancel</Button>
            </DialogTrigger>
            <Button
              appearance='primary'
              onClick={() => { if (props.onConfirm) { props.onConfirm(true); } }}>Delete</Button>
          </DialogActions>

        </DialogBody>
      </DialogSurface>
    </Dialog>
  )
}

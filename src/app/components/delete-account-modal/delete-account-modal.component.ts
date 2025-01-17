import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-account-modal',
  templateUrl: './delete-account-modal.component.html',
  styleUrls: ['./delete-account-modal.component.scss'],
})
export class DeleteAccountModalComponent {
  @Output() confirmAction = new EventEmitter<void>();
  @Output() cancelAction = new EventEmitter<void>();

  onConfirm(): void {
    this.confirmAction.emit();
  }

  onCancel(): void {
    this.cancelAction.emit();
  }
}

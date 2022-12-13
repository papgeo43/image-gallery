import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private _snackBar: MatSnackBar) {}

  imageIsAlreadyInFavoritesNotification() {
    this._snackBar.open('Image is already saved', 'Close', {
      duration: 1000,
      panelClass: 'red-snackbar',
      verticalPosition: 'top',
    });
  }

  addedToFavoritesNotification() {
    this._snackBar.open('Saved to favorites', 'Close', {
      panelClass: 'green-snackbar',
      duration: 1000,
      verticalPosition: 'top',
    });
  }

  removeFromFavoritesNotification() {
    this._snackBar.open('Removed successfully', 'Close', {
      panelClass: 'green-snackbar',
      duration: 1000,
      verticalPosition: 'top',
    });
  }
}

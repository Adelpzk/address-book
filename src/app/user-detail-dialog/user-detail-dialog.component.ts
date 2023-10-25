import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { FavoritesService } from '../favourite.service';

@Component({
  selector: 'app-user-detail-dialog',
  templateUrl: './user-detail-dialog.component.html',
  styleUrls: ['./user-detail-dialog.component.css'],
})
/* Component in charge of displaying user data */
export class UserDetailDialogComponent {
  favorites: any[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  /* postion of the snackbar */
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserDetailDialogComponent>,
    private _snackBar: MatSnackBar,
    private favoritesService: FavoritesService
  ) {}

  isStarFilled = false;

  /* method to show the snack bar upon addition of user to favorites */
  openSnackBarAdd() {
    this._snackBar.open('Added to Favouries 💫💫!!', 'close', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['transparent-snackbar'],
    });
  }
  /* method to show the snack bar upon deletion of user to favorites */
  openSnackBarRemove() {
    this._snackBar.open('Removed from Favouries 👋🏻👋🏻!!', 'close', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['transparent-snackbar'],
    });
  }

  /* method that saves user. removes them from favorites and shows snack bar
  upon clicking the star button */
  toggleStar(name: string) {
    if (!this.data.starState) {
      this.data.starState = !this.data.starState;
      this.openSnackBarAdd();
      this.favoritesService.addItem(this.favorites, this.data);
    } else {
      this.data.starState = !this.data.starState;
      this.openSnackBarRemove();
      this.favoritesService.removeItem(name, this.favorites);
    }
  }
}

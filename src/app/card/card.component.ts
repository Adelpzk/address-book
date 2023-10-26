import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailDialogComponent } from '../user-detail-dialog/user-detail-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  /* Expected data */
  @Input() firstname = '';
  @Input() lastname = '';
  @Input() age = '';
  @Input() cell = '';
  @Input() dob = '';
  @Input() email = '';
  @Input() nat = '';
  @Input() country = '';
  @Input() city = '';
  @Input() image_large = '';
  @Input() image_thumbnail = '';
  @Input() lat = '';
  @Input() lon = '';

  constructor(public dialog: MatDialog) {}
  /* Method to check if user is filled or not
  passed the dialog */
  isStarFilled(name: string) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.some(
      (fav: { firstname: string; lastname: string }) =>
        fav.firstname + ' ' + fav.lastname === name
    );
  }

  /* Method to open the dialog and pass the date */
  openDialog() {
    const dataToPass = {
      firstname: this.firstname,
      lastname: this.lastname,
      cell: this.cell,
      dob: this.dob,
      email: this.email,
      nat: this.nat,
      country: this.country,
      city: this.city,
      age: this.age,
      image_large: this.image_large,
      lat: this.lat,
      lon: this.lon,
      image_thumbnail: this.image_thumbnail,
      starState: this.isStarFilled(this.firstname + ' ' + this.lastname),
    };

    this.dialog.open(UserDetailDialogComponent, {
      data: dataToPass,
      autoFocus: false,
    });
  }

  ngOnInit(): void {}
}

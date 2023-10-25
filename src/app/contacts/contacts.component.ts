import { Component } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  userData: any;

  totalLength = 2000;
  pageSize = 10;
  pageNumber = 1;

  constructor(private contactService: ContactsService) {}

  /* Method to get the pagination index and page size */
  onPaginateChange(event: any) {
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadUserData();
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  /* calling the api and passing the page index and page size */
  private loadUserData(): void {
    this.contactService
      .getUserData(this.pageNumber, this.pageSize)
      .subscribe((data) => {
        console.log(data);
        this.userData = data.results;
      });
  }
}

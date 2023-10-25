import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { CardComponent } from './card.component';

import { Component } from '@angular/core';

/* Adding a host mock up to test passing data from a parent component to Card component */
@Component({
  template: `
    <app-card
      [firstname]="user.name.first"
      [lastname]="user.name.last"
      [cell]="user.cell"
      [dob]="user.dob.date"
      [age]="user.dob.age"
      [nat]="user.nat"
      [email]="user.email"
      [country]="user.location.country"
      [city]="user.location.city"
      [image_thumbnail]="user.picture.thumbnail"
      [image_large]="user.picture.large"
      [lat]="user.location.coordinates.latitude"
      [lon]="user.location.coordinates.longitude"
    ></app-card>
  `,
})
export class TestHostComponent {
  user = {
    name: {
      first: 'John',
      last: 'Doe',
    },
    cell: '123456789',
    dob: {
      date: '1990-01-01',
      age: 30,
    },
    nat: 'US',
    email: 'john.doe@example.com',
    location: {
      country: 'USA',
      city: 'New York',
      coordinates: {
        latitude: '40.730610',
        longitude: '-73.935242',
      },
    },
    picture: {
      thumbnail: 'https://example.com/thumbnail.jpg',
      large: 'https://example.com/large.jpg',
    },
  };

  @ViewChild(CardComponent)
  public cardComponent!: CardComponent;
}

describe('CardComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, TestHostComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [MatDialogModule, MatCardModule],
    });
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHost.cardComponent).toBeTruthy();
  });

  it('should receive data from parent', () => {
    // Test that the CardComponent's inputs have the expected values
    expect(testHost.cardComponent.firstname).toEqual('John');
    expect(testHost.cardComponent.lastname).toEqual('Doe');
    // ... add similar checks for other inputs ...
  });
});

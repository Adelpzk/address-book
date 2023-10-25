import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDetailDialogComponent } from './user-detail-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MapComponent } from '../map/map.component';
import { MatIconModule } from '@angular/material/icon';

describe('UserDetailDialogComponent', () => {
  let component: UserDetailDialogComponent;
  let fixture: ComponentFixture<UserDetailDialogComponent>;

  const yourMockedMatDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailDialogComponent, MapComponent],
      imports: [MatSnackBarModule, MatIconModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: yourMockedMatDialogRef }
      ],
    });
    fixture = TestBed.createComponent(UserDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

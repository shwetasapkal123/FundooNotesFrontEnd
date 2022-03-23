import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMailComponent } from './find-mail.component';

describe('FindMailComponent', () => {
  let component: FindMailComponent;
  let fixture: ComponentFixture<FindMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLabesComponent } from './edit-labes.component';

describe('EditLabesComponent', () => {
  let component: EditLabesComponent;
  let fixture: ComponentFixture<EditLabesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLabesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLabesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

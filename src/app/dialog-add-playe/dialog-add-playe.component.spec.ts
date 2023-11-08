import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPlayeComponent } from './dialog-add-playe.component';

describe('DialogAddPlayeComponent', () => {
  let component: DialogAddPlayeComponent;
  let fixture: ComponentFixture<DialogAddPlayeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAddPlayeComponent]
    });
    fixture = TestBed.createComponent(DialogAddPlayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

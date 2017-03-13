import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryInputListComponent } from './inventory-input-list.component';

describe('InventoryInputListComponent', () => {
  let component: InventoryInputListComponent;
  let fixture: ComponentFixture<InventoryInputListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryInputListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryInputListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

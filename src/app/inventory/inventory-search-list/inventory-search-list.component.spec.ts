import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySearchListComponent } from './inventory-search-list.component';

describe('InventorySearchListComponent', () => {
  let component: InventorySearchListComponent;
  let fixture: ComponentFixture<InventorySearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorySearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorySearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

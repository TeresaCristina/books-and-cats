import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListPoirotComponent } from './table-list-poirot.component';

describe('TableListPoirotComponent', () => {
  let component: TableListPoirotComponent;
  let fixture: ComponentFixture<TableListPoirotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableListPoirotComponent]
    });
    fixture = TestBed.createComponent(TableListPoirotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

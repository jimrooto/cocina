import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOrdenComponent } from './details-orden.component';

describe('DetailsOrdenComponent', () => {
  let component: DetailsOrdenComponent;
  let fixture: ComponentFixture<DetailsOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

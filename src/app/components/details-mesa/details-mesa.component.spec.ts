import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMesaComponent } from './details-mesa.component';

describe('DetailsMesaComponent', () => {
  let component: DetailsMesaComponent;
  let fixture: ComponentFixture<DetailsMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

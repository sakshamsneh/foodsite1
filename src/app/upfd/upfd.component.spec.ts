import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpfdComponent } from './upfd.component';

describe('UpfdComponent', () => {
  let component: UpfdComponent;
  let fixture: ComponentFixture<UpfdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpfdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

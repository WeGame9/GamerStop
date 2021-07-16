import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhomepageComponent } from './addhomepage.component';

describe('AddhomepageComponent', () => {
  let component: AddhomepageComponent;
  let fixture: ComponentFixture<AddhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

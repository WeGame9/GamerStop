import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top2021Component } from './top2021.component';

describe('Top2021Component', () => {
  let component: Top2021Component;
  let fixture: ComponentFixture<Top2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

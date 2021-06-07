import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetails1Component } from './game-details1.component';

describe('GameDetails1Component', () => {
  let component: GameDetails1Component;
  let fixture: ComponentFixture<GameDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDetails1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

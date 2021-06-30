import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetails2Component } from './game-details2.component';

describe('GameDetails2Component', () => {
  let component: GameDetails2Component;
  let fixture: ComponentFixture<GameDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDetails2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

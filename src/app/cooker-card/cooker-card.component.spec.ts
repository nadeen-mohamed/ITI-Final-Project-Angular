import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookerCardComponent } from './cooker-card.component';

describe('CookerCardComponent', () => {
  let component: CookerCardComponent;
  let fixture: ComponentFixture<CookerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

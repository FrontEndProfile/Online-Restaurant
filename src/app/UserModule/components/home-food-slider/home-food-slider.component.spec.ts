import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFoodSliderComponent } from './home-food-slider.component';

describe('HomeFoodSliderComponent', () => {
  let component: HomeFoodSliderComponent;
  let fixture: ComponentFixture<HomeFoodSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFoodSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFoodSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

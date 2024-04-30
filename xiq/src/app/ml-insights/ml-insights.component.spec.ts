import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlInsightsComponent } from './ml-insights.component';

describe('MlInsightsComponent', () => {
  let component: MlInsightsComponent;
  let fixture: ComponentFixture<MlInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MlInsightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MlInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

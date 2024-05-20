import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirdefenseEssentialsComponent } from './airdefense-essentials.component';

describe('AirdefenseEssentialsComponent', () => {
  let component: AirdefenseEssentialsComponent;
  let fixture: ComponentFixture<AirdefenseEssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirdefenseEssentialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirdefenseEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

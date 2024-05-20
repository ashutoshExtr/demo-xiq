import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationEssentialsComponent } from './location-essentials.component';

describe('LocationEssentialsComponent', () => {
  let component: LocationEssentialsComponent;
  let fixture: ComponentFixture<LocationEssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationEssentialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

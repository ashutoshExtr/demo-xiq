import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestEssentialsComponent } from './guest-essentials.component';

describe('GuestEssentialsComponent', () => {
  let component: GuestEssentialsComponent;
  let fixture: ComponentFixture<GuestEssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestEssentialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuestEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

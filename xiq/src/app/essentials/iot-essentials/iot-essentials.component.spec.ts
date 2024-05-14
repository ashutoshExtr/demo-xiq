import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotEssentialsComponent } from './iot-essentials.component';

describe('IotEssentialsComponent', () => {
  let component: IotEssentialsComponent;
  let fixture: ComponentFixture<IotEssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IotEssentialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IotEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

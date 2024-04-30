import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XiqNavComponent } from './xiq-nav.component';

describe('XiqNavComponent', () => {
  let component: XiqNavComponent;
  let fixture: ComponentFixture<XiqNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XiqNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XiqNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

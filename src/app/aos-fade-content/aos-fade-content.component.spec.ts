import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AosFadeContentComponent } from './aos-fade-content.component';

describe('AosFadeContentComponent', () => {
  let component: AosFadeContentComponent;
  let fixture: ComponentFixture<AosFadeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AosFadeContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AosFadeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

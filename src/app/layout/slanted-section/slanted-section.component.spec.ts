import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlantedSectionComponent } from './slanted-section.component';

describe('SlantedSectionComponent', () => {
  let component: SlantedSectionComponent;
  let fixture: ComponentFixture<SlantedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlantedSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlantedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiagoComponent } from './tiago.component';

describe('TiagoComponent', () => {
  let component: TiagoComponent;
  let fixture: ComponentFixture<TiagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiagoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

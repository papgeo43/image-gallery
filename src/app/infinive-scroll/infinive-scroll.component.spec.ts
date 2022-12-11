import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniveScrollComponent } from './infinive-scroll.component';

describe('InfiniveScrollComponent', () => {
  let component: InfiniveScrollComponent;
  let fixture: ComponentFixture<InfiniveScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniveScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniveScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAutorComponent } from './card-autor.component';

describe('CardAutorComponent', () => {
  let component: CardAutorComponent;
  let fixture: ComponentFixture<CardAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAutorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

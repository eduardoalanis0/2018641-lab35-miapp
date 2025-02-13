import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDetalleComponent } from './vista-detalle.component';

describe('VistaDetalleComponent', () => {
  let component: VistaDetalleComponent;
  let fixture: ComponentFixture<VistaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

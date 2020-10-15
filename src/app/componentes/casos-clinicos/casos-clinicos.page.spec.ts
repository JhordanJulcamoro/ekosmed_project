import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CasosClinicosPage } from './casos-clinicos.page';

describe('CasosClinicosPage', () => {
  let component: CasosClinicosPage;
  let fixture: ComponentFixture<CasosClinicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasosClinicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CasosClinicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

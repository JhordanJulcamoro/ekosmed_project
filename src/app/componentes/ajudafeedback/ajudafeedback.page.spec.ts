import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjudafeedbackPage } from './ajudafeedback.page';

describe('AjudafeedbackPage', () => {
  let component: AjudafeedbackPage;
  let fixture: ComponentFixture<AjudafeedbackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjudafeedbackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjudafeedbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

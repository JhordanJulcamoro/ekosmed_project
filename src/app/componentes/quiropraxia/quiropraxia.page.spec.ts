import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuiropraxiaPage } from './quiropraxia.page';

describe('QuiropraxiaPage', () => {
  let component: QuiropraxiaPage;
  let fixture: ComponentFixture<QuiropraxiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiropraxiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuiropraxiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

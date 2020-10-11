import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { inicialPage } from './inicial.page';

describe('inicialPage', () => {
  let component: inicialPage;
  let fixture: ComponentFixture<inicialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ inicialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(inicialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

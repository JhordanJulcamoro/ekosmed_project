import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CasoclinicoPage } from './casoclinico.page';

describe('CasoclinicoPage', () => {
  let component: CasoclinicoPage;
  let fixture: ComponentFixture<CasoclinicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasoclinicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CasoclinicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

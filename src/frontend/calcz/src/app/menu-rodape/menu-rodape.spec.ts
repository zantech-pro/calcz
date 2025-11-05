import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRodape } from './menu-rodape';

describe('MenuRodape', () => {
  let component: MenuRodape;
  let fixture: ComponentFixture<MenuRodape>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuRodape]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuRodape);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

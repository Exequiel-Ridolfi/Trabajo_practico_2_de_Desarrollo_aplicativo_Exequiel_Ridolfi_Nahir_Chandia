import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasinfoPage } from './masinfo.page';

describe('MasinfoPage', () => {
  let component: MasinfoPage;
  let fixture: ComponentFixture<MasinfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MasinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

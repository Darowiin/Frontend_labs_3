import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { By } from '@angular/platform-browser';

describe('AppComponent (standalone) with routing and params', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent, // Standalone компонент
        RouterTestingModule.withRoutes([
          { path: 'page1', component: Page1Component },
          { path: 'page2/:id', component: Page2Component },
          { path: 'page3', component: Page3Component },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('должен переходить на страницу Page2 с параметром и отображать его', async () => {
    // Переход на страницу с параметром
    await router.navigate(['/page2', 123]);  // Передаем параметр 123
    fixture.detectChanges();
    
    // Проверяем, что на странице Page2 отображается параметр
    const page2El = fixture.debugElement.query(By.css('app-page2'));
    const idText = page2El.nativeElement.querySelector('p').textContent;
    expect(idText).toContain('Полученный параметр ID: 123');
  });
});
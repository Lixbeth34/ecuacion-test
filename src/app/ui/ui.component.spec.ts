import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UiComponent } from './ui.component';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call calculo method', () => {
    // Arrange
    let result = [];
    component.arrayx = [0.0,1.0,2.0,3.0];
    component.vala = 2.0;
    component.valb = 1.0;

    
    // Act
    component.calculo();
    result = component.Result;

    // Assert
    expect(result).toEqual([1,3,5,7]);    
  });

  it('Should set array-primer model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="primer"]')).nativeElement;

    // Act 
    inputElement.value = '0.0';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.arrayx).toEqual([0.0]); 
  });

  it('Should set array-segundo model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="segundo"]')).nativeElement;

    // Act 
    inputElement.value = '1.0';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.arrayx[1]).toEqual(1.0); 
  });

  it('Should set array-tercer model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="tercer"]')).nativeElement;

    // Act 
    inputElement.value = '3.0';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.arrayx[2]).toEqual(3.0); 
  });

  it('Should set array-cuarto model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="cuarto"]')).nativeElement;

    // Act 
    inputElement.value = '4.0';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.arrayx[3]).toEqual(4.0); 
  });

  it('Should set vala model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="vala"]')).nativeElement;

    // Act 
    inputElement.value = '2';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.vala).toEqual(2); 
  });

  it('Should set valb model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="valb"]')).nativeElement;

    // Act 
    inputElement.value = '1';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.valb).toEqual(1); 
  });

 it('should add array, a, b when i click the mean button ', () => {
   // Arrange 
   component.arrayx = [0.0,1.0,2.0,3.0];
   component.vala = 2;
   component.valb = 1;
   let meanButton = fixture.debugElement.query(By.css('.button'));

   // Act
   meanButton.triggerEventHandler('click', null);

   // Assert
   expect(component.arrayx).toEqual([1,3,5,7]);

  });

 it('Should render calculo in result div', () => {
   // Arrange
   component.arrayx = [0.0,1.0,2.0,3.0];
   component.vala = 2;
   component.valb = 1;

   // Act
   component.calculo();
   fixture.detectChanges();
   
   let de = fixture.debugElement.query(By.css('.result'));
  

   // Assert
   expect(component.Result).toEqual([1,3,5,7]);
  });
});


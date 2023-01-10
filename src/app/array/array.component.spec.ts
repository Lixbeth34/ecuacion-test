import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import {calculo} from './array.component';
import {ArrayComponent} from './array.component';

describe('y', () => {
  it('shoult return y', () => {
    const resutl = calculo([0.0,1.0,2.0,3.0],2.0,1.0);
    expect(resutl).toEqual([1,3,5,7])
  })
})

describe('y', () => {
  it('shoult return y', () => {
    const resutl = calculo([2.0,1.0,4.0,5.0],3.0,1.0);
    expect(resutl).toEqual([7,4,13,16])
  })
})

describe('y', () => {
  it('shoult return y', () => {
    const resutl = calculo([7.0,4.0,13.0,16.0],2.0,1.0);
    expect(resutl).toEqual([15,9,27,33])
  })
})

describe('y', () => {
  it('shoult return y', () => {
    const resutl = calculo([1.0,2.2,3.0,4.0],3.0,2.0);
    expect(resutl).toEqual([5,8.600000000000001,11,14])
  })
})

describe('y', () => {
  it('shoult return y', () => {
    const resutl = calculo([4.0,3.0,2.0,1.0],1.0,2.0);
    expect(resutl).toEqual([6,5,4,3])
  })
})

//__________________________________________________________________



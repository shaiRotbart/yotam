import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeYComponent } from './tree-y.component';

describe('TreeYComponent', () => {
  let component: TreeYComponent;
  let fixture: ComponentFixture<TreeYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

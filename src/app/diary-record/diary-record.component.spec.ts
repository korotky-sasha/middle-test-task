import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryRecordComponent } from './diary-record.component';

describe('DiaryRecordComponent', () => {
  let component: DiaryRecordComponent;
  let fixture: ComponentFixture<DiaryRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

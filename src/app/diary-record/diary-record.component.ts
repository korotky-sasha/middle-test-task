import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { Record } from '../shared/models';
import { calendarSrcImg, vertDots } from '../shared/constants';

@Component({
  selector: 'app-diary-record',
  templateUrl: './diary-record.component.html',
  styleUrls: ['./diary-record.component.scss'],
})
export class DiaryRecordComponent implements OnInit {
  constructor() {}

  @Input() record: Record = { time: new Date(), content: '' };

  calendarSrcImg = calendarSrcImg;
  vertDots = vertDots;

  ngOnInit(): void {}
}

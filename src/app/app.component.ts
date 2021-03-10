import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Record } from './shared/models';
import {
  arrowSrcImg,
  pickerHiddenSrcImg,
  pickerShownSrcImg,
} from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'middle-test-task';
  arrowSrcImg = arrowSrcImg;
  pickerHiddenSrcImg = pickerHiddenSrcImg;
  pickerShownSrcImg = pickerShownSrcImg;
  isPickerHidden = true;
  records: Record[] = [];
  diaryForm = this.formBuilder.group({
    input: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  togglePicker(): void {
    this.isPickerHidden = !this.isPickerHidden;
  }

  emojiClicked(event: any): void {
    const pickedEmoji = event.emoji.native;
    const currentMessage = this.diaryForm.get('input')?.value;
    this.diaryForm.patchValue({ input: currentMessage + pickedEmoji });
  }

  sendMessage(): void {
    if (this.diaryForm.value.input !== '') {
      const record = this.diaryForm.get('input')?.value;
      this.diaryForm.patchValue({ input: '' });
      this.records.push({ content: record, time: new Date() });
      this.isPickerHidden = true;
    }
  }
}

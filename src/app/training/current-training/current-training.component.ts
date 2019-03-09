import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogueComponent } from '../../shared/dialogue/dialogue.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() trainingexit = new EventEmitter();
  progress = 0;
  disabled = false;
  timer: any;
  constructor(public dialogue: MatDialog) { }

  startOrResumeTimer() {
    this.timer = setInterval( () => {
      this.progress = this.progress + 5 ;
      if (this.progress >= 100) {
     clearInterval(this.timer);
    } else {
      this.disabled = true;
    }
    } , 1000);
  }

  ngOnInit() {
    this.startOrResumeTimer();
  }

  onStop() {
    clearInterval(this.timer);
    const diagref = this.dialogue.open(DialogueComponent);
    diagref.afterClosed().subscribe(
      result => {
        if (result) {
          this.trainingexit.emit();
        } else {
          this.startOrResumeTimer();
        }
      }
    );
  }
}

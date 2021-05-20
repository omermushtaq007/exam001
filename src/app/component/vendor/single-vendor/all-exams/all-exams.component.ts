import { ExamService } from './../../../../service/exam.service';
import { Component, OnInit } from '@angular/core';
import { Exam } from 'src/app/model/app-user';

@Component({
  selector: 'app-all-exams',
  templateUrl: './all-exams.component.html',
  styleUrls: ['./all-exams.component.css']
})
export class AllExamsComponent implements OnInit {
  Exams: Exam[]
  constructor(public examService:ExamService) { }
  
  ngOnInit(): void {
    this.examService.getExamList().subscribe((res) => {
      this.Exams = res.map((exam) => {
        return {
          id: exam.payload.doc.id,
          examData: exam.payload.doc.data(),
        } as Exam;
      });
      console.log(this.Exams);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { type } from 'os';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
  
export class QuizzComponent implements OnInit{
    
  title: string = ""
  questions: any
  questionSelected: any

  answers: string[] = []
  answerSelected: string = ""
  
  questionIndex: number = 0
  questionMaxIndex: number = 0

  finished: boolean = false

  constructor() { }
  
  ngOnInit(): void {
    
  }
}

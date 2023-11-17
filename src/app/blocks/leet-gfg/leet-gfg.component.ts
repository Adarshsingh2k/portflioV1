import { Component, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GfgServiceService } from 'src/app/services/gfg-service.service';
import { LeetServiceService } from 'src/app/services/leetcode/leet-service.service';

@Component({
  selector: 'app-leet-gfg',
  templateUrl: './leet-gfg.component.html',
  styleUrls: ['./leet-gfg.component.css']
})
export class LeetGFGComponent {

  

  chart: any;
  gfgDataIn:any;
  username:any;
  monthly_coding_score:any;
  overall_coding_score:any;
  total_problem_solved:any;
  gfgLink:any;

  leetDataIn:any;
  profileName:any;
  totalSolved:any;
  ranking:any;
  leetUrl:any;
  usernameLeet="lagbhagadarsh";

  constructor(private gfgData:GfgServiceService, private leetData:LeetServiceService){  }

  ngOnInit(){
    this.gfgData.getGfgData().subscribe(response=>{
      // console.log(response)
      this.gfgDataIn=response
      this.username=this.gfgDataIn.username
      this.extractGfgData(this.gfgDataIn)
      this.renderPieChart(this.gfgDataIn)
    })

    this.leetData.getLeetcodeData().subscribe(response=>{
      // console.log(response)
      this.leetDataIn=response
      this.extractLeetData(this.leetDataIn)
      this.renderPieChartLeet(this.leetDataIn)
      this.leetUrl=`https://leetcode.com/${this.usernameLeet}`

    })
    
    
  }


  // Pie
  renderPieChart(datIn:any): void {
    const ctx = document.getElementById('gfgCodeStatusChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [
          {
            data: [
              datIn.EASY,
              datIn.MEDIUM,
              datIn.HARD
            ],
            backgroundColor: ['#00b8a3', '#ffc01e', '#ef4743'],
            hoverBackgroundColor: ['#6eb8af', '#ba973c', '#914a49']
          }
        ]
        
      },
    
      options: {
        responsive:true,
        plugins: {
          legend: {
              // display: true,
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
          }
      }
    }
    });
  }

  // //////////////////////////////

  // renderChartLeet(dataIn:any): void {
  //   console.log(dataIn)
  //   const totalHardQuestions = dataIn.totalHard; // Replace with the actual total number of hard questions
  //   const totalEasyQuestions = dataIn.totalEasy; // Replace with the actual total number of easy questions
  //   const totalMediumQuestions = dataIn.totalMedium; // Replace with the actual total number of medium questions

  //   const solvedEasyQuestions = dataIn.easySolved; // Replace with the actual solved count for easy questions
  //   const solvedHardQuestions = dataIn.hardSolved; // Replace with the actual solved count for hard questions
  //   const solvedMediumQuestions = dataIn.mediumSolved; // Replace with the actual solved count for medium questions

  //   const ctx = document.getElementById('leetCodeStatusChart') as HTMLCanvasElement;
  //   const chart = new Chart(ctx, {
  //     type: 'pie',
  //     data: {
  //       labels: ['Hard', 'Easy', 'Medium'],
  //       datasets: [
  //         {
  //           data: [totalHardQuestions, totalEasyQuestions, totalMediumQuestions],
  //           backgroundColor: ['red', 'green', 'blue'],
  //           hoverBackgroundColor: ['lightcoral', 'lightgreen', 'lightblue']
  //         },
  //         {
  //           data: [solvedHardQuestions, solvedEasyQuestions, solvedMediumQuestions],
  //           backgroundColor: ['darkred', 'darkgreen', 'darkblue'],
  //           hoverBackgroundColor: ['indianred', 'limegreen', 'deepskyblue']
  //         }
  //       ]
  //     },
  //     options: {
  //       responsive: true,
  //       plugins: {
  //         legend: {
  //             // display: true,
  //             labels: {
  //                 color: 'rgb(255, 99, 132)'
  //             }
  //         }
  //     }

  //       // other chart options
  //     }
  //   });
  // }

  // ////////////////////////////////

  renderPieChartLeet(datIn:any): void {
    const ctx = document.getElementById('leetCodeStatusChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [
          {
            data: [
              datIn.easySolved,
              datIn.mediumSolved,
              datIn.hardSolved
            ],
            backgroundColor: ['rgb(92, 196, 109)', 'rgb(230, 189, 128)', 'rgb(218, 79, 60)'],
            hoverBackgroundColor: ['#6eb8af', '#ba973c', '#914a49']
          }
        ]
        
      },
    
      options: {
        responsive:true,
        plugins: {
          legend: {
              // display: true,
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
          }
      }
    }
    });
  }


  extractGfgData(input:any){
    this.total_problem_solved=input.total_problem_solved
    this.overall_coding_score=input.overall_coding_score
    this.monthly_coding_score=input.monthly_coding_score
    this.gfgLink=input.gfgLink
  }

  extractLeetData(input:any){
    // console.log(input)
    this.profileName=input.profileName
    this.totalSolved=input.totalSolved
    this.ranking=input.ranking
  }

}

import { Component } from '@angular/core';
import { LinkedinServiceService } from 'src/app/services/linkedin/linkedin-service.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
})
export class AboutSectionComponent {
  imgUrl: any;
  fullName: any;
  summary: any;
  experience: any;
  finalExperience: any = [];
  dateRange: any;
  // roleDescription:any;
  showFullContent = false;
  education: any = [];
  eduTitle: any;
  eduSchool: any;
  skills: any = [];

  constructor(private linkedin: LinkedinServiceService) {}
  ngOnInit() {
    this.linkedin.getLinkedinDataApi().subscribe(
      (response) => {
        console.log(response);
        console.log('response');
        this.getUserDataLinkedin(response);
      },
      (error) => {
        console.log(error);

        this.linkedin.getLinkedinDataJson().subscribe((response) => {
          // console.log(response)
          this.getUserDataLinkedin(response);
        });
      }
    );
  }

  getUserDataLinkedin(data: any) {
    this.imgUrl = data.profile_pic_url;
    this.fullName = data.data.full_name;
    this.summary = data.data.about;
    this.experience = data.data.experiences;
    // console.log(this.experience)
    this.getRelevantExperience(this.experience);
    // console.log(this.finalExperience)
    this.education = data.data.educations[0];
    this.eduTitle = this.education.degree + '-' + this.education.field_of_study;
    this.eduSchool = this.education.school;
    // this.educationArray = Object.entries(this.education);
    console.log(data.data.skills);
    this.skills = data.data.skills.split('|').slice(0, 14);

    // console.log( this.skills)
  }

  getRelevantExperience(exp: any) {
    for (let i = 0; i < exp.length; i++) {
      // console.log(exp[i].end_year>="2022" || exp[i].start_year>="2022" )
      if (exp[i].end_year >= '2022' || exp[i].start_year >= '2022') {
        this.finalExperience.push(exp[i]);
      }
    }
  }

  toggleReadMore(item: any) {
    item.showFullContent = !item.showFullContent;
    // this.More="Less"
  }
}

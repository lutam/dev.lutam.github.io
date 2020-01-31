import {Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

interface Skill {
  color: string;
  name: string;
  percentage: number;
  image: string;
}

interface SkillType {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})


export class HomepageComponent implements OnInit {

  public skills: Array<SkillType>;
  public circleProgressRadius: number;

  constructor(
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {

    this.route.fragment.subscribe((fragment: string) => {
      if (fragment === 'skills') {
        const skillsDOM = document.getElementById(fragment);
        skillsDOM.scrollIntoView();
      }
    });

    this.resizeComponents(window.innerWidth);

    this.skills = [
      {
        title: 'Fundamentals',
        skills: [
          {
            color: '#e44d26',
            name: 'HTML 5',
            percentage: 100,
            image: 'html5',
          },
          {
            color: '#264de4',
            name: 'CSS 3',
            percentage: 95,
            image: 'css3',
          },
          {
            color: '#f7df1e',
            name: 'JS ES6',
            percentage: 80,
            image: 'js',
          },
          {
            color: '#6181b6',
            name: 'PHP',
            percentage: 80,
            image: 'php',
          },
          {
            color: '#659ad2',
            name: 'C++',
            percentage: 24,
            image: 'cpp',
          },
        ]
      },
      {
        title: 'Frontend',
        skills: [
          {
            color: '#e23237',
            name: 'Angular 2+',
            percentage: 50,
            image: 'angular',
          },
          {
            color: '#41b883',
            name: 'Vue.js',
            percentage: 70,
            image: 'vue',
          },
          {
            color: '#cd6799',
            name: 'SASS',
            percentage: 80,
            image: 'sass',
          },
          {
            color: '#007acc',
            name: 'TypeScript',
            percentage: 50,
            image: 'typescript',
          },
          {
            color: '#0767aa',
            name: 'jQuery',
            percentage: 90,
            image: 'jquery',
          },
          {
            color: '#563d7c',
            name: 'Bootstrap',
            percentage: 90,
            image: 'bootstrap',
          },
        ]
      },
      {
        title: 'Backend & DB',
        skills: [
          {
            color: '#1a171b',
            name: 'Symfony+',
            percentage: 40,
            image: 'symfony',
          },
          {
            color: '#fb503b',
            name: 'Laravel',
            percentage: 30,
            image: 'laravel',
          },
          {
            color: '#5aa845',
            name: 'Node.js',
            percentage: 5,
            image: 'nodejs',
          },
          {
            color: '#f8981d',
            name: 'MySQL',
            percentage: 55,
            image: 'mysql',
          },
        ]
      },
      {
        title: 'CMS',
        skills: [
          {
            color: '#00749a',
            name: 'WordPress',
            percentage: 90,
            image: 'wordpress',
          },
          {
            color: '#df0067',
            name: 'PrestaShop',
            percentage: 65,
            image: 'prestashop',
          },
          {
            color: '#7ac043',
            name: 'Joomla',
            percentage: 20,
            image: 'joomla',
          },
        ]
      },
      {
        title: 'Dev Tools',
        skills: [
          {
            color: '#de4c36',
            name: 'GIT',
            percentage: 85,
            image: 'git',
          },
          {
            color: '#8ed6fb',
            name: 'Webpack',
            percentage: 50,
            image: 'webpack',
          },
          {
            color: '#d34a47',
            name: 'Gulp',
            percentage: 10,
            image: 'gulp',
          },
          {
            color: '#1d91b4',
            name: 'Docker',
            percentage: 10,
            image: 'docker',
          },
        ]
      }
    ];
  }

  private resizeComponents(width) {
    this.circleProgressRadius = width > 500 ? 100 : (width - 12 * 4) * 0.3 * (1 - 2 / 6.25);

  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeComponents(event.target.innerWidth);
  }


}

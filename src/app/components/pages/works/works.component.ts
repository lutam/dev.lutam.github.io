import { Component, OnInit } from '@angular/core';
import {timestamp} from 'rxjs/operators';


interface Work {
  companyImage: string;
  title: string;
  companyName: string;
  description: string;
  startDate: number;
  endDate: number;
  isCurrent?: boolean;
}

interface Divertissement {
  title: string;
  technology: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})

export class WorksComponent implements OnInit {

  public works: Array<Work>;
  public divertissements: Array<Divertissement>;
  constructor() { }

  ngOnInit() {
    const d = new Date();
    this.works = [
      {
        companyImage: '/assets/images/works/ped.svg',
        title: 'Junior Frontend Developer',
        companyName: 'PED.',
        description: 'PED is a Tech Company based in Milan, Catania and Ragusa who designs and creates innovative web applications. I am a member of the frontend team in which I can improve day by day my knowledge of web technologies such as js frameworks and most used CMSs ',
        startDate: 1538402356000,
        endDate: d.getTime(),
        isCurrent: true,
      },
      {
        companyImage: '/assets/images/works/lorenzo-vinci.svg',
        title: 'Full Stack Developer',
        companyName: 'Lorenzo Vinci',
        description: 'Lorenzo Vinci is a company specialized in italian gourmet food. I was the developer of both the PrestaShop e-commerce and the Wordpress magazine, working side by side with designers and members of sales team.',
        startDate: 1475330356000,
        endDate: 1535810356000,
      },
      {
        companyImage: '/assets/images/works/air-atlantis.svg',
        title: 'Full Stack Developer',
        companyName: 'Air Atlantis',
        description: 'Air Atlantis is a multimedia company. In the 3 months I worked with them, I made some Wordpress websites and I improved their company website.',
        startDate: 1462111156000,
        endDate: 1469973556000,
      },
      {
        companyImage: '/assets/images/works/sis.svg',
        title: 'Full Stack Developer',
        companyName: 'Silenzio In Sala',
        description: 'Silenzio In Sala is film review website. I entirely designed the project from scratch, from UI to server architecture. It was made in pure PHP (no framework), jQuery and Bootstrap and it included also a backoffice panel.',
        startDate: 1430488756000,
        endDate: 1488376756000,
      }
    ];

    this.divertissements = [
      {
        title: 'Virtual Dogs',
        technology: 'React',
        image: 'virtual-dogs',
        link: '/projects/virtual-dogs',
      },
      {
        title: 'Smesso di Fumare',
        technology: 'Laravel',
        image: 'smesso-di-fumare',
        link: 'http://smessodifumare.altervista.org/',
      },
      {
        title: 'Tetris',
        technology: 'Angular 5',
        image: 'tetris',
        link: '/projects/tetris',
      },
      {
        title: 'Calculator',
        technology: 'Angular 5',
        image: 'calculator',
        link: '/projects/calculator',
      },
      {
        title: 'Snake',
        technology: 'Angular 5',
        image: 'snake',
        link: '/projects/snake',
      },

      {
        title: 'Weather',
        technology: 'jQuery',
        image: 'weather',
        link: '/projects/weather',
      },
      {
        title: 'Decimal Time',
        technology: 'jQuery',
        image: 'decimal-time',
        link: '/projects/decimaltime',
      }
    ];
  }

  public formatDuration(start, end): string {
    const exactYears = (start - end) / (1000 * 3600 * 24 * 365);
    const years = Math.floor(exactYears)
    const exactMonths = (exactYears - years) * 12;
    const months = Math.round(exactMonths);

    let finalString = (years > 0 ? `${years} year` : '');
    finalString += (years  > 1 ? `s` : '');
    finalString += (years > 0 && months > 0 ? ' and ' : '');
    finalString += (months > 0 ? `${months} month` : '');
    finalString += (months > 1 ? `s` : '');

    return finalString;

  }

}

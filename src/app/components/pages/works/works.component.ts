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
        companyImage: '/assets/images/works/hotter.png',
        title: 'Frontend Developer',
        companyName: 'Hotter Shoes',
        description: 'Hotter Shoes is an english footwear brand selling in the UK, the US and several european countries.' +
          '<br><br>' +
          'I am part of the team responsible for developing, improving and maintaining the company e-commerce: a single page React application.',
        startDate: 1601581419000,
        endDate: 1624913046000,
        isCurrent: true,
      },{
        companyImage: '/assets/images/works/crispy.png',
        title: 'Senior Frontend Developer',
        companyName: 'Crispy Bacon',
        description: 'Crispy Bacon is a software development company specialized in web and mobile applications. Among the Crispy Bacon\'s clients there are several national wide companies in the banking, lottery and IOT sectors.\n' +
          '<br><br>' +
          'The client of the project I\'ve been working on was Sisal, the italian leader company in the betting and lottery sector.\n' +
          'I was responsible of a 5-people international team dedicated to the frontend developing of the software used in all the italian Sisal\'s betting shops.\n' +
          '<br><br>' +
          'The software was entirely made using Typescript React and was designed to be the most re-usable, testable and well documented as possible.',
        startDate: 1580599025000,
        endDate: 1598915825000,
        isCurrent: false,
      },
      {
        companyImage: '/assets/images/works/ped.svg',
        title: 'Frontend Developer',
        companyName: 'PED.',
        description: 'PED is a tech-company based in Milan, Catania and Ragusa specialized in customized web applications and websites for startup companies.\n' +
          '<br><br>' +
          'Most of the projects I\'ve been working on were RESTful applications. I was accountable, together with the other members of the frontend team, for the developing of Vue.js platforms. The usual stack also included the latest web technologies such as Webpack or SASS.\n' +
          '<br><br>' +
          'I also worked in PED as a Full Stack developer using the most common CMSs such as Wordpress, PrestaShop and Joomla.',
        startDate: 1538402356000,
        endDate: 1577833200000,
        isCurrent: false,
      },
      {
        companyImage: '/assets/images/works/lorenzo-vinci.svg',
        title: 'Full Stack Developer',
        companyName: 'Lorenzo Vinci',
        description: 'Lorenzo Vinci is a well-known website for the lovers of the italian gourmet and traditional food. The Lorenzo Vinci\'s online shop sells food products throughout Italy, while the blog is a point of reference for recipes and informations about italian food.\n' +
          '<br><br>' +
          'I was the only responsible for the backend and frontend developing and maintenance of both the sites: the PrestaShop e-commerce and the Wordpress blog.\n' +
          'I also created an external backoffice platform for prices management in pure PHP and JQuery. ',
        startDate: 1475330356000,
        endDate: 1535810356000,
      },
      {
        companyImage: '/assets/images/works/sis.svg',
        title: 'Full Stack Developer',
        companyName: 'Silenzio In Sala',
        description: 'Silenzio in Sala is today a followed italian website for cinema lovers and film reviews. During the time I\'ve been working for Silenzio In Sala I helped to create the site from scratch according to redational and SEO needs.\n' +
          '<br><br>' +
          'I was accountable for every technical and graphic aspect of the website, including the UI design, the developing and the server architecture.\n' +
          '<br><br>' +
          'Silenzio In Sala\'s backend was entirely made in pure PHP, while JQuery and CSS3 were used for the responsive and SEO-friendly frontend.',
        startDate: 1430488756000,
        endDate: 1488376756000,
      },
      {
        companyImage: '/assets/images/works/air-atlantis.svg',
        title: 'Full Stack Developer',
        companyName: 'Air Atlantis',
        description: 'Air Atlantis is a multimedia company based in Milan. <br><br>I helped developing some Wordpress websites and I also improved the company website adding a new backoffice section.',
        startDate: 1462111156000,
        endDate: 1469973556000,
      },
    ];

    this.divertissements = [
      {
        title: 'Solar System',
        technology: 'Vue.js',
        image: 'solar-system',
        link: '/projects/solar-system',
      },
      {
        title: 'Arkanoid',
        technology: 'Vue.js',
        image: 'arkanoid',
        link: '/projects/arkanoid',
      },
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

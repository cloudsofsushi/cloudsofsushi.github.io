export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'MelCochleaGram-DeepCNN',
    subtitle: 'MelCochleaGram-DeepCNN',
    link: 'https://drive.google.com/file/d/1CCXPdm4mS8j8Sjy59Z8pMFjPeu5QPOUC/view?usp=drive_link',
    image: '/images/projects/project1.png',
    date: '2024-05-01',
    desc:
      'Won ~ $7000 in prizes for an advanced, low cost monitoring solution ' +
      'for crops. Harvest was designed to catch irrigation leaks, overwatering, ' +
      'and nutrient deficiencies at an affordable price for the developing world.',
  },
  {
    title: 'Traffic System Controller using Big Data Analytics',
    subtitle: 'Traffic System Controller using Big Data Analytics',
    link: 'https://drive.google.com/file/d/1vSunrVeb2cbYyI88ZqskAR6yVi7mvcUt/view?usp=drive_link',
    image: '/images/projects/project2.jpg',
    date: '2024-05-01',
    desc:
      'Won ~ $7000 in prizes for an advanced, low cost monitoring solution ' +
      'for crops. Harvest was designed to catch irrigation leaks, overwatering, ' +
      'and nutrient deficiencies at an affordable price for the developing world.',
  },
  {
    title: 'NIT Kurukshetra Website',
    subtitle: 'A convolutional neural network to classify cats! (and dogs)',
    link: 'https://cloudsofsushi.github.io/nitk/',
    image: '/images/projects/project3.jpg',
    date: '2021-12-01',
    desc:
      'Launched a potato battery powered weather balloon with two cameras ' +
      'and gps transponder. Resulting photos were published in a coffee table book. ' +
      'You can email me for a copy.',
  },
];

export default data;

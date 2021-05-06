import React from 'react';
import TrackVisibility from 'react-on-screen';
import { Counter, Pagetitle, Skill } from '../../elements';

const aboutContent = {
  name: 'Bolby',
  avatarImage: '/images/avatar-2.svg',
  content:
    'I am Colin Hain, web developer from Lincoln, NE. I have rich experience in web API and database design',
};

const progressData = [
  {
    id: 1,
    title: 'Node.js',
    percentage: 97,
    progressColor: '#026E00',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    percentage: 75,
    progressColor: '#FF4C60',
  },
  {
    id: 3,
    title: 'MongoDB',
    percentage: 85,
    progressColor: '#6C6CE5',
  },
];

const counterData = [
  {
    id: 1,
    title: 'Projects completed',
    count: 198,
    icon: 'icon-fire',
  },
  {
    id: 2,
    title: 'Cup of coffee',
    count: 5670,
    icon: 'icon-cup',
  },
  {
    id: 3,
    title: 'Satisfied clients',
    count: 427,
    icon: 'icon-people',
  },
  {
    id: 4,
    title: 'Nominees winner',
    count: 35,
    icon: 'icon-badge',
  },
];

export default () => (
  <section id="about">
    <div className="container">
      <Pagetitle title="About Me" />
      <div className="row">
        <div className="col-md-3">
          <div className="text-center text-md-left">
            <img src={aboutContent.avatarImage} alt={aboutContent.name} />
          </div>
          <div className="spacer d-md-none d-lg-none" data-height="30"></div>
        </div>

        <div className="col-md-9 triangle-left-md triangle-top-sm">
          <div className="rounded bg-white shadow-dark padding-30">
            <div className="row">
              <div className="col-md-6">
                <p>{aboutContent.content}</p>
                <div className="mt-3">
                  <a href="!#" className="btn btn-default">
                    Download CV
                  </a>
                </div>
                <div
                  className="spacer d-md-none d-lg-none"
                  data-height="30"
                ></div>
              </div>
              <div className="col-md-6">
                {progressData.map((progress) => (
                  <TrackVisibility
                    once
                    key={progress.id}
                    className="progress-wrapper"
                  >
                    <Skill progress={progress} />
                  </TrackVisibility>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer" data-height="70"></div>
      <div className="row fix-spacing">
        {counterData.map((counter) => (
          <div key={counter.id} className="col-md-3 col-sm-6">
            <TrackVisibility once>
              <Counter counterItem={counter} />
            </TrackVisibility>
          </div>
        ))}
      </div>
    </div>
  </section>
);

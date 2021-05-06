import React from 'react';
import { Pagetitle, PriceBox } from '../../elements';

const priceBoxData = [
  {
    id: 1,
    title: 'Basic',
    icon: 'images/price-1.svg',
    content: [
      {
        id: 0,
        text: 'A Simple option but powerful to manage your business',
      },
      {
        id: 2,
        text: 'Email support',
      },
    ],
    price: 9,
    best: false,
    badge: false,
  },
  {
    id: 2,
    title: 'Premium',
    icon: 'images/price-2.svg',
    content: [
      {
        id: 1,
        text: 'Unlimited product including apps integrations and more features',
      },
      {
        id: 2,
        text: 'Mon-Fri support',
      },
    ],
    price: 49,
    best: true,
    badge: 'Recommended',
  },
  {
    id: 3,
    title: 'Ultimate',
    icon: 'images/price-3.svg',
    content: [
      { id: 1, text: 'A wise option for large companies and individuals' },
      { id: 2, text: '24/7 support' },
    ],
    price: 99,
    best: false,
    badge: false,
  },
];

export default () => (
  <section id="prices">
    <div className="container">
      <Pagetitle title="Pricing Plans" />
      <div className="row align-items-center">
        {priceBoxData.map((priceBox) => (
          <div key={priceBox.id} className="col-md-4">
            <PriceBox priceBoxItem={priceBox} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

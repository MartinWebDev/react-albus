import React from 'react';
import { render } from 'react-dom';
import { Wizard, Steps, Step } from '../../src';
import Navigation from './Navigation';
import './exampleAnimation.css';

const data = [
  { id: 100, text: "Show me 1", show: true },
  { id: 101, text: "Show me 2", show: true },
  { id: 102, text: "Do not show me 3", show: true },
  { id: 103, text: "Show me 4", show: true },
  { id: 104, text: "Do not show me 5", show: true },
];

const ConditionalSteps = () => (
  <div className="row pad-t">
    <div className="col-xs-6 col-xs-offset-3">
      <Wizard>
        <Steps>
          <Step id="gandalf">
            <h1 className="text-align-center">Gandalf</h1>
          </Step>
          <Step id="dumbledore">
            <h1 className="text-align-center">Dumbledore</h1>
          </Step>
          {
            data.map((el) => (
              <Step id={`step-${el.id}`} key={el.id} enabled={el.show}>
                <h1>{el.text}</h1>
              </Step>
            ))
          }
          <Step id="ice king">
            <h1 className="text-align-center">Ice King</h1>
          </Step>
        </Steps>
        <Navigation />
      </Wizard>
    </div>
  </div>
);

render(<ConditionalSteps />, document.getElementById('conditional-steps'));

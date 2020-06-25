import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
const greeting =React.createElement('h1',{},'Hello world');


render(greeting, document.getElementById('root'));

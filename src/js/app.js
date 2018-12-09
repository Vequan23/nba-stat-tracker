import '../css/main.css';
import fetchUtils from './utils/fetchUtils';
import data from '../data.json'
import image from '../images/nba-logo.png'

const init = () => {
  getTeams();
};

let homeImg = document.querySelector('.nba-logo');
homeImg.src = image;


const getTeams = () => {
  const url = 'https://api.sportradar.us/nba/trial/v5/en/seasons/2018/REG/leaders.json?api_key=36z5xrsy98pq7x53p9bewqsn';
  // fetchUtils({ url });
};

init();

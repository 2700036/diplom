import '../pages/analytics.css';
import Statistics from '../scripts/components/Statistics';
import DataStorage from '../scripts/modules/DataStorage';

const dayFields = Array.from(document.querySelectorAll('.table__day'));
const barFields = Array.from(document.querySelectorAll('.table__bar'));
const stats = document.querySelector('.stats');
const table = document.querySelector('.table');

const dataStorage = new DataStorage();
const statistics = new Statistics({dayFields, barFields, dataStorage, stats, table});
statistics.startStats();

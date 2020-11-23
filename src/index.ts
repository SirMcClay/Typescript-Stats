import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// const analyzer = new WinsAnalysis('Man United');
// const report = new ConsoleReport();

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new ConsoleReport()
// );
const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);

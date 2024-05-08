import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import ProgressBar from "@ramonak/react-progress-bar";
import './ProgressBarComponent.css';

interface ProgressBarProps {
    'paragraphIndex': number,
    'totalParagraphs': number,
    'currentLesson': number
}

function ProgressBarComponent(props: ProgressBarProps) {
    console.log(props.paragraphIndex + ' total Pragraphs: ' + props.totalParagraphs + ' current lesson: ' + props.currentLesson);
    function getBackLink() : string {
      if (props.paragraphIndex == 0) {
        return '#/lesson-' + (props.currentLesson - 1) + '/complete';
      }
      return '#/lesson-' + props.currentLesson + '/' + (props.paragraphIndex - 1).toString();
    }
  
    function getNextLink() : string {
      if (props.paragraphIndex == props.totalParagraphs - 1) {
        return '#/lesson-' + props.currentLesson + '/complete';
      }
      else if (props.paragraphIndex == props.totalParagraphs) {
        return '#/lesson-' + (props.currentLesson + 1) + '/0';
      }
      console.log((props.paragraphIndex + 1).toString())
      return '#/lesson-' + props.currentLesson + '/' + (props.paragraphIndex + 1).toString();
    }
  
    function calculateProgressPercent() : number {
      return Number((props.paragraphIndex/props.totalParagraphs*100).toFixed(0));
    };

    return (
      <div id='progressBarContainer'>
        <a href={getBackLink()}><ChevronLeft/></a>
        <ProgressBar className='progressBar' height='30px' labelSize='10px' completed={calculateProgressPercent()} bgColor='black'/>
        <a href={getNextLink()}><ChevronRight/></a>
      </div>
    );
}

export default ProgressBarComponent;
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { ChildrenProps } from 'types';

export const TooltipElement = ({ children }: ChildrenProps) => {
  return (
    <>
      <div className="App">
        <h1 id="app-title" style={{ backgroundColor: '#999' }}>
          Hello Tooltip Example
        </h1>
        <h2 id="second-app-title" style={{ backgroundColor: '#999' }}>
          This is a basic example on how to use ReactTooltip
        </h2>
      </div>
      <Tooltip
        anchorId="app-title"
        place="bottom"
        content="Hello world! I'm a Tooltip"
      />
      <Tooltip
        anchorId="second-app-title"
        place="bottom"
        variant="info"
        content="I'm a info tooltip"
      />
    </>
  );
};

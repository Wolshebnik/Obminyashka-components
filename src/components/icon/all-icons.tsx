import { Icons } from './types';
import { SvgColor } from './styles';
import { splitAndCapitalize } from './helper';

export const AllIcons = ({ Icon }: Icons): JSX.Element => {
  const components = Object.keys(Icon);
  return (
    <div
      style={{
        overflow: 'scroll',
        height: '100vh',
        paddingBottom: 40,
      }}
    >
      {components.map((key) => {
        // @ts-ignore
        const Component = Icon[key];
        return (
          <SvgColor key={key}>
            <p style={{ marginRight: 16 }}>{splitAndCapitalize(key)}</p>
            <Component />
          </SvgColor>
        );
      })}
    </div>
  );
};

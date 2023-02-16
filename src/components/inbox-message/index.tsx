import * as Icon from '../icon';
import { InboxMessageProps } from './types';
import { InboxDiv, InboxSpan } from './styles';

const InboxMessage = ({ inboxMessage }: InboxMessageProps) => (
  <InboxDiv>
    <Icon.InboxMessage />
    <InboxSpan>{inboxMessage}</InboxSpan>
  </InboxDiv>
);

export { InboxMessage };

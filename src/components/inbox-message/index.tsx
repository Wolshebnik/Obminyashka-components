import * as Icon from '../icon';
import { IInboxMessageProps } from './types';
import { InboxDiv, InboxSpan } from './styles';

const InboxMessage = ({ inboxMessage }: IInboxMessageProps) => (
  <InboxDiv>
    <Icon.InboxMessage />
    <InboxSpan>{inboxMessage}</InboxSpan>
  </InboxDiv>
);

export { InboxMessage };

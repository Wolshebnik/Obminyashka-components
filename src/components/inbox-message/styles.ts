import styled, { css } from 'styled-components';

export const InboxDiv = styled.div`
  position: relative;
  margin-left: 16px;
  cursor: pointer;

  path {
    transition: fill 0.3s ease;
  }

  > svg {
    height: 48px;
    width: 48px;
  }

  ${({ theme }) => css`
    &:hover {
      svg {
        path {
          fill: ${theme.colors.inboxMessage.inboxMessageHover};
        }
      }
    }

    &:active {
      svg {
        path {
          fill: ${theme.colors.inboxMessage.inboxMessageActive};
        }
      }
    }
  `}
`;

export const InboxSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -62%);
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
`;

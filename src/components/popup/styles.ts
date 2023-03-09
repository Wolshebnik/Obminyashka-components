import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.activeColor};
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 200ms;
`;

export const Content = styled.div`
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  min-height: 50px;
  min-width: 50px;
  max-height: 80%;
  max-width: 80%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
`;

// export const Backdrop = styled.div`
//   position: fixed;

//   & .modal-content {
//     transform: translateY(100px);
//     transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
//     opacity: 0;
//   }

//   &.active {
//     transition-duration: 250ms;
//     transition-delay: 0ms;
//     opacity: 1;

//     & .modal-content {
//       transform: translateY(0);
//       opacity: 1;
//       transition-delay: 150ms;
//       transition-duration: 350ms;
//     }
//   }
// `;

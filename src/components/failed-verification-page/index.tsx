import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonNew } from 'components/button-new';

import { IFailedVerificationProps } from './types';

import * as Styles from './styles';

export const FailedVerificationPage = ({
  text,
  title,
  onClick,
  routeRegistration,
  textBtnRegistration,
  textBtnSendNewMessage,
}: IFailedVerificationProps) => {
  return (
    <>
      <Styles.BackGround>
        <div>
          <Styles.Title>{title}</Styles.Title>
          <Styles.Text>{text}</Styles.Text>

          <Styles.EggOnCloud>
            <Styles.Egg />
            <Styles.CloudForEgg />
          </Styles.EggOnCloud>

          <Styles.BtnBlock>
            <Link to={routeRegistration}>
              <ButtonNew
                height={'50px'}
                width={'290px'}
                colorType={'white'}
                styleType={'default'}
                text={textBtnRegistration}
              ></ButtonNew>
            </Link>

            <ButtonNew
              height={'50px'}
              width={'290px'}
              onClick={onClick}
              colorType={'white'}
              styleType={'default'}
              text={textBtnSendNewMessage}
            ></ButtonNew>
          </Styles.BtnBlock>

          <Styles.CloudNull />
          <Styles.CloudOne />
          <Styles.CloudTwo />
          <Styles.CloudThree />
          <Styles.CloudFour />
        </div>
      </Styles.BackGround>
    </>
  );
};

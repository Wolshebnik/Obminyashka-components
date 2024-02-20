import { useMemo } from 'react';

import { Logo } from '../logo';
import * as Icon from '../icon';
import { Deals } from '../deals';
import { decoded } from './helper';
import * as Styles from './styles';
import { IFooterProps } from './types';

export const Footer = ({
  text,
  name,
  tel1,
  tel2,
  email,
  rules,
  toMain,
  protect,
  charity,
  toDeals,
  toRules,
  questions,
  toCharity,
  toQuestions,
  inFooterOAuth,
}: IFooterProps) => {
  const timeDate = new Date();
  const yearNow = timeDate.getFullYear();

  const decodedContacts = useMemo(() => {
    const decodedEmail = decoded(email);
    const decodedTel1 = decoded(tel1);
    const decodedTel2 = decoded(tel2);

    return {
      email: decodedEmail,
      tel1: decodedTel1,
      tel2: decodedTel2,
    };
  }, []);

  return (
    <Styles.Container inFooterOAuth={inFooterOAuth}>
      <Styles.Wrapper>
        <Styles.Blocks>
          <Styles.Lists>
            <Styles.LogoWrap>
              <Logo inFooter inFooterOAuth={inFooterOAuth} to={toMain} />
            </Styles.LogoWrap>

            <Deals
              heartIcon
              background
              text={text}
              to={toDeals}
              inFooterOAuth={inFooterOAuth}
            />
          </Styles.Lists>

          <Styles.Lists>
            <Styles.Span inFooterOAuth={inFooterOAuth}>
              <Icon.Phone />
            </Styles.Span>

            <Styles.Contact href={`mailto:${decodedContacts.email}`}>
              {decodedContacts.email}
            </Styles.Contact>

            <Styles.Contact href={`tel:${decodedContacts.tel1}`}>
              {decodedContacts.tel1}
            </Styles.Contact>

            <Styles.Contact href={`tel:${decodedContacts.tel2}`}>
              {decodedContacts.tel2}
            </Styles.Contact>
          </Styles.Lists>

          <Styles.Lists>
            <Styles.Span inFooterOAuth={inFooterOAuth}>
              <Icon.QuestionMark />
            </Styles.Span>

            <Styles.FootLink to={toRules}>{rules}</Styles.FootLink>

            <Styles.FootLink to={toCharity}>{charity}</Styles.FootLink>

            <Styles.FootLink to={toQuestions}>{questions}</Styles.FootLink>
          </Styles.Lists>
        </Styles.Blocks>
      </Styles.Wrapper>

      <Styles.CopyContainer inFooterOAuth={inFooterOAuth}>
        <Styles.SpanCopy>&copy; {protect}</Styles.SpanCopy>

        <Styles.SpanCopy>{`${yearNow} / ${name}`}</Styles.SpanCopy>
      </Styles.CopyContainer>
    </Styles.Container>
  );
};

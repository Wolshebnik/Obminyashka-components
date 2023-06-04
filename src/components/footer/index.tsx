import { useNavigate } from 'react-router-dom';

import { Logo } from 'components/logo';
import { Deals } from 'components/deals';

import * as Icon from '../icon';
import * as Styles from './styles';
import { IFooterProps } from './types';

export const Footer = ({
  text,
  name,
  rules,
  toMain,
  protect,
  charity,
  toDeals,
  toRules,
  questions,
  toCharity,
  toQuestions,
}: IFooterProps) => {
  const navigate = useNavigate();
  const timeDate = new Date();
  const yearNow = timeDate.getFullYear();

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.Blocks>
          <Styles.Lists>
            <Styles.LogoWrap>
              <Logo inFooter onClick={() => navigate(toMain)} />
            </Styles.LogoWrap>
            <Deals background heartIcon to={toDeals} text={text} />
          </Styles.Lists>

          <Styles.Lists>
            <Styles.Span>
              <Icon.Phone />
            </Styles.Span>

            <Styles.Contact href="mailto:&#111;&#098;&#109;&#105;&#110;&#121;&#097;&#115;&#104;&#107;&#097;&#046;&#115;&#112;&#097;&#099;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
              &#111;&#098;&#109;&#105;&#110;&#121;&#097;&#115;&#104;&#107;&#097;&#046;&#115;&#112;&#097;&#099;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
            </Styles.Contact>

            <Styles.Contact href="tel:&#43;&#51;&#56;&#48;&#57;&#51;&#49;&#50;&#51;&#52;&#53;&#54;&#55;">
              +3 80 (93) 123 45 67
            </Styles.Contact>

            <Styles.Contact href="tel:&#43;&#51;&#56;&#48;&#57;&#51;&#49;&#50;&#51;&#52;&#53;&#54;&#55;">
              +3 80 (93) 123 45 67
            </Styles.Contact>
          </Styles.Lists>

          <Styles.Lists>
            <Styles.Span>
              <Icon.QuestionMark />
            </Styles.Span>

            <Styles.FootLink to={toRules}>{rules}</Styles.FootLink>

            <Styles.FootLink to={toCharity}>{charity}</Styles.FootLink>

            <Styles.FootLink to={toQuestions}>{questions}</Styles.FootLink>
          </Styles.Lists>
        </Styles.Blocks>
      </Styles.Wrapper>

      <Styles.CopyContainer>
        <Styles.SpanCopy>&copy; {protect}</Styles.SpanCopy>

        <Styles.SpanCopy>{`${yearNow} / ${name}`}</Styles.SpanCopy>
      </Styles.CopyContainer>
    </Styles.Container>
  );
};

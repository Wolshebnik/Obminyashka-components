import { useMemo } from 'react';

import { Button, Icon } from '..';
import * as Styles from './styles';
import { IProductPostData } from './types';

const ProductPostData = ({
  age,
  lang,
  size,
  title,
  wishes,
  gender,
  season,
  buttonText,
  readyForOffers,
  translatedTextAge,
  translatedTextSize,
  translatedTextGender,
  translatedTextSeason,
  translatedTextCheckInUl,
  translatedTextChangesTo,
  translatedTextDescription,
}: IProductPostData) => {
  const transformWishes = readyForOffers
    ? [...(wishes || []), translatedTextCheckInUl]
    : wishes;

  const sm = useMemo(() => (lang === 'en' ? 'sm' : 'см'), [lang]);

  return (
    <Styles.Container>
      <div>
        <Styles.WrapperContainer>
          <Styles.TitleH2>{title}</Styles.TitleH2>
        </Styles.WrapperContainer>

        <Styles.WrapperContainer>
          <Styles.PostDataDescriptionText>
            <Styles.PostDataDescriptionSpan>
              {`${translatedTextChangesTo}:`}
            </Styles.PostDataDescriptionSpan>
          </Styles.PostDataDescriptionText>

          <Styles.PostDataDescriptionOl>
            {transformWishes?.map((item, idx) => (
              <Styles.PostDataDescriptionOlItem key={String(`li_${idx}`)}>
                <Icon.ProductPostCheck style={{ marginRight: '10px' }} />
                {item}
              </Styles.PostDataDescriptionOlItem>
            ))}
          </Styles.PostDataDescriptionOl>
        </Styles.WrapperContainer>

        <Styles.ButtonContainer>
          <Button text={buttonText} width={250} />
        </Styles.ButtonContainer>
      </div>

      <div>
        <Styles.WrapperContainer>
          <Styles.TitleH2>{`${translatedTextDescription}:`}</Styles.TitleH2>
        </Styles.WrapperContainer>

        <Styles.PostDataBoxContainer>
          <Styles.WrapperContainer>
            <Styles.PostDataDescriptionUl>
              <Styles.PostDataDescriptionUlItem>
                <Styles.PostDataDescriptionSpan>
                  {`${
                    size ? `${translatedTextSize} /` : ''
                  } ${translatedTextAge}:`}
                </Styles.PostDataDescriptionSpan>
              </Styles.PostDataDescriptionUlItem>

              <Styles.PostDataDescriptionUlItem>
                <Styles.PostDataDescriptionSpan>
                  {`${translatedTextSeason}:`}
                </Styles.PostDataDescriptionSpan>
              </Styles.PostDataDescriptionUlItem>

              <Styles.PostDataDescriptionUlItem>
                <Styles.PostDataDescriptionSpan>
                  {`${translatedTextGender}:`}
                </Styles.PostDataDescriptionSpan>
              </Styles.PostDataDescriptionUlItem>
            </Styles.PostDataDescriptionUl>
          </Styles.WrapperContainer>

          <Styles.WrapperContainer>
            <Styles.PostDataDescriptionUl>
              <Styles.PostDataDescriptionUlItem>
                {`${size ? `${size} ${sm} /` : ''} ${age ?? ''}`}
              </Styles.PostDataDescriptionUlItem>

              <Styles.PostDataDescriptionUlItem>
                {season}
              </Styles.PostDataDescriptionUlItem>

              <Styles.PostDataDescriptionUlItem>
                {gender}
              </Styles.PostDataDescriptionUlItem>
            </Styles.PostDataDescriptionUl>
          </Styles.WrapperContainer>
        </Styles.PostDataBoxContainer>
      </div>
    </Styles.Container>
  );
};
export { ProductPostData };

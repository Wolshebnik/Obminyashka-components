// import { getTranslatedText } from 'components/local/localization';
import * as Styles from './styles';
import { Avatar } from '../avatar';
import { EllipsisText } from '../ellipsis-text';
import { IProductOwnerDataProps } from './types';

const ProductOwnerData = ({
  avatar,
  name,
  date,
  city,
  phone,
  translatedText,
}: IProductOwnerDataProps) => {
  return (
    <Styles.Container>
      <Styles.ProductOwner>
        <Styles.ProductOwnerAvatar>
          <Avatar height={32} width={32} source={avatar} />
        </Styles.ProductOwnerAvatar>

        <Styles.ProductOwnerName>
          <Styles.ProductOwnerTitleH2>{name}</Styles.ProductOwnerTitleH2>
        </Styles.ProductOwnerName>
      </Styles.ProductOwner>

      <Styles.PostData>
        <Styles.PostReqData>
          <Styles.PostReqDataUl>
            {date && (
              <Styles.PostReqDataUlItem>
                <Styles.PostReqDataSpan>
                  {translatedText}
                </Styles.PostReqDataSpan>
              </Styles.PostReqDataUlItem>
            )}

            <Styles.PostReqDataUlItem>
              <Styles.PostReqDataSpan>{translatedText}</Styles.PostReqDataSpan>
            </Styles.PostReqDataUlItem>

            {phone && (
              <Styles.PostReqDataUlItem>
                <Styles.PostReqDataSpan>
                  {translatedText}
                </Styles.PostReqDataSpan>
              </Styles.PostReqDataUlItem>
            )}
          </Styles.PostReqDataUl>
        </Styles.PostReqData>

        <Styles.PostResData>
          <Styles.PostReqDataUl>
            {date && (
              <Styles.PostReqDataUlItem>{date}</Styles.PostReqDataUlItem>
            )}

            <Styles.PostReqDataUlItem style={{ width: '200px' }}>
              <EllipsisText>{city}</EllipsisText>
            </Styles.PostReqDataUlItem>

            {phone && (
              <Styles.PostReqDataUlItem>{phone}</Styles.PostReqDataUlItem>
            )}
          </Styles.PostReqDataUl>
        </Styles.PostResData>
      </Styles.PostData>
    </Styles.Container>
  );
};
export { ProductOwnerData };

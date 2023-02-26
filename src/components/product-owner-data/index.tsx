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
  translatedTextDate,
  translatedTextCity,
  translatedTextPhone,
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
          <Styles.PostReqDataBlock>
            {date && (
              <Styles.PostReqDataText>
                {translatedTextDate}
              </Styles.PostReqDataText>
            )}

            <Styles.PostReqDataText>
              {translatedTextCity}
            </Styles.PostReqDataText>

            {phone && (
              <Styles.PostReqDataText>
                {translatedTextPhone}
              </Styles.PostReqDataText>
            )}
          </Styles.PostReqDataBlock>
        </Styles.PostReqData>

        <Styles.PostResData>
          <Styles.PostReqDataBlock>
            {date && (
              <Styles.PostReqDataText style={{ color: 'black' }}>
                {date}
              </Styles.PostReqDataText>
            )}

            <Styles.PostReqDataText style={{ width: '200px', color: 'black' }}>
              <EllipsisText id={city} width={300}>
                {city}
              </EllipsisText>
            </Styles.PostReqDataText>

            {phone && (
              <Styles.PostReqDataText style={{ color: 'black' }}>
                {phone}
              </Styles.PostReqDataText>
            )}
          </Styles.PostReqDataBlock>
        </Styles.PostResData>
      </Styles.PostData>
    </Styles.Container>
  );
};
export { ProductOwnerData };

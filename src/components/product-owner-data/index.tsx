import * as Styles from './styles';
import { Avatar } from '../avatar';
import { EllipsisText } from '../ellipsis-text';
import { IProductOwnerDataProps } from './types';

const ProductOwnerData = ({
  name,
  date,
  city,
  phone,
  avatar,
  dateText,
  cityText,
  phoneText,
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
              <Styles.PostReqDataText>{dateText}</Styles.PostReqDataText>
            )}

            <Styles.PostReqDataText>{cityText}</Styles.PostReqDataText>

            {phone && (
              <Styles.PostReqDataText>{phoneText}</Styles.PostReqDataText>
            )}
          </Styles.PostReqDataBlock>
        </Styles.PostReqData>

        <Styles.PostResData>
          <Styles.PostReqDataBlock>
            {date && (
              <Styles.PostReqDataText color="black">
                {date}
              </Styles.PostReqDataText>
            )}

            <Styles.PostReqDataText color="black" style={{ width: '200px' }}>
              <EllipsisText id={city} width={300}>
                {city}
              </EllipsisText>
            </Styles.PostReqDataText>

            {phone && (
              <Styles.PostReqDataText color="black">
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

import { Images } from 'components';

import * as Styles from './styles';
import { ICatygoryNav } from './types';

const NavCategory = ({
  link,
  textToys,
  textShoes,
  textBooks,
  textOther,
  textClothes,
  textFurniture,
  textKidsUpToYear,
  textTransportForChildren,
}: ICatygoryNav) => {
  return (
    <Styles.List>
      <Styles.Wrapper>
        <Styles.NavbarLinkContainer>
          <Styles.NavbarLink to={link}>
            <Styles.Img src={Images.clothes} alt="clothes" />
          </Styles.NavbarLink>
          <Styles.Span>{textClothes}</Styles.Span>
        </Styles.NavbarLinkContainer>

        <Styles.NavbarLinkContainer>
          <Styles.NavbarLink to={link}>
            <Styles.Img src={Images.shoes} alt="shoes" />
          </Styles.NavbarLink>
          <Styles.Span>{textShoes}</Styles.Span>
        </Styles.NavbarLinkContainer>

        <Styles.NavbarLinkContainer>
          <Styles.NavbarLink to={link}>
            <Styles.Img src={Images.toys} alt="toys" />
          </Styles.NavbarLink>
          <Styles.Span>{textToys}</Styles.Span>
        </Styles.NavbarLinkContainer>

        <Styles.NavbarLinkContainer>
          <Styles.NavbarLink to={link}>
            <Styles.Img
              src={Images.transportForChildren}
              alt="transportForChildren"
            />
          </Styles.NavbarLink>
          <Styles.Span>{textTransportForChildren}</Styles.Span>
        </Styles.NavbarLinkContainer>

        <Styles.NavbarLinkContainer>
          <Styles.NavbarLink to={link}>
            <Styles.Img src={Images.furniture} alt="furniture" />
          </Styles.NavbarLink>
          <Styles.Span>{textFurniture}</Styles.Span>
        </Styles.NavbarLinkContainer>

        <Styles.NavbarLinkContainer>
          <Styles.NavbarLink to={link}>
            <Styles.Img src={Images.kidsUpToYear} alt="kidsUpToYear" />
          </Styles.NavbarLink>
          <Styles.Span>{textKidsUpToYear}</Styles.Span>
        </Styles.NavbarLinkContainer>

        <Styles.NavbarLinkContainer>
          <Styles.NavbarLink to={link}>
            <Styles.Img src={Images.books} alt="books" />
          </Styles.NavbarLink>
          <Styles.Span>{textBooks}</Styles.Span>
        </Styles.NavbarLinkContainer>

        <Styles.NavbarLinkContainer>
          <Styles.NavbarLink to={link}>
            <Styles.Img src={Images.other} alt="other" />
          </Styles.NavbarLink>
          <Styles.Span>{textOther}</Styles.Span>
        </Styles.NavbarLinkContainer>
      </Styles.Wrapper>
    </Styles.List>
  );
};

export default NavCategory;

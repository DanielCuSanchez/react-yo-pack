import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Container from 'common/src/components/UI/Container';
import { HowWrapper, BtnWrapper } from './how.style';

const HowItWorksSection = ({
  row,
  contentArea,
  greetingStyle,
  aboutStyle,
  button,
}) => {
  return (
    <HowWrapper id="news_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Heading content="Contacto" {...greetingStyle} />

            <Text
              content="Parque Tecnológico, Prolongación Tecnológico Norte 801, Soriana, 76140 Santiago de Querétaro, Qro. Sexto Piso"
              {...aboutStyle}
            />
            <Text
              content="Correo: yopackmx@gmail.com"
              {...aboutStyle}
            />
            <Text
              content="Tel. 4611802139"
              {...aboutStyle}
            />
            <BtnWrapper>
              <Link href="#">
                <a>
                  <Button
                    title="WhatsApp"
                    variant="textButton"
                    icon={<i className="flaticon-next" />}
                    {...button}
                  />
                </a>
              </Link>
            </BtnWrapper>
          </Box>
        </Box>
      </Container>
    </HowWrapper>
  );
};

HowItWorksSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  greetingStyle: PropTypes.object,
  aboutStyle: PropTypes.object,
  button: PropTypes.object,
};

HowItWorksSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  contentArea: {
    width: ['50%', '50%', '45%', '50%', '50%'],
    p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  greetingStyle: {
    as: 'h3',
    fontSize: ['22px', '26px', '26px', '30px', '36px'],
    fontWeight: '600',
    color: '#15172C',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    textAlign: 'left',
    fontFamily: 'Poppins',
  },
  aboutStyle: {
    lineHeight: ['28px', '32px', '32px', '32px', '32px'],
    mt: ['0px', '0px', '0px', '0px', '0px'],
    mb: ['20px', '20px', '20px', '20px', '20px'],
    maxWidth: ['100%', '100%', '100%', '410px', '410px'],
    textAlign: ['left', 'left'],
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#15172C',
    fontFamily: 'Lato',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    minHeight: '47px',
    pt: '0px',
    pb: '0',
  },
};

export default HowItWorksSection;

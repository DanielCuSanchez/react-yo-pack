import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import Button from 'reusecore/src/elements/Button';
import { OptionWrapper } from './rideOption.style';
import YoPack from 'common/src/assets/image/ride/yp-256px.png';
import companyImg from 'common/src/assets/image/ride/YP-isotipo.png';
import BussinessImg from 'common/src/assets/image/ride/YP-moto.png';

const SkillSection = ({
  secYoPackImg,
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  row,
  col,
  col1,
  col2,
  desTitleWrapper,
  rideTitle,
  desOnHover,
  desDetails,
  button1,
  button2,
}) => {
  const [state, setState] = useState({
    active: true,
  });
  const activeStatus = state.active;

  return (
    <OptionWrapper id="ride_section">
      <Box {...sectionWrapper} as="section">
        <Container noGutter mobileGutter width="1200px" className="container">
          <Box {...secTitleWrapper}>
            <Image {...secYoPackImg} src={YoPack} alt="Soluciones de logistica" className="imgYoPack" />
            <Text
              {...secDescription}
              className="textYopack"
              content="Somos una empresa de paqueteria intermediria, ofrecemos soluciones de logisticia y entrega de paquetes. Recolectamos y entregamos en menos de 90 minutos."
            />
          </Box>

          <Box {...row}>
            <Box
              {...col}
              {...col1}
              className={activeStatus ? 'riderBlock active-item' : 'riderBlock'}
              onMouseEnter={() => setState({ active: true })}
            >
              <Box
                {...desTitleWrapper}
                className="desTitleWrapper desTitleWrapperLeft"
              >
                <Heading {...rideTitle} content="Negocios" className="desTitle" />
                <Box {...desOnHover} className="desOnHover desOnHoverLeft">
                  <Text
                    {...desDetails}
                    className="desDetailsFirst"
                    content="Incrementa tus ventas"
                  />
                  <Text {...desDetails} content="Ofrece envíos a domicilio, nosotros los entregamos por ti" />
                  <Link href="#services">
                    <a className="buttonStyle">
                      <Button title="Saber más" {...button1} />
                    </a>
                  </Link>
                  <Link href="https://vigorous-heyrovsky-e32014.netlify.com/">
                    <a className="buttonStyle signupBtn">
                      <Button title="Cotizar ahora" {...button2} />
                    </a>
                  </Link>
                </Box>
              </Box>
              <Image
                src={BussinessImg}
                className="rider_image_area"
                alt="Man Image"
              />
            </Box>
            <Box
              {...col}
              {...col2}
              className={
                activeStatus === false
                  ? 'driverBlock active-item'
                  : 'driverBlock'
              }
              onMouseEnter={() => setState({ active: false })}
            >
              <Image
                src={companyImg}
                className="driver_image_area"
                alt="Driver Image"
              />
              <Box {...desTitleWrapper} className="desTitleWrapper">
                <Heading {...rideTitle} content="Empresas" className="desTitle" />
                <Box {...desOnHover} className="desOnHover ">
                  <Text
                    {...desDetails}
                    className="desDetailsFirst"
                    content="Reduce tiempo y dinero"
                  />
                  <Text
                    {...desDetails}
                    content="Programa tus entregas y logistica con YoPack ofrecemos servicios por evento o suscripciones de entrega mensuales"
                  />
                  <Link href="#services">
                    <a className="buttonStyle">
                      <Button title="Saber Más" {...button1} />
                    </a>
                  </Link>
                  <Link href="https://vigorous-heyrovsky-e32014.netlify.com/">
                    <a className="buttonStyle signupBtn">
                      <Button title="Cotizar Ahora" {...button2} />
                    </a>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </OptionWrapper>
  );
};

SkillSection.propTypes = {
  secYoPackImg: PropTypes.object,
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  skillTitle: PropTypes.object,
  skillDescription: PropTypes.object,
  skillSuccessRate: PropTypes.object,
  successRateText: PropTypes.object,
  col: PropTypes.object,
  col1: PropTypes.object,
  col2: PropTypes.object,
  desTitleWrapper: PropTypes.object,
  rideTitle: PropTypes.object,
  desOnHover: PropTypes.object,
  desDetails: PropTypes.object,
  button1: PropTypes.object,
  button2: PropTypes.object,
};

SkillSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '10px', '10px', '180px'],
    pb: ['60px', '80px', '10px', '10px', '120px'],
  },
  secTitleWrapper: {
    mb: ['65px', '65px', '80px', '50px', '50px'],
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '36px'],
    fontWeight: '600',
    color: '#15172C',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  secDescription: {
    fontSize: ['18px', '19px'],
    fontWeight: '550',
    color: '#15172C',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
    width: '800px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
    fontFamily: 'Lato',
  },
  rideTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '36px'],
    fontWeight: '600',
    color: '#15172C',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  col: {
    width: '48%',
    bg: '#fcfcfc',
    pt: ['50px', '50px', '50px', '110px', '110px'],
    pb: ['50px', '50px', '50px', '110px', '110px'],

    flexBox: true,
  },
  col1: {
    pl: ['30px', '30px', '50px', '85px', '85px'],
  },
  col2: {
    pr: ['20px', '20px', '40px', '85px', '85px'],
  },
  desTitleWrapper: {
    flexBox: true,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  desOnHover: {
    textAlign: 'right',
    width: '100%',
  },
  desDetails: {
    fontSize: ['14px', '14px', '16px', '16px', '16px'],
    fontWeight: '400',
    color: '#15172C',
    lineHeight: '1.5',
    mb: '0',
    maxWidth: '100%',
    fontFamily: 'Lato',
  },
  button1: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#000',
    border: '0',
    minHeight: '55px',
    p: '0',
    bg: 'tarnsperant',
  },
  button2: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#1A73E8',
    border: '0',
    minHeight: 'auto',
    p: '0',
  },
  secYoPackImg:{
    textAlign: 'center',
    width: '300px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
  },
};

export default SkillSection;

import PropTypes from 'prop-types';
import currencyUtils from '../../utils/currencyUtils'
import {
    bankSvg,
    registrasiJamaahSvg,
    cabangSvg,
    agenSvg,
} from '../../assets'

import {
    Title,
    Container,
    Nominal,
    IconWrraper,
    Icon,
    InfoWrapper,
    MrdWrapper,
    MrdInfo,
    MrdIcon,
} from './cardElements';

import {
    arrowUp,
} from '../../assets'

function Card({ data }) {
    let iconImage

    if(data.title === 'Total Revenue') {
        iconImage = bankSvg;
    } else if (data.title === 'Total Pendaftaran') {
        iconImage = registrasiJamaahSvg;
    } else if (data.title === 'Total Cabang') {
        iconImage = cabangSvg;
    } else if (data.title === 'Total Agen') {
        iconImage = agenSvg;
    }
  return (
    <Container>
        <IconWrraper>
            <Icon src={iconImage}/>
        </IconWrraper>
        <Nominal>
        
            {data.title === 'Total Revenue' ?
            currencyUtils.formatToRupiah(data.total)
            : data. total
            }
        </Nominal>
        <InfoWrapper>
            <Title>
                {data.title}
            </Title>
            <MrdWrapper>
                <MrdInfo>{data.monthlyRevenueDifference}%</MrdInfo>
                <MrdIcon src={arrowUp}/>
            </MrdWrapper>
        </InfoWrapper>
    </Container>
  )
}

Card.propTypes = {
    data: PropTypes.array.isRequired,
  }

export default Card

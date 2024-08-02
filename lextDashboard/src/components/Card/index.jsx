import PropTypes from 'prop-types';
import currencyUtils from '../../utils/currencyUtils/index.jsx';
import {
    bankSvg,
    registrasiJamaahSvg,
    cabangSvg,
    agenSvg,
} from '../../assets/index.jsx';

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
} from './cardElements.jsx';

import {
    arrowUp,
} from '../../assets/index.jsx';

function Card({ data = {} }) {
    let iconImage;

    if (data.title === 'Total Revenue') {
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
                <Icon src={iconImage} />
            </IconWrraper>
            <Nominal>
                {data.title === 'Total Revenue'
                    ? currencyUtils.formatToRupiah(data.total)
                    : data.total}
            </Nominal>
            <InfoWrapper>
                <Title>{data.title}</Title>
                <MrdWrapper>
                    <MrdInfo>{data.monthlyRevenueDifference}%</MrdInfo>
                    <MrdIcon src={arrowUp} />
                </MrdWrapper>
            </InfoWrapper>
        </Container>
    );
}

Card.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        monthlyRevenueDifference: PropTypes.number,
    }).isRequired,
};

export default Card;

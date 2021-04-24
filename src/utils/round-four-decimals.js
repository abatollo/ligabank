const roundFourDecimals = (number) => Math.round( ( number + Number.EPSILON ) * 10000 ) / 10000;

export {roundFourDecimals};

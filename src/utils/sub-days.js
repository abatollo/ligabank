const subDays = (date, sub) => new Date(date.getFullYear(), date.getMonth(), date.getDate() - sub);

export {subDays};
